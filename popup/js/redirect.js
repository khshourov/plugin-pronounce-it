import { REDIRECT_BASE_URL } from '../../lib/contants.js';

(async () => {
    const storage = await browser.storage.local.get('authToken');
    if (!storage.authToken) {
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
        const iframe = document.createElement('iframe');
        iframe.src = `${REDIRECT_BASE_URL}?token=${storage.authToken ?? ''}`;

        document.getElementById('root').appendChild(iframe);
    }
})();
