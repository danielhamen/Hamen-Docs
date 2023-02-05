window.addEventListener("load", function () {
    const body = new ArticleBody("Python Booleans", "python-booleans");

    body.draw = function () {

        let layout = this.layout;
        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("Booleans are used in programming for logical operations and conditional statements"),
            docsElements.p("Booleans can have 1 of 2 values: " + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False")),
            docsElements.unorderedList([
                "Verifying if a password is correct",
                "Determining if an element is in a list",
                "Checking if a user has sufficient privileges",
                "Determining if a user is logged in"
            ], "Here are a few examples of when booleans may be used")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Creating Booleans' Section:
        section = layout.newSection("Creating Booleans in Python"); [
            docsElements.p("In Python, the " + docsElements.inlineCode("bool") + " data type represents boolean values"),
            docsElements.p("There are many ways to create a boolean; the easiest way would be to directly assign it to a variable"),
            docsElements.codeBlock([
                "{var(x)} = {bool(False)}",
                "{var(y)} = {bool(True)}"
            ]),
            docsElements.codeBlock([
                "{var(x)} = {cls(bool)}({str(\"False\")}) {comment(# str() -> bool())}",
                "",
                "{func(print)}({cls(type)}({var(x)}))",
                "{term()}{out(&lt;type 'bool'&gt; False)}"
            ], "You can also cast a boolean"),
            docsElements.p("In this example, we converted the string: " + docsElements.inlineCode("\"False\"") + " to a boolean"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Comparison Operators' Section:
        section = layout.newSection("Comparison Operators"); [
            docsElements.p("In addition to assigning booleans to variables, you can also use comparison operators"),
            docsElements.p("We will go over each operator in-depth in the " + docsElements.anchorText("Python Operators Tutorial", "../python-operators/index.html", "_self") + ", but here is a brief preview of what comparison operators are:"),
            docsElements.p("Comparison operators are used to evaluate a logical expression into a boolean"),
            docsElements.p("Basically, when using a comparison operator, Python will use logic to check whether something is " + docsElements.inlineCode("True") + ", or " + docsElements.inlineCode("False")),
            docsElements.codeBlock([
                "{var(x)} = {num(1)}",
                "{var(y)} = {num(8)}",
                "",
                "{var(z)} = {var(x)} == {var(y)}"
            ], "Here's an example"),
            docsElements.p("In this example, we have 2 variables: " + docsElements.inlineCode("x") + ", and " + docsElements.inlineCode("y")),
            docsElements.p("We will use the comparison operator: " + docsElements.inlineCode("==") + " to check whether " + docsElements.inlineCode("x") + " (1) is equal to " + docsElements.inlineCode("y") + " (8) &mdash; " + docsElements.inlineCode("x == y") + " / " + docsElements.inlineCode("1 == 8"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Boolean Operations' Section:
        section = layout.newSection("Boolean Operations"); [
            docsElements.p("In addition to Comparison Operators, Python has built-in keywords to evaluate booleans"),
            docsElements.unorderedList([
                docsElements.inlineCode("not") + " (negation)",
                docsElements.inlineCode("is") + " (conjunction)",
                docsElements.inlineCode("and") + " (disjunction)"
            ], "These keywords are"),
            docsElements.codeBlock([
                "{comment(# Negation (`not`) Operator Example:)}",
                "{var(x)} = {bool(True)}",
                "",
                "{func(print)}({int(not)} {var(x)})",
                "{term()}{out(False)}"
            ]),
            docsElements.codeBlock([
                "{comment(# Conjunction (`and`) Operator Example:)}",
                "{var(x)} = {bool(True)}",
                "{var(y)} = {bool(False)}",
                "",
                "{func(print)}({var(y)} {int(and)} {var(x)})",
                "{term()}{out(False)}"
            ]),
            docsElements.codeBlock([
                "{comment(# Disjunction (`is`) Operator Example:)}",
                "{var(x)} = {bool(True)}",
                "",
                "{func(print)}({var(x)} {int(is)} {bool(True)})",
                "{term()}{out(True)}"
            ]),
            docsElements.unorderedList([
                docsElements.inlineCode("not") + ": negates / inverts the boolean (eg. " + docsElements.inlineCode("False") + " -> " + docsElements.inlineCode("True") + ", and vice-versa)",
                docsElements.inlineCode("and") + ": checks whether both boolean values are " + docsElements.inlineCode("True") + ", returns " + docsElements.inlineCode("False") + " otherwise",
                docsElements.inlineCode("is") + ": checks if two booleans are equal (similar to " + docsElements.inlineCode("==") + " for comparing values)"
            ], "As you can see above")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-floats/index.html",
        "Python: Floats}",
        "../python-operators/index.html",
        "Python: Operators");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 4th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})