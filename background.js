import { REDIRECT_BASE_URL } from './lib/contants.js';

browser.webNavigation.onCompleted.addListener(async (details) => {
    if (details.url.startsWith(REDIRECT_BASE_URL)) {
        const url = new URL(details.url);
        const authToken = url.searchParams.get('token');

        if (authToken) {
            await browser.storage.local.set({ authToken: authToken });

            await browser.tabs.remove(details.tabId);
        }
    }
}, { url: [{ urlMatches: `${REDIRECT_BASE_URL}*` }] });
