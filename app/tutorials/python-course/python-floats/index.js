window.addEventListener("load", function () {
    const body = new ArticleBody("Python: Floats", "python-floats");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection();[
            docsElements.p("In Python, a " + docsElements.inlineCode("float()") + " value is like an " + docsElements.anchorText("integer", "../python-integers/index.html", "_self") + ", but contains decimals"),
            docsElements.p("Again, similar to integers, floats are not limited to a 32-bit or 64-bit range"),
            docsElements.p("You can create a float value in Python by assigning a number with a decimal point to a variable:"),
            docsElements.codeBlock([
                "{var(x)} = {num(6.3)}",
                "{var(y)} = {num(-27.5)}",
                "{var(y)} = {num(-0.0)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Creating Integers' Section:
        section = layout.newSection("Basic Arithmetic Operations");[
            docsElements.p("You can perform basic arithmetic operations on int values in Python, such as addition, subtraction, multiplication, and division"),
            docsElements.codeBlock([
                "{var(x)} = {num(135)}",
                "{var(y)} = {num(0.5)}",
                "{var(z)} = {var(x)} * {var(y)}",
                "",
                "{func(print)}({var(z)})",
                "{term()}{out(67.5)}"
            ]),
            docsElements.noteText("Python follows the Order of Operations (BEDMAS) when evaluating an expression")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-integers/index.html", "Python: Integers", "../python-booleans/index.html", "Python: Booleans");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 1st, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})