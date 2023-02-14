function selectOption(ID) {
    let option = document.getElementById(ID);

    // Select the option:
    option.classList.add("selected");

    // Scroll to the option:
    let rect = option.parentElement.getBoundingClientRect();
    document.querySelector(".docs-tree-content").scrollTo({
        top: rect.top - 90
    })
}

function objectToTree(obj, depth = 0, tab = "  ") {
    let output = '';
    const prefix = tab.repeat(depth);
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            output += `${prefix}└───${key}\n`;
            output += objectToTree(obj[key], depth + 1, tab);
        } else {
            output += `${prefix}└───${key}\n`;
        }
    }
    return output;
}

const docsElements = {
    footer(date) {
        let footerElement = new ArticleElement("div", "", { "id": date, "class": "docs:footer" });
        return footerElement;
    }, horizontalRule() {
        let breakElement = new ArticleElement("div", attributes = { "class": "docs:hr" });
        return breakElement;
    }, paragraph(content) {
        let pTag = new ArticleElement("p", content, { "class": "docs:p" });
        return pTag;
    }, p(content, options = {}) {
        let pTag = new ArticleElement("p", content, Object.assign(options, { "class": "docs:p" }));
        return pTag;
    }, unorderedList(items = [], listTitle = null, options = { "colonSuffix": true, "boldTitle": true }) {
        let list = document.createElement("ul");

        // Add list title:
        if (listTitle) {
            let suffix = "";
            if (options["colonSuffix"]) {
                suffix = ":";
            }; if (options["boldTitle"]) {
                list.innerHTML += `<p class="docs:li-title">${listTitle}${suffix}</p>`;
            } else { 
                list.innerHTML += `<p class="docs:li-title" style="font-weight: normal !important;">${listTitle}${suffix}</p>`;
            }
        }

        // Add list items:
        let listItems = "";
        items.forEach(item => {
            if (typeof (item) === "string" || (typeof (item) === "object" && item.tagName === "span")) {
                let li = document.createElement("li");
                li.innerHTML = item;
                listItems += li.outerHTML;
            } else {
                listItems += item;
            }
        }); list.innerHTML += listItems;

        // Create an `ArticleElement` from the Unordered List (`list`):
        let listElement = new ArticleElement("ul", list.innerHTML, { "style": "line-height: 1.8 !important;" });

        return listElement;
    }, titleHint(label, hint) {
        let hintSpan = new ArticleElement("abbr", label, { "title": hint });
        return hintSpan;
    }, break(size = 0.5) {
        return new ArticleElement("div", "", { "class": "docs:br", "style": `height: ${size}em;` });
    }, inlineCode(code) {
        return new ArticleElement("code", code, { "class": "code:inline code:box" });
    }, inlineText(text, options = {}) {
        return new ArticleElement("span", text, options);
    }, listItem(text, listStyle = "unset") {
        return new ArticleElement("li", text, { "style": "list-style: " + listStyle + ";" })
    }, anchorText(text, href, target = "_self") {
        return new ArticleElement("a", text, { "href": href, "target": target });
    }, codeBlock(code, title, options = { "showCopy": true }) {
        let codeWrapper = document.createElement("code");

        if (title?.endsWith(":")) {
            throw "WARNING: `docsElements.codeBlock(...)` contains a title ending with \":\"";
        }

        Array.from(code).forEach(line => {
            let lineText = line;

            // Replace indents with "&nbsp;":
            lineText = lineText.replace(/^[ \t]+/gm, match => match.replace(/ /g, '&nbsp;').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'));

            // Define a regular expression to match keywords
            const regex = /\{(func|function|num|number|var|variable|comment|bool|esc|str|string|cls|class|lib|internal|int|terminal|term|out|output|tree)\((.*?)\)\}/g;

            // Replace all matches with the appropriate <span> element
            lineText = lineText.replace(regex, (match, type, content) => {
                return `<span class="code:${type}">${content.replace(/\\{|\\}/g, (match) => match.slice(1))}</span>`;
            });

            // Add the code to the code wrapper:
            codeWrapper.innerHTML += lineText;

            // Add newline after the code:
            codeWrapper.appendChild(document.createElement("br"));
        })

        // 
        let showCopy = options["showCopy"];
        if (showCopy === null) {
            options["showCopy"] = true;
        }
        
        // Add code title:
        if (title) {
            codeWrapper = new ArticleElement("docs-code-block", codeWrapper.outerHTML, { "style": "margin-top: 0.5em;" });
            return new ArticleElement("div", `<span class="code:title">${title}:</span>` + codeWrapper);
        }

        codeWrapper = new ArticleElement("docs-code-block", codeWrapper.outerHTML);

        return codeWrapper;
    }, detailsDropdown(label, innerElements, defaultClosed = true) {
        let innerHTML = ``;
        innerElements.forEach(elem => {
            innerHTML += elem + "";
        })

        // Toggle:
        let toggled = " closed";
        if (!defaultClosed) {
            toggled = "";
        }

        let wrapper = new ArticleElement("div", `<div class="header"><span class="material-symbols-outlined icon">expand_more</span><span class="label">${label}</span></div><div class="body">${innerHTML}</div>`, { "class": "docs-details-dropdown" + toggled });

        return wrapper;
    }, noteText(text, prefix = "Note") {
        if (prefix.endsWith(":") || prefix.endsWith(" ")) {
            throw "ERROR: `docsElements.noteText( ... )` must not end with \":\" or \" \"";
        }

        let noteWrapper = new ArticleElement("div", `<span class="prefix text">${prefix}: </span><span class="text label">${text}</span>`, { "class": "docs-note-text" });

        return noteWrapper;
    }, horizontalAd() {
        return new ArticleElement("div", "<div class='docs:hr'></div><br><div class='horizontal-ad'></div>", { "class": "horizontal-ad-wrapper" });
    }, courseNavigator(previousLink = "#", previousTitle = "", nextLink = "#", nextTitle = "", showReport = true) {
        let prev,next,report = "";

        if (previousLink) { let disabled = ""; if (previousLink == "javascript:void(0);") { disabled = " disabled" }; prev = `<a href="${previousLink}" title="Previous Tutorial: ${previousTitle}"><button class="course-navigator-button hmn-button blue" type="text"${disabled}>Previous</button></a>`; }
        if (showReport) { report = `<a href="javascript:void(0);" id="report-issue">Report Issue</a>`; }
        if (nextLink) { let disabled = ""; if (nextLink == "javascript:void(0);") { disabled = " disabled" }; next = `<a href="${nextLink}" title="Next Tutorial: ${nextTitle}"><button class="course-navigator-button hmn-button blue" type="text">Next</button></a>`; }

        let courseNavigator = new ArticleElement("div", `<div class='docs:hr'></div>
<div class='docs:course-navigator'>
    ${prev}
    ${report}
    ${next}
</div>`, { "class": "docs:course-navigator-wrapper" });
        return courseNavigator;
    }, boldText(text) {
        return new ArticleElement("span", text, { "style": "font-weight: bold;" })
    }, table(tableRows, tableHeaders) {
        let tableBody = document.createElement("tbody");
        Array.from(tableRows).forEach(row => {
            let tableRow = document.createElement("tr");
            Array.from(row).forEach(cell => {
                tableRow.innerHTML += cell + "";
            })
            
            tableBody.appendChild(tableRow);
        })

        return new ArticleElement("table", tableBody.outerHTML, { "class": "docs:table" })
    }, tableCell(text, alignment = "LEFT", justify = "MIDDLE") {
        return new ArticleElement("td", text, { "class": "text", "style": `text-align: ${alignment.toLowerCase()};vertical-align: ${justify.toLowerCase()};` });
    }, tableHeader(text, width = "auto", alignment = "CENTER", justify = "MIDDLE") {
        // Parse width:
        if (!isNaN(parseFloat(width))) { width = width;if (!width.endsWith("%")) { width = width + "%" } }
        else { width = "auto"; }

        return new ArticleElement("th", text, { "class": "text", "style": `width: ${width};text-align: ${alignment.toLowerCase()};vertical-align: ${justify.toLowerCase()};` });
    },
    
    /**
     * Returns a quotation with `&lsquo;` and `&rdquo;` (curly quotes)
     * @param {string} text The text inside the quote
     * @param {string} source This text will be displayed when the user hovers over the quote
     * @param {boolean} italic When `true`, the quote will be italicized
     * @returns ArticleElements
     */
    inlineQuote(text, source = null, italic = false) {
        if (!source) { source = "" };

        return new ArticleElement("span", "&ldquo;" + text + "&rdquo;", { "title": source, "class": "docs:quote", "style": italic ? "font-style: italic;" : "font-style: normal;" });
    },
    
    /**
     * Produces inline italic text
    */
    inlineItalic(text)
    {
        return new ArticleElement("span", text, { "style": "font-style: italic;" });
    },

    /**
     * Produces a sub-section (up to 6 levels)
     */
    subSection(innerHTML = [], title = "", level = 2, options = { "showHR": true })
    {
        level += 1;

        if (title.endsWith(":")) {
            throw "WARNING: `docsElements.subSection( ... )` title ends with \":\" (resulting in double-colon)";
        }

        if (title && title !== "") {
            title = `<h${level}>${title}:</h${level}>`;
        }

        innerHTML = innerHTML.join("");

        // 
        let pre = `<div class="docs:hr sub"></div>`;
        if (options["showHR"] === false) {
            pre = "";
        }

        return new ArticleElement("section", pre + title + `<div class="items">${innerHTML}</div>`, { "class": "sub-section level-" + level.toString() })
    },

    /**
     * Returns a paragraph (like `docsElements.p( ... )`), but you can use specific codes and syntax to produce different elements
     * 
     * View https://www.hamen.tech/docs/docs-api/format-text for more info
     */
    formatText(text)
    {
        /*
        Example syntax:
        ```
        Hello World                              :       Paragraph

        $*Hello World*$                          :       Bold Text

        $**Hello World**$                        :       Italic Text

        $***Hello World***$                      :       Bold + Italic Text

        $"Hello":"Barack Obama"$                 :       Quote (with "Barack Obama" as the source)

        $`print("Hello World")`$                 :       Inline Code

        $```
        {func(print)}({str("Hello World!")})     :       Code Block
        ```$

        $[                                       :       Table (CSV for multiple columns)
            {Goodbye}                            :       Table Header
            (Hello World!)                       :       Table Cell
        ]$

        $u<                                      :       Unordered List (use TPN - "o": ordered list, "c": circular list- read https://www.hamen.tech/docs/docs-api/table-prefix-notation)
            (*Arrays*: Over 50+ functions...)    :       List item
        >$

        $|Python is a great language|:Fact$      :       noteText

        $INS(break)$                             :       Insert something
            - "break"       :       same as <br>
            - "br"          :       same as <br>
            - Use any HTML code (eg. "$INS(nbsp)$")
            - "emoji:..." inserts an emoji ("..." is its ID)
            - "icon:..." inserts a Google Icon ("..." is its name (eg. "remove"))
            - "tab"         :       inserts a tab
            - "tab:1"       :       inserts a tab (size 1)
            - "tab:2"       :       inserts a tab (size 2)
            - "tab:4"       :       inserts a tab (size 4)
            - "tab:8"       :       inserts a tab (size 8)

        Note: Use a colon after any elements to create the title (if element supports title)
        Note: Use "\" before the start "$" to use plain text
        Note: HTML tags will not be displayed

        ```
        */

        text = `
            Hello $*World*$!
        `;

        /*
        Example `RegExSyntax`:
        {
            // the regex to match the line:
            "regex": ...,

            // name of the matched element (not function or tag name):
            "name": ...,

            // description of the matched element:
            "description": ...,

            // URL to the documentation to this syntax:
            "help": ...,

            // the `docsElement` that will correspond to this match:
            "equivalent": ...,

            // a function that will convert the line to the code:
            "match": function(match) { ... },

            // a function to ensure that the match follows the correct syntax (return `0` for error):
            "conditions": function(match) { ... },

        }
        */

        const RegExSyntax = [
            {
                "regex": /\$\*([^\*]*)\*\$/,
                "name": "Bold Text",
                "description": "Create bold text",
                "help": "https://www.hamen.tech/docs/docs-api/format-text#bold-text",
                "equivalent": docsElements.boldText,

                "callback": function(match, groups) {
                    replace(regex, (match, ...groups) => {
                        let replacement = "docsElements.boldText(";
                        groups.forEach((group, index) => {
                            replacement += `'${group}'`;
                            if (index < groups.length - 1) {
                            replacement += ", ";
                            }
                        });
                        replacement += ")";
                        return replacement;
                    });
                },

                "conditions": function(match) {
                    return 1;
                }
            }
        ]

        // Split text into lines:
        text = text.trim();
        text = text.split("\n");
        text = text.map(line => {
            return line.trim();
        });

        // Output code:
        let HTML = [];

        // Go through each line and convert it to the correct HTML:
        text.forEach((line,i) => {
            let isMatched = false;
            RegExSyntax.forEach(syntax => {
                // Match line:
                let match = line.match(syntax["regex"]);

                // Line matches the iterated regex:
                if (match)
                {
                    console.log(match);
                    // Ensure that there are no syntax errors:
                    if (syntax["conditions"](match) == 0)
                    {
                        throw `Syntax Error: An error occurred when parsing line: \"${i}\":\n\t\"${line}\"\n\nIf you're unsure on the syntax for: \"${syntax["name"]}\", you can read more at: \"${syntax["help"]}\"`
                    }

                    // Add HTML to `HTML`:
                    HTML.push(syntax["match"](line, syntax["regex"]));

                    // Change `isMatched` so this isn't treated as a paragraph:
                    isMatched = true;

                    // Break so no other regex is checked:
                    this.break;
                }
            })

            // Line is most likely a paragraph:
            if (!isMatched) {
                HTML.push(docsElements.p(line));
            }
        })

        return HTML;
    },

    /**
     * Creates a file tree (similar to `tree` in CMD)
     */
    directoryTree(tree, root = null, title = "") {
        let treeBody = "";

        if (root) {
            treeBody += root + "\n";
        }

        treeBody += objectToTree(tree, 0, "&emsp;&emsp;&emsp;&emsp;");
        treeBody = treeBody.split("\n").slice(0, -1);
        treeBody = treeBody.map(line => {
            return `{tree(${line})}`;
        })

        return docsElements.codeBlock(treeBody, title);
    },

    /**
     * Creates a tabbed interface
     * 
     * @param {array} content An array of `docsElements.tab( ... )`
     * @param {array} titles An array of strings for the titles (eg. ["Chrome", "Firefox", "Safari"])
     * @param {string} title (optional) the title of the Tabbed Interface
     */
    tabbedInterface(content, titles, defaultTitle, title = "")
    {
        content.forEach(tab => {
            if (tab["attributes"]["tab-id"] === defaultTitle) {
                tab["attributes"]["class"] += " active";
                this.break;
            }
        });

        let innerHTML = `
<div class="header">
${titles.map(title => {

    let isActive = defaultTitle === title ? " active" : "";
    return `<div class="item${isActive}"><span class="text">${title}</span></div>`;
}).join("\n")}
</div>
<div class="body">
${content.join("\n")}
</div>
        `;

        return new ArticleElement("div", innerHTML, { "class": "docs\:tabbed-interface" });
    },

    /**
     * Creates a tab used inside a Tabbed Interface
     */
    tab(innerHTML, label)
    {
        return new ArticleElement("div", innerHTML.join(""), { "class": `docs\:tabbed-interface-tab`, "tab-id": label });
    }
}

class ArticleElement {
    constructor(tagName, innerHTML, attributes) {
        this.tagName = tagName;
        this.innerHTML = innerHTML;

        // Get attribute
        if (!attributes) {
            attributes = {};
        } this.attributes = attributes;
    }; toString() {
        let attrs = [];
        Array.from(Object.keys(this.attributes)).forEach(key => {
            attrs.push(`${key}="${this.attributes[key]}"`);
        })
        attrs = attrs.join(" ");
        if (attrs.length !== 0) {
            attrs = " " + attrs;
        }

        return `<${this.tagName}${attrs}>${this.innerHTML}</${this.tagName}>`;
    }; setStyle(property, value) {
        let style = this.attributes["style"];
        if (!style) {
            this.attributes["style"] = `${property}: ${value};`;
        } else {
            this.attributes["style"] += `${property}: ${value};`;
        }
    }; removeSpaceBefore() {
        if (!this.attributes["style"]) {
            this.attributes["style"] = "";
        }

        this.attributes["style"] += "margin-top: 0 !important;";
    }; removeSpaceAfter() {
        if (!this.attributes["style"]) {
            this.attributes["style"] = "";
        }

        this.attributes["style"] += "margin-bottom: 0 !important;";
    }; classList = {
        add(className) {
            // If the "class" attribute doesn't exist yet, add it, then push `className`:
            // this.attributes["class"] ? this.attributes["class"].push(className) : this.attributes["class"] = [className];
            if (!this.attributes) {
                this.attributes = { "class": className };
                // console.log(this.attributes);
            } else {
                let oldClasses = this.attributes["class"];
                if (!oldClasses) {
                    oldClasses = "";
                } this.attributes = { "class": oldClasses + " " + className };
            }
        }, remove(className) {
            if (this.attributes["class"] && this.attributes.indexOf(className)) {
                this.attributes.splice(this.attributes.indexOf(className));
            }
        }, toggle(className) {
            // 
        }
    };
}

class ArticleSection {
    constructor(sectionTitle) {
        this.sectionTitle = sectionTitle;
        this.sectionBody = [];

        if (sectionTitle) {
            this.sectionBody = [`<h2>${sectionTitle}</h2>`];
        }
    }; outerHTML() {
        let section = document.createElement("section");
        section.innerHTML = this.sectionBody.join("\n");
        return section.outerHTML;
    }; appendChild(element) {
        this.sectionBody.push(element);
    }; appendBreak() {
        this.sectionBody.push("<br>");
    }; appendHorizontalRule() {
        this.sectionBody.push("<div class=\"docs:hr\"></div>");
    }
}

class ArticleBody {
    constructor(title, selectedTreeItem) {
        this.selectedTreeItem = selectedTreeItem;

        this.title = title;

        // Global:
        this.layout = {
            newSection(sectionTitle) {
                let sec = new ArticleSection(sectionTitle);
                return sec;
            }
        };

        this.footer = null;
        this.courseNavigator = null;

        this.bodyContent = [];
    }; appendChild(section) {
        this.bodyContent.push(section);
    }; setFooter(footerElement) {
        this.footer = footerElement;
    }; outerHTML() {
        let outerHTML_ = [];
        this.bodyContent.forEach(section => {
            outerHTML_.push(section.outerHTML());
        })

        let HTML = `<content-title>${this.title}</content-title>` + "<content-body>" + outerHTML_.join(`<div class="docs:hr"></div>`) + "</content-body>";

        // Add course navigator:
        if (this.courseNavigator) {
            HTML += this.courseNavigator;
        }

        // Add footer:
        HTML += this.footer;

        // Add footer ad:
        const footerAd = true;
        if (footerAd) {
            HTML += `<div class="horizontal-ad"></div><br>`;
        }

        return HTML;
    }; setCourseNavigator(courseNavigatorElement) {
        this.courseNavigator = courseNavigatorElement;
    };
    
    /**
     * Set the page description for SEO
     */
    setMetaDescription(description)
    {
        let descMeta = document.createElement("meta");
        descMeta.setAttribute("name", "description");
        descMeta.setAttribute("content", description);
        document.head.appendChild(descMeta);
    };

    /**
     * Set the course tags
    */
    setMetaTags(tags = [])
    {
        let tagsMeta = document.createElement("meta");
        tagsMeta.setAttribute("name", "keywords");
        tagsMeta.setAttribute("content", tags.map((tag) => {
            return tag.trim();
        }).join(", "));
    }
}

/* 

    THE FOLLOWING SECTION CONTAINS FUNCTIONS TO CREATE THE DOCS ELEMENTS:

*/

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
        if (relatedTopics) {
            relatedTopics.innerHTML = `<h2 id="docs-related-topics-title"><b>Related Topics:</b></h2>` + relatedTopics.innerHTML;
        }
    }, makeTreeBody() {
        // Add tree title:
        document.querySelector("tree-title").innerHTML = treeBody["title"];

        let wrapper = document.createElement("div");
        Object.keys(treeBody).slice(1).forEach(key => {
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
            if (box.getAttribute("showcopy") !== "false") {
                box.innerHTML = `<div class="code:copy-code-block"><span class="material-symbols-outlined"> content_copy </span></div>` + box.innerHTML;
            }
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
        footer.innerHTML = `<div class="docs:hr"></div><p>© Copyright Hamen Docs</p><p>This document was last revised on <a href="#">${footer.getAttribute('id')}</a></p><div class="docs:hr"></div>`
    }, makeDetailsDropdown() {
        // Make `<docs-details-dropdown>`:
        Array.from(document.querySelectorAll(".docs-details-dropdown")).forEach(dropdown => {
            dropdown.getElementsByClassName("header")[0].addEventListener("click", function() {
                dropdown.classList.toggle("closed");
            })
        })
    }, makeReportIssue() {
        let reportDialog = document.createElement("div");
        reportDialog.classList.add("report-issue-dialog");
        reportDialog.innerHTML = `
<div class="header">
    <h3 class="title no-link" style="color: hsl(0deg, 0%, 10%) !important;">Report Issue:</h3>
    <span class="material-symbols-outlined icon"> close </span>
</div>
<form class="body" action="https://www.hamen.tech/php/tutorial-report/submit.php">
    <select name="issue-type">
        <option selected disabled>Issue Type...</option>
        <option value="grammatical-error">Grammatical Error</option>
        <option value="incorrect-content">Incorrect Content</option>
        <option value="broken-link">Broken Link</option>
        <option value="formatting-issue">Formatting Issue</option>
        <option value="technical-issue">Technical Error</option>
        <option value="other-issue">Other...</option>
    </select>
    <br>
    <input name="email" type="text" placeholder="Your Email...">
    <input name="url" type="text" style="display: none;" id="report-url">
    <br>
    <textarea name="body" class="text" placeholder="Describe your issue in-depth" oninput="document.querySelector('#char-count').innerHTML = this.value.length + ' / 500';if (this.value.length >= 450) { document.querySelector('#char-count').classList.add('red'); } else { document.querySelector('#char-count').classList.remove('red'); }" maxlength=500></textarea>
    <span id="char-count">0 / 500</span>
    <br>
    <br>
<!--

Hey there,

I believe I found an issue in your Python course! In the "Multiple Arguments" section, in the paragraph:
"""
You can pass multiple arguments to the print() function, separated by commas. For example, the following code will display the strings "Hello" and "World" on separate lines
"""

States how when using multiple arguments, the output is placed on multiple lines (as if you used the escape sequence: "\n"), but in the example, the next is NOT placed on different lines. A better description of what the output should be is:

"""
Using multiple arguments separates the info by spaces or commas
"""

Hope this helps!

Thanks,
Daniel

-->
    <button type="text" class="hmn-button blue">Submit Report!</button>
    <br>
    <span class="sub-text">By submitting this form, you accept our <a href="#" target="_blank">Terms and Conditions</a></span>
</form>`;
        document.body.appendChild(reportDialog);

        // Toggle 'Report Issue' dialog when the user presses 'Report Issue' anchor on a tutorial:
        document.querySelector("#report-issue").addEventListener("click", function () {
            document.querySelector(".report-issue-dialog").classList.add("visible");
        })

        // Hide dialog when the user clicks the 'Report Dialog' header:
        document.querySelector(".report-issue-dialog > .header").addEventListener("click", function () {
            this.parentElement.classList.toggle("toggled");
        })

        // Close dialog when the user clicks the "X" close button:
        document.querySelector(".report-issue-dialog > .header > .icon").addEventListener("click", function () {
            this.parentElement.parentElement.classList.toggle("visible");
            this.parentElement.parentElement.classList.add("toggled");
        })

        // Add the URL to the hidden URL input:
        document.getElementById("report-url").setAttribute("value", window.location.href.toString());

        // 
        let reportSent = new URL(window.location.href);
        reportSent = reportSent.searchParams.get("report-sent");
        if (reportSent === "true") {
            HamenAPI.logMessage("Report Sent!");
        }
    }, makeTabbedInterface() {
        Array.from(document.getElementsByClassName("docs:tabbed-interface")).forEach(interface => {
            // Add click event listeners:
            let items = Array.from(interface.querySelector(".header").querySelectorAll(".item"));
            items.forEach(item => {
                item.addEventListener("click", () => {
                    Array.from(interface.querySelector(".body").getElementsByClassName("docs:tabbed-interface-tab")).forEach(tab => {
                        tab.classList.remove("active");
                        if (tab.getAttribute("tab-id") === item.innerText) {
                            tab.classList.add("active");

                        }
                    })

                    // Remove other items:
                    interface.querySelector(".header").querySelector(".item.active").classList.remove("active");

                    item.classList.add("active");
                })
            })
        })
    }
}

function makeElements(catchErrors = true) {
    if (catchErrors) {
        try { DocsElements.makeReportIssue() } catch (error) {}
        try { DocsElements.makeTreeBody(); } catch (error) { };
        try { DocsElements.makeTreeTitle(); } catch (error) { };
        try { DocsElements.makeContentTitle(); } catch (error) { };
        try { DocsElements.makeContentBody(); } catch (error) { };
        try { DocsElements.relatedTopics(); } catch (error) { };
        try { DocsElements.makeDocsCode(); } catch (error) { };
        try { DocsElements.addCodeBlockCopyIcon(); } catch (error) { };
        try { DocsElements.makeFooter(); } catch (error) { };
        try { DocsElements.makeDetailsDropdown(); } catch (error) { };
        try { DocsElements.makeTabbedInterface(); } catch (error) { };
    } else {
        DocsElements.makeReportIssue();
        DocsElements.makeTreeBody();
        DocsElements.makeTreeTitle();
        DocsElements.makeContentTitle();
        DocsElements.makeContentBody();
        DocsElements.relatedTopics();
        DocsElements.makeDocsCode();
        DocsElements.addCodeBlockCopyIcon();
        DocsElements.makeFooter();
        DocsElements.makeDetailsDropdown();
        DocsElements.makeTabbedInterface();
    }
}

window.addEventListener("load", () => {
    makeElements();
})