import { REDIRECT_BASE_URL } from './lib/constants.js';

async function openSearchResultWindow(searchWord) {
    const url = browser.runtime.getURL('popup/result-view.html');
    const width = 540;
    const height = 400;

    const left = Math.round((screen.width / 2) - (width / 2));
    const top = Math.round((screen.height / 2) - (height / 2));

    try {
        const popupWindow = await browser.windows.create({
            url: `${url}?searchWord=${encodeURIComponent(searchWord)}`,
            type: "popup",
            width: width,
            height: height,
            top: top,
            left: left,
        });

        const focusChangeListener = async (windowId) => {
            if (windowId !== popupWindow.id && windowId !== browser.windows.WINDOW_ID_NONE) {
                browser.windows.remove(popupWindow.id)
                    .then(() => {
                        browser.windows.onFocusChanged.removeListener(focusChangeListener);
                    })
                    .catch((err) => {});
            }
        };

        browser.windows.onFocusChanged.addListener(focusChangeListener);
    } catch (err) {}
}

browser.runtime.onInstalled.addListener(() => {
    browser.menus.create({
        id: 'search-lexical-record',
        title: 'Dictionary',
        contexts: [ 'selection' ],
        icons: {
            '16': 'icons/popup/icon-16.png',
            '32': 'icons/popup/icon-32.png',
            '64': 'icons/popup/icon-64.png'
        }
    });
});

browser.menus.onClicked.addListener(async (info) => {
    if (info.menuItemId === 'search-lexical-record') {
        openSearchResultWindow(info.selectionText);
    }
});

browser.webNavigation.onCompleted.addListener(async (details) => {
    if (details.url.startsWith(REDIRECT_BASE_URL)) {
        const url = new URL(details.url);
        if (url.searchParams.get('searchWord')) {
            // Context-Menu redirect; so ignore this request
            return;
        }
        const authToken = url.searchParams.get('token');

        if (authToken) {
            await browser.storage.local.set({ authToken: authToken });

            await browser.tabs.remove(details.tabId);
        }
    }
}, { url: [{ urlMatches: `${REDIRECT_BASE_URL}*` }] });
