/*
 * It's a bit ugly way to define the styles. I could've use
 * external css file and inject that css file. But there's
 * a possibility of name collision. We can also add a
 * unique prefix but I guess for this short function,
 * it's a bit overkill.
 */
function showPopupOverlay(url) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "10000";

    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;

    const popup = document.createElement("div");
    popup.style.width = "40%";
    popup.style.height = "40%";
    popup.style.backgroundColor = "white";
    popup.style.borderRadius = "8px";
    popup.style.overflow = "hidden";
    popup.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";

    popup.appendChild(iframe);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
}

/*
 * This method is already defined in redirect.js file.
 * In content scripts, we can't use import. But we
 * could have use a bundler like webpack to create
 * a single file. Again, feeling a bit lazy. So, I
 * just copy paste the method. Maybe later on, I
 * will revamp this plugin project.
 */
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

document.addEventListener("dblclick", async () => {
    const storage = await browser.storage.local.get(null);
    const searchWord = window.getSelection().toString().trim();

    const excludedDomains = storage.excludedDomains ? JSON.parse(storage.excludedDomains) : [];
    const domain = (new URL(window.location.href)).origin;
    const isDomainExcluded = excludedDomains.includes(domain);

    if (!isTokenExpired(storage.authToken) && !isDomainExcluded && searchWord.length > 0) {
        const searchUrl = `https://dictionary-api-ht6b.onrender.com/?token=${storage.authToken ?? ''}&searchWord=${searchWord ?? ''}`;
        showPopupOverlay(searchUrl);
    }
});
