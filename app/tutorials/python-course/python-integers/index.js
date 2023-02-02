window.addEventListener("load", function () {
    const body = new ArticleBody("Python: Integers", "python-strings");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In Python, an " + docsElements.inlineCode("int()") + " value is a whole number, either positive, negative, or zero"),
            docsElements.p("Integers cannot contain decimals, whereas " + docsElements.inlineCode("float()") + " can"),
            docsElements.p("Unlike many other languages, integers are not limited to any range such as 32-bit or 64-bit"),
            docsElements.p("You can create an int value in Python by assigning a number without a decimal point to a variable:"),
            docsElements.codeBlock([
                "{var(x)} = {num(14)}",
                "{var(y)} = {num(-64)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Creating Integers' Section:
        section = layout.newSection("Basic Arithmetic Operations"); [
            docsElements.p("You can perform basic arithmetic operations on int values in Python, such as addition, subtraction, multiplication, and division"),
            docsElements.codeBlock([
                "{var(x)} = {num(14)}",
                "{var(y)} = {num(27)}",
                "{var(z)} = {var(x)} + {var(y)}",
                "",
                "{func(print)}({var(z)})",
                "{term()}{out(34)}"
            ]),
            docsElements.noteText("Python follows the Order of Operations (BEDMAS) when evaluating an expression")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-strings/index.html", "Python: Strings", "../python-floats/index.html", "Python: Floats");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 1st, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})