import { REDIRECT_BASE_URL } from '../../lib/constants.js';

(async () => {
    const storage = await browser.storage.local.get('authToken');
    if (storage.authToken) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchWord = urlParams.get('searchWord');

        const iframe = document.createElement('iframe');
        iframe.src = `${REDIRECT_BASE_URL}/?searchWord=${searchWord}&token=${storage.authToken}`;

        document.getElementById('selection-search-iframe').appendChild(iframe);
    }
})();
