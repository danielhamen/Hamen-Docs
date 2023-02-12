window.addEventListener("load", function () {
    const body = new ArticleBody("Introduction to MLA", "introduction-to-mla");
    body.draw = function () {
        let layout = this.layout;

        // Introduction Section
        let section = layout.newSection(); [
            docsElements.p("MLA format is a style-guide for citing sources"),
            docsElements.p("MLA is particularly found in English literature and other language studies"),
            docsElements.p("The MLA style provides guidelines for formatting research papers, essays, and other written works"),
            docsElements.p("Additionally, MLA states how to cite other works such as Images, Tables, etc")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'History of MLA' Section
        section = layout.newSection("History of MLA"); [
            docsElements.p("The Modern Language Association (MLA) was founded in 1883"),
            docsElements.p("Initially, it was created to promote the study and teaching of modern languages and literatures"),
            docsElements.p("Over the years, MLA expanded to include all languages and literatures"),
            docsElements.p("The first publication was the MLA International Bibliography in the 1920s"),
            docsElements.p("The MLA Handbook for Writers of Research Papers was published in the late 1970s with guidelines for formatting and citation"),
            docsElements.p("Today, MLA has over 25,000 members worldwide and continues to promote language and literature studies"),
            docsElements.p("MLA format and citation style remains widely used and highly respected"),
            docsElements.noteText("The MLA is one of the largest and oldest scholarly organizations in the world!", "Fun Fact")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Examples of MLA' Section
        section = layout.newSection("Examples of MLA"); [
            docsElements.p("MLA format is commonly used in writing research papers, essays, and other written works in the humanities"),
            docsElements.unorderedList([
                docsElements.listItem(docsElements.boldText("In-text Citations") + ": When using a quote or paraphrasing information from a source in your paper, you must include an in-text citation" + docsElements.break(0.25) + "Eg. " + docsElements.inlineItalic("(Smith 12)")),
                docsElements.listItem(docsElements.boldText("Works Cited Page") + ": At the end of your paper, you must provide a list of all sources used, formatted according to MLA guidelines" + docsElements.break(0.25) + "Eg. " + docsElements.inlineItalic("Smith, John. The History of Literature. New York: Random House, 2005. Print.")),
                docsElements.listItem(docsElements.boldText("Works Cited Page") + ": Website: If you use information from a website, you must provide the website's name, author (if available), date of publication (or date you accessed the site), and URL" + docsElements.break(0.25) + "Eg. " + docsElements.inlineItalic("\"The History of the MLA.\" Modern Language Association, MLA, mla.org/about-mla/history-of-the-mla")),
            ], "Here are a few examples of how MLA is used in practice"),
            docsElements.p("These are just a few examples of how MLA is used. Within the next many tutorials, we will cover the specifics of how to use MLA")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("javascript:void(0);", "None", "../metaphors/index.html", "Metaphors");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 10th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})