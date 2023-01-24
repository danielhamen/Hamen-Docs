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

                        // Get line text:
                        let lineText = line.slice(4);

                        codeWrapper.innerHTML += `<span class="code:terminal"></span>${lineText}`;

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

                // Change variables:
                let vars = Array.from(docsCode.getElementsByClassName("code:cls"));
                let userVars = docsCode.getAttribute("vars");
                if (!userVars) {
                    userVars = [];
                } else {
                    userVars = userVars.split(",");
                }

                // for (let i = 0; i < userVars.length; i++) {
                //     const userVar = userVars[i];
                //     for (let i_ = 0; i_ < vars.length; i_++) {
                //         const var_ = vars.slice(i_, i_ + userVar.length);
                //         let varName = "";
                //         for (let i__ = 0; i__ < var_.length; i__++) {
                //             varName += var_[i__].innerHTML;
                //         }

                //         if (userVars.indexOf(varName) !== -1) {
                //             for (let x = 0; x < var_.length; x++) {
                //                 const c = var_[x];
                //                 c.classList.remove("code:cls");
                //                 c.classList.add("code:var");
                //             }
                //             break;
                //         }
                //     }
                // }
            }

            // Unknown Formatting:
            else {
                throw "Error: No stated formatting type";
            }
        })
    }
}

window.addEventListener("load", () => {
    DocsElements.makeTreeBody();
    DocsElements.makeTreeTitle();
    DocsElements.makeContentTitle();
    DocsElements.makeContentBody();
    DocsElements.relatedTopics();
    DocsElements.makeDocsCode();
})