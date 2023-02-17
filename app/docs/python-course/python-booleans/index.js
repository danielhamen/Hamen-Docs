window.addEventListener("load", function () {
    const body = new ArticleBody("Python Booleans", "python-booleans");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("The " + docsElements.inlineCode("bool") + " type in Python represents a boolean value, which is either " + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False")),
            docsElements.p("The boolean type is commonly used in control flow statements and other logic operations"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Creating Booleans");[
            docsElements.p("There are several ways to create boolean values"),
            docsElements.p("The quickest is to just assign a boolean to a variable"),
            docsElements.codeBlock([
                "{var(x)} = {bool(True)}",
                "{func(print)}({var(x)})",
                "{term()}{out(True)}"
            ], "For example"),
            docsElements.p("Although this works, a more sophisticated and common way is to use " + docsElements.boldText("Comparison Operators ") + " and " + docsElements.boldText("Logical Operators")),
            docsElements.subSection([
                docsElements.p("Comparison Operators are used to compare values in Python and return a Boolean value of " + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False")),
                docsElements.p("Here are some of the comparison operators you can use in Python:"),
                docsElements.table([
                    [
                        docsElements.tableHeader("Operators"),
                        docsElements.tableHeader("Meaning"),
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("=="), "CENTER"),
                        docsElements.tableCell("Equal to")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("!="), "CENTER"),
                        docsElements.tableCell("Equal to")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode(">"), "CENTER"),
                        docsElements.tableCell("Greater than")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("<"), "CENTER"),
                        docsElements.tableCell("Less than")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode(">="), "CENTER"),
                        docsElements.tableCell("Greater than or Equal To")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("<="), "CENTER"),
                        docsElements.tableCell("Less than or Equal to")
                    ]
                ]),
                docsElements.codeBlock([
                    "{var(x)} = {num(10)}",
                    "{var(y)} = {num(5)}",
                    "{func(print)}({var(x)} > {var(y)})",
                    "{term()}{out(True)}"
                ], "For example")
            ], "Comparison Operators"),
            docsElements.subSection([
                docsElements.p("Logical operators are used to combine Boolean values and return a Boolean result"),
                docsElements.p("Here are the logical operators in Python:"),
                docsElements.table([
                    [
                        docsElements.tableHeader("Operator"),
                        docsElements.tableHeader("Meaning")
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("and"), "CENTER"),
                        docsElements.tableCell("True if both operands are True"),
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("or"), "CENTER"),
                        docsElements.tableCell("True if either operand is True"),
                    ], [
                        docsElements.tableCell(docsElements.inlineCode("not"), "CENTER"),
                        docsElements.tableCell("True if operand is False"),
                    ]
                ]),
                docsElements.codeBlock([
                    "{var(x)} = {num(5)}",
                    "{var(y)} = {num(10)}",
                    "{var(z)} = {num(15)}",
                    "{func(print)}({var(x)} < {var(y)} {int(and)} {var(y)} < {var(z)})",
                    "{term()}{out(True)}",
                    "",
                    "{func(print)}({var(x)} > {var(y)} {int(or)} {var(y)} > {var(z)})",
                    "{term()}{out(False)}",
                    "",
                    "{func(print)}({int(not)} {var(x)} > {var(y)})",
                    "{term()}{out(True)}"
                ], "For example")
            ], "Logical Operators"),
            // docsElements.codeBlock([
            //     "{var(x)} = {bool(True)}",
            //     "{var(y)} = {bool(False)}",
            //     "{func(print)}({var(x)} {int(and)} {var(y)}) {comment(# Checks whether both variables are `True`)}",
            //     "{term()}{out(False)}",
            //     "",
            //     "{func(print)}({var(x)} {int(or)} {var(y)}) {comment(# Checks whether one, or both variables are `True`)}",
            //     "{term()}{out(True)}",
            //     "",
            //     "{func(print)}({int(not)} {var(x)}) {comment(# Inverts the boolean (`False` -> `True` and vice-versa))}",
            //     "{term()}{out(False)}",
            //     "",
            //     "{func(print)}({var(x)} {int(is)} {bool(True)}) {comment(# Checks whether `x` is equal to True (similar to `==`, but for booleans))}",
            //     "{term()}{out(False)}"
            // ], "You can perform operations on boolean values in Python using the " + docsElements.inlineCode("and") + ", " + docsElements.inlineCode("or") + ", " + docsElements.inlineCode("is") + ", and " + docsElements.inlineCode("not") + " operators"),
            // docsElements.codeBlock([
            //     "{var(x)} = {num(5)}",
            //     "{var(y)} = {num(10)}",
            //     "{func(print)}({var(x)} == {var(y)})",
            //     "{term()}{out(False)}",
            //     "",
            //     "{func(print)}({var(x)} != {var(y)})",
            //     "{term()}{out(True)}",
            //     "",
            //     "{func(print)}({var(x)} < {var(y)})",
            //     "{term()}{out(True)}"
            // ], "Boolean values can also be used in comparisons, such as " + docsElements.inlineCode("==") + ", " + docsElements.inlineCode("!=") + ", " + docsElements.inlineCode("<") + ", " + docsElements.inlineCode(">") + ", " + docsElements.inlineCode("<=") + ", and " + docsElements.inlineCode(">=") + ""),
            // docsElements.unorderedList([
            //     docsElements.listItem(docsElements.inlineCode("None")),
            //     docsElements.listItem(docsElements.inlineCode("False")),
            //     "Zero of any numeric type, for example, " + docsElements.inlineCode("0") + ", " + docsElements.inlineCode("0.0") + ", " + docsElements.inlineCode("0j"),
            //     "Empty sequences, for example, " + docsElements.inlineCode("''") + ", " + docsElements.inlineCode("[]") + ", " + docsElements.inlineCode("()") + "",
            //     "Empty collections, for example, " + docsElements.inlineCode("{}") + ", " + docsElements.inlineCode("set()")
            // ], "It's also worth noting that any value in Python can be evaluated as a boolean in a conditional statement. The following values are considered False in a boolean context"),
            // docsElements.p("All other values are considered " + docsElements.inlineCode("True")),
            docsElements.noteText("You will learn more about comparison operators (eg. " + docsElements.inlineCode("and") + ", " + docsElements.inlineCode("not") + ", " + docsElements.inlineCode("==") + ", " + docsElements.inlineCode(">") + ", etc) in the " + docsElements.anchorText("Operators Tutorial", "../python-operators/index.html", "_self"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Boolean Conversions");[
            docsElements.p("In Python, you can also convert other data types to Boolean values using the " + docsElements.inlineCode("bool()") + " function"),
            docsElements.p("The " + docsElements.inlineCode("bool()") + " function returns " + docsElements.inlineCode("True") + " for any non-zero or non-empty value, and " + docsElements.inlineCode("False") + " for zero or empty values"),
            docsElements.codeBlock([
                "{func(print)}({cls(bool)}({str(\"Hello\")}))",
                "{term()}{out(True)}",
                "",
                "{func(print)}({cls(bool)}({num(42)}))",
                "{term()}{out(True)}",
                "",
                "{func(print)}({cls(bool)}({str(\"\")}))",
                "{term()}{out(False)}",
                "",
                "{func(print)}({cls(bool)}({num(0)}))",
                "{term()}{out(False)}"
            ], "For example")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-numbers/index.html",
        "Python: Numbers}",
        "../python-operators/index.html",
        "Python: Operators");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 17th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})