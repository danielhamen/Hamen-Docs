const DocsElements = {
    makeTreeTitle() {
        let treeTitle = document.querySelector("tree-title");
        treeTitle.innerHTML = `<div class="docs-tree-titles"><span class="title">${treeTitle.innerHTML}:</span><span class="material-symbols-outlined" id="docs-tree-exit-icon"> close </span></div><div class="docs:hr" style="width: 80%;margin-left: auto;margin-right: auto;"></div>`
    }, makeContentTitle() {
        let contentTitle = document.querySelector("content-title");
        let contentTitleWrapper = document.createElement("div");
        contentTitleWrapper.classList.add("content-titles");
        contentTitleWrapper.innerHTML = `<h1 id="content-title"> ${contentTitle.innerHTML} </h1><span class="documentation-options"><a href="#" class="documentation-option">PDF</a><div class="documentation-option-separator"></div><a href="#" class="documentation-option">XML</a><div class="documentation-option-separator"></div><a href="#" class="documentation-option">Markdown</a></span><br><div class="docs:hr"></div>`;
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
                tcs.innerHTML += `<a class="option" href="${items[item]["href"]}" id="${items[item]["id"]}">${item}</a>`;
            }); wrapper.appendChild(tcs);
        }); document.querySelector("tree-body").appendChild(wrapper);
    }, makeDocsCode() {
        Array.from(document.querySelectorAll(".docs-code")).forEach(docsCode => {
            let HTML = docsCode.innerText.split("\n");
            let wrapper = document.createElement("code");

            // Get language:
            let language = docsCode.getAttribute("lang");
            if (!language) {
                language = "default";
            } else {
                language = language.toString().toLowerCase();
            }

            // Python Formatting:
            if (language === "python") {
                // Go through each line:
                for (let i = 0; i < HTML.length; i++) {
                    // Get, & trim the line:
                    const line = HTML[i].trim();

                    // Line is an output:
                    if (line.startsWith(">>> ")) {
                        let codeWrapper = document.createElement("span");
                        codeWrapper.classList.add("code:output");

                        // Create terminal span:
                        let terminal = document.createElement("span");
                        terminal.classList.add("code:terminal");

                        // Create line text:
                        let lineText = document.createElement("span");
                        lineText.innerText = line.slice(4);

                        codeWrapper.appendChild(terminal);
                        codeWrapper.appendChild(lineText);

                        wrapper.appendChild(codeWrapper);
                    } else {
                        // Go through each character in the line:
                        let isString = false;
                        for (let i = 0; i < line.length; i++) {
                            const char = line[i];

                            // Character is defining or exiting a string:
                            if (char === "\"" || char === "'") {
                                if (isString) {
                                    // Character is exiting a string:
                                    isString = false;
                                } else {
                                    // Character is defining a new string:
                                    isString = true;
                                }

                                wrapper.innerHTML += `<span class="code:str">${char}</span>`;
                            }

                            // Character is in a string:
                            else if (isString) {
                                wrapper.innerHTML += `<span class="code:str">${char}</span>`;
                            }

                            // Character is a number:
                            else if (!isNaN(parseInt(char))) {
                                wrapper.innerHTML += `<span class="code:num">${char}</span>`;
                            }

                            // Character is a decimal (the last character is a number):
                            else if ([".", "+", "-"].indexOf(char) !== -1 && (!isNaN(parseInt(line[i - 1])) || !isNaN(parseInt(line[i + 1])))) {
                                wrapper.innerHTML += `<span class="code:num">${char}</span>`;
                            }

                            // Character is a bracket:
                            else if (["[", "]", "(", ")", "{", "}"].indexOf(char) !== -1) {
                                wrapper.innerHTML += `<span class="code:bracket">${char}</span>`;
                            }

                            // Character is just a random letter or number:
                            else if (/[a-zA-Z0-9]/.test(char)) {
                                // Character is a function:
                                let isFunc = false;
                                for (let i_ = i; i_ < line.length; i_++) {
                                    if (!/[a-zA-Z0-9\(]/.test(line[i_])) {
                                        break;
                                    }

                                    if (line[i_] == "(") {
                                        isFunc = true;
                                        break;
                                    }
                                } if (isFunc) {
                                    wrapper.innerHTML += `<span class="code:func">${char}</span>`;
                                }

                                // Character is not a function, nor variable:
                                else {
                                    wrapper.innerHTML += `<span class="code:cls">${char}</span>`;
                                }
                            }

                            // Character is a variable:
                            else if (char === "=") {
                                // Get variable name:
                                let children = wrapper.children;
                                let varName = [];
                                for (let i_ = children.length - 1; i_ >= 0; i_--) {
                                    const child = children[i_];
                                    if (/[a-zA-Z0-9\_ ]/.test(child.innerHTML)) {
                                        varName.push(`<span class="code:var">${child.innerHTML}</span>`);
                                        child.classList.add("display-none");
                                    } else {
                                        break;
                                    }
                                }
                                
                                if (varName !== []) {
                                    varName.reverse()
                                    wrapper.innerHTML += varName.join("") + `<span class="code:unknown">=</span>`;
                                }
                            }

                            // Character is unknown:
                            else {
                                wrapper.innerHTML += `<span class="code:unknown">${char}</span>`;
                            }
                        }

                        // wrapper.innerHTML += line;
                    }

                    // Finally, insert a break at the end of this line:
                    wrapper.innerHTML += "<br>";
                }

                docsCode.innerHTML = wrapper.innerHTML;
                
                // Remove hidden code:
                let hidden = docsCode.getElementsByClassName("display-none");
                while (hidden.length !== 0) {
                    hidden[0].remove();
                }

                // Get user's variables:
                let userVars = docsCode.getAttribute("vars");
                if (!userVars) {
                    userVars = [];
                } else {
                    userVars = userVars.split(",");
                }

                // Highlight variables:
                let children = docsCode.children;
                let classes = [[]];
                for (let i_ = 0; i_ < children.length; i_++) {
                    const child = children[i_];
                    if (child.classList.contains("code:cls")) {
                        classes[classes.length - 1].push(child);
                    } else {
                        classes.push([]);
                    }
                }; for (let i = 0; i < userVars.length; i++) {
                    const userVar = userVars[i];
                    for (let i_ = 0; i_ < classes.length; i_++) {
                        const class_ = classes[i_];
                        if (class_.length !== 0) {
                            let classValues = class_.map(span => span.innerHTML).join("");
                            if (classValues === userVar) {
                                class_.forEach(span => {
                                    span.classList.remove("code:cls");
                                    span.classList.add("code:var");
                                })
                            }
                        }
                    }
                }
            }

            // Unknown Formatting:
            else {
                throw "Error: No stated formatting type";
            }
        })
    }, addCodeBlockCopyIcon() {
        // Add to DOM:
        Array.from(document.querySelectorAll("docs-code-block")).forEach(box => {
            box.innerHTML = `<div class="code:copy-code-block"><span class="material-symbols-outlined"> content_copy </span></div>` + box.innerHTML;
        })

        // Add click event listener to 'Copy Code Block' tiles:
        Array.from(document.getElementsByClassName("code:copy-code-block")).forEach(codeBlock => {
            codeBlock.addEventListener("click", function() {
                HamenAPI.logMessage("Copied to Clipboard!");

                // Get the code:
                let code = codeBlock.parentElement.getElementsByTagName("code")[0].innerText.slice(0, -1);
                navigator.clipboard.writeText(code);
            })
        })
    }, makeFooter() {
        // Make footer:
        let footer = document.getElementsByClassName("docs:footer")[0];
        footer.innerHTML = `<div class="docs:hr"></div><p>© Copyright Hamen Docs</p><p>Latest Revision ID: <a href="#">${footer.getAttribute('id')}</a></p><div class="docs:hr"></div>`
    }
}

window.addEventListener("load", () => {
    DocsElements.makeContentTitle();
    try {DocsElements.makeTreeBody(); } catch (error) {};
    try {DocsElements.makeTreeTitle(); } catch (error) {};
    try {DocsElements.makeContentTitle(); } catch (error) {};
    try {DocsElements.makeContentBody(); } catch (error) {};
    try {DocsElements.relatedTopics(); } catch (error) {};
    try {DocsElements.makeDocsCode(); } catch (error) {};
    try {DocsElements.addCodeBlockCopyIcon(); } catch (error) {};
    try {DocsElements.makeFooter(); } catch (error) {};
})