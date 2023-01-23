const DocsElements = {
    makeTreeTitle() {
        let treeTitle = document.querySelector("tree-title");
        treeTitle.innerHTML = `<div class="docs-tree-titles"><span class="title">${treeTitle.innerHTML}:</span><span class="material-symbols-outlined" id="docs-tree-exit-icon"> close </span></div><docs-hr style="width: 80%;margin-left: auto;margin-right: auto;"></docs-hr>`
    }, makeContentTitle() {
        let contentTitle = document.querySelector("content-title");
        let contentTitleWrapper = document.createElement("div");
        contentTitleWrapper.classList.add("content-titles");
        contentTitleWrapper.innerHTML = `<h1 id="content-title" class="add-section-link"> ${contentTitle.innerHTML} </h1><span class="documentation-options"><a href="#" class="documentation-option">PDF</a><div class="documentation-option-separator"></div><a href="#" class="documentation-option">XML</a><div class="documentation-option-separator"></div><a href="#" class="documentation-option">Markdown</a></span><br><docs-hr></docs-hr>`;
        contentTitle.parentElement.replaceChild(contentTitleWrapper, contentTitle);
    }, makeContentBody() {
        let contentBody = document.querySelector("content-body");
        let contentBodyWrapper = document.createElement("div");
        contentBodyWrapper.classList.add("content-body");
        contentBodyWrapper.innerHTML = contentBody.innerHTML;
        contentBody.parentElement.replaceChild(contentBodyWrapper, contentBody);
    }, relatedTopics() {
        let relatedTopics = document.querySelector("docs-related-topics");
        relatedTopics.innerHTML = `<h2 id="docs-related-topics-title"><b>Related Topics:</b></h2>` + relatedTopics.innerHTML;
    }, makeTreeBody() {
        let wrapper = document.createElement("div");
        Object.keys(treeBody).forEach(key => {
            let tcs = document.createElement("div");
            tcs.classList.add("docs-tcs");
            tcs.innerHTML += `<span class="title toggle"> ${key}: <span class="material-symbols-outlined chevron"> chevron_right </span></span>`;
            let items = treeBody[key];
            Object.keys(items).forEach(item => {
                tcs.innerHTML += `<a class="option" href="${items[item]}">${item}</a>`;
            }); wrapper.appendChild(tcs);
        }); document.querySelector("tree-body").appendChild(wrapper);
    }
}

window.addEventListener("load", () => {
    DocsElements.makeTreeBody();
    DocsElements.makeTreeTitle();
    DocsElements.makeContentTitle();
    DocsElements.makeContentBody();
    DocsElements.relatedTopics();
})