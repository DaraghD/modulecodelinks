function linkModuleCodes() {
    let moduleCodePattern = /[A-Z]{2}\d{4}/; // Module codes have 2 uppercase letters followed by 4 numbers e.g CS4222, MA4402

    // Not all are td elements butmost
    let tdElements = document.querySelectorAll('td');

    tdElements.forEach(td => {
        let tdHTML = td.innerHTML;
        tdHTML.replace(moduleCodePattern, (match) => {
            let moduleCode = match.slice(0, 6);
            let linkUrl = `https://bookofmodules.ul.ie/Default.aspx?ModuleCodeParameter=%7C${moduleCode}%7C`;

            let linkElement = document.createElement('a');
            linkElement.href = linkUrl;
            linkElement.target = '_blank';
            linkElement.textContent = moduleCode;
            td.innerHTML = '';
            td.appendChild(linkElement);
        });
    });
}
window.addEventListener('load', linkModuleCodes);

