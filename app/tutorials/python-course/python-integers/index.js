window.addEventListener("load", function () {
    const body = new ArticleBody("Python: Integers", "python-strings");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In code, a string value is a sequence of characters and is used to represent text in Python"),
            docsElements.p("A string is denoted by either single or double quotes"),
            docsElements.codeBlock([
                "{comment(# String:)}",
                "{var(x)} = {str(\"Hello World!\")}",
                "",
                "{comment(# Also a string:)}",
                "{var(x)} = {str('Hello World!')}"
            ], "For example"),
            docsElements.noteText("There is absolutely no difference between defining a string with double quotes or single quotes. The reason there are 2 ways is because is most other programming languages, there is a type called: " + docsElements.inlineCode("char") + " which is defined by double quotes")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../user-input/index.html", "User Input", "../python-variables/index.html", "Python: Variables");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 1st, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})