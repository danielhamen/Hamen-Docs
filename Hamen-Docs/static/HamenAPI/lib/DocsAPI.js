class DocsElement {
    constructor(tagName, innerContent, { ...args }) {
        this.tagName = tagName.toLowerCase();
        this.innerContent = innerContent;

        // Set `this.innerContentType` to a default value of "innerHTML":
        this.innerContentType = [
            "innerText",
            "innerHTML"
        ].indexOf(innerContent) === -1 ? "innerHTML" : innerContent;

        this.attributes = args || {};
        if (this.attributes["style"]) delete this.attributes["style"]

        this.style = args.style || {};
    }

    addAttribute({ key, value }) {}

    removeAttribute({ key }) {}

    setStyle({ property, value }) {
        let newStyle = this.style;
        newStyle[property] = value;

        return new DocsElement(this.tagName, this.innerContent, this.innerContentType, { attributes: this.attributes, style: newStyle });
    }

    /**
     * Returns an HTML-version of this tag
     */
    render() {
        let element = document.createElement(this.tagName);

        // Add attributes:
        Array.from(Object.keys(this.attributes)).forEach(key => {
            element.setAttribute(key, this.attributes[key]);
        })

        // Add style:
        let style = [];
        Array.from(Object.keys(this.style)).forEach(property => {
            style.push(`${property}: ${this.style["property"]}`);
        }); element.setAttribute("style", style.join(";"));

        // Add inner content:
        if (this.innerContentType === "innerHTML") element.innerHTML = this.innerContent;
        else if (this.innerContentType === "innerText") element.innerText = this.innerContent;
        else console.error(`Error: Unknown 'innerContentType': '${this.innerContentType}'`);

        // Finally, return the final element:
        return element;
    }

    toString() {
        return this.render().outerHTML;
    }
}

const docsElements = {
    /**
     * Creates paragraph text (equivalent to <p> in HTML)
    */
    createParagraph: (text, {...args}) => {
        return new DocsElement("p", text, { args, class: "docs:p" });
    },

    /**
     * Creates a heading
     */
    createHeading: (text, { level = 2, ...args }) => {
        // Warn user if <h1>:
        if (level === 1) console.warn("Using a heading 1 can be bad for SEO");

        if (level > 6 || level < 1 || typeof(level) != "number" || level.toString().length != 1) {
            console.error("Invalid level: " + level);
            return;
        }

        // 
        return new DocsElement("h" + level, text, { args })
    },

    /**
     * Creates a clickable button
     * 
     * @param {string} text The text inside the button
     */
    createButton: (text, { onClick = () => {}, ...args }) => {
        return new DocsElement("button", text, { innerContentType: "innerText", class: "hamen-button", onclick: onClick })
    }
}

class ArticleSection {
    constructor(sectionID) {
        this.sectionID = sectionID.toLowerCase();
        this.content = [];
    }

    appendElements(elements) {
        Array.from(elements).forEach(element => {
            this.content.push(element);
        })
    }

    toString() {
        
    }
}

class Article {
    constructor() {
        this.content = [];
        this.layout = {
            newSection({ sectionID, ...args }) {
                return new ArticleSection(sectionID);
            }
        };
    }
}

const DocsAPI = {
    Article: () => {
        return new Article();
    }
};