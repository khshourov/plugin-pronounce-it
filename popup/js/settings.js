(async () => {
    const storage = await browser.storage.local.get('excludedDomains');
    const excludedDomains = storage.excludedDomains ? JSON.parse(storage.excludedDomains) : [];
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    const domain = (new URL(tab.url)).origin;
    const isDomainExcluded = excludedDomains.includes(domain);
    const stateClass = {
        active: isDomainExcluded ? 'icon-disabled' : 'icon-enabled',
        inactive: isDomainExcluded ? 'icon-enabled' : 'icon-disabled',
    };

    document.getElementById('permission-icon').classList.add(stateClass.active);

    const button = document.getElementById('permission-button');
    button.addEventListener('mouseenter', async () => {
        document.getElementById('permission-icon').classList.replace(stateClass.active, stateClass.inactive);
        document.getElementById('tooltip-text').textContent = `${isDomainExcluded ? 'Enable' : 'Disable'} double-click action on this domain`;
    });

    button.addEventListener('mouseleave', async () => {
        document.getElementById('permission-icon').classList.replace(stateClass.inactive, stateClass.active);
    });

    button.addEventListener('click', async () => {
        if (isDomainExcluded) {
            await browser.storage.local.set({
                'excludedDomains': JSON.stringify(excludedDomains.filter((excludedDomain) => domain !== excludedDomain))
            });
        } else {
            await browser.storage.local.set({
                'excludedDomains': JSON.stringify(excludedDomains.concat(domain))
            });
        }
        location.reload();
    });
})();
