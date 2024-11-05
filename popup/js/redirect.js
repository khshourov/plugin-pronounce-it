import { REDIRECT_BASE_URL } from '../../lib/constants.js';

(async () => {
    function isTokenExpired(token) {
        try {
            // Ensure token has three parts (header, payload, signature)
            const parts = token.split('.');
            if (parts.length !== 3) {
                return false;
            }

            const payload = JSON.parse(atob(parts[1]));
            const currentEpoch = Math.floor(Date.now() / 1000);
            return payload.exp && payload.exp < currentEpoch;
        } catch (error) {
            return false;
        }
    }

    const storage = await browser.storage.local.get('authToken');
    if (!storage.authToken || isTokenExpired(storage.authToken)) {
        const signInButton = document.createElement('button');
        signInButton.textContent = 'Google Sign-In';
        document.getElementById('root').appendChild(signInButton);

        signInButton.addEventListener('click', () => {
            const width = 600;
            const height = 600;
            const left = (screen.width / 2) - (width / 2);
            const top = (screen.height / 2) - (height / 2);
            window.open(`${REDIRECT_BASE_URL}/auth/google`, 'oauthPopup', `width=${width},height=${height},top=${top},left=${left}`);
        });
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const searchWord = urlParams.get('searchWord');

        const iframe = document.createElement('iframe');
        iframe.src = `${REDIRECT_BASE_URL}?token=${storage.authToken ?? ''}&searchWord=${searchWord ?? ''}`;

        document.getElementById('root').appendChild(iframe);
    }
})();
