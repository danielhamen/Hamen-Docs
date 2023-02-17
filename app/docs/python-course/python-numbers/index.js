window.addEventListener("load", function () {
    const body = new ArticleBody("Python Numbers", "python-numbers");

    body.draw = function () {
        let layout = this.layout;

        const p = docsElements.p;
        const ic = docsElements.inlineCode;

        // Section:
        let section = layout.newSection();[
            docsElements.p("In Python, there are several data types used to represent numbers"),
            docsElements.p("Depending on what type of number you want to use, you should use a different data type"),
            docsElements.unorderedList([
                docsElements.inlineCode("int()") + ": Integers are any whole number. Eg. " + docsElements.inlineCode("273") + ", " + docsElements.inlineCode("0") + ", " + docsElements.inlineCode("-2004"),
                docsElements.inlineCode("float()") + ": Floats are any number with a decimal point. Eg. " + docsElements.inlineCode("39.9") + ", " + docsElements.inlineCode("-0.5") + ", " + docsElements.inlineCode("-2349.000"),
                docsElements.inlineCode("complex()") + ": Complex numbers are any number with a real and imaginary component. Eg. " + docsElements.inlineCode("8j") + ", " + docsElements.inlineCode("3 + 2j") + ", " + docsElements.inlineCode("-58 - 22j"),
            ], "The 3 number data types are")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Creating Numbers");[
            docsElements.p("As previously mentioned in the " + docsElements.anchorText("Python Variables Tutorial", "../python-variables/index.html", "_self") + ", explicitly stating the data type when creating a variable is not necessary. Instead, Python automatically detects the data type based on the value assigned to the variable"),
            docsElements.p("This means that you can create a number variable simply by assigning it a value"),
            docsElements.p("For example, if you assign a decimal value to a variable, Python will recognize it as " + docsElements.inlineCode("float()") + ", if you assign an integer value to a variable, Python will recognize it as " + docsElements.inlineCode("int()") + ", and finally, if you assign a complex number to a variable, Python will recognize it as " + docsElements.inlineCode("complex")),
            docsElements.codeBlock([
                "{var(x)} = {num(39.4)}",
                "{func(print)}({cls(type)}({var(x)}))",
                "{term()}{out(&lt;class 'float'&gt;)}",
                "",
                "{var(y)} = {num(23)}",
                "{func(print)}({cls(type)}({var(x)}))",
                "{term()}{out(&lt;class 'int'&gt;)}",
                "",
                "{var(z)} = {num(8j)}",
                "{func(print)}({cls(type)}({var(x)}))",
                "{term()}{out(&lt;class 'complex'&gt;)}",
            ], "For example"),
            docsElements.noteText("The " + docsElements.inlineCode("type()") + " function checks the data-type of a variable, or given value", "Remember"),
            docsElements.break(1.5),
            docsElements.p("Now that we've cleared up the basics of number types in Python, " + docsElements.boldText("in the following three sections we will go into greater detail about each type of number")),
            docsElements.subSection([
                docsElements.p("An " + docsElements.inlineCode("int()") + " value is a whole number, either positive, negative, or zero"),
                docsElements.p("Integers cannot contain decimals, whereas " + docsElements.inlineCode("float()") + " can"),
                docsElements.p("Unlike many other languages, integers are not limited to any range such as 32-bit or 64-bit"),
                docsElements.codeBlock([
                    "{var(x)} = {num(14)}",
                    "{var(y)} = {num(-64)}"
                ], "You can create an int value in Python by assigning a number without a decimal point to a variable")
            ], "1. Integers"),
            docsElements.subSection([
                docsElements.p("A " + docsElements.inlineCode("float()") + " value is like an " + docsElements.anchorText("Integer", "#UEID-2", "_self") + ", but contains decimals"),
                docsElements.p("Again, similar to integers, floats are not limited to a 32-bit or 64-bit range"),
                docsElements.p("You can create a float value in Python by assigning a number with a decimal point to a variable:"),
                docsElements.codeBlock([
                    "{var(x)} = {num(6.3)}",
                    "{var(y)} = {num(-27.5)}",
                    "{var(y)} = {num(-0.0)}"
                ])
            ], "2. Floats"),
            docsElements.subSection([
                docsElements.p("Finally, a " + docsElements.inlineCode("complex") + " value is a number with a real and imaginary component, represented as " + docsElements.inlineCode("a + bj") + " where " + docsElements.inlineCode("a") + " is the real component, " + docsElements.inlineCode("b") + " is the imaginary component, and " + docsElements.inlineCode("j") + " is the imaginary unit"),
                docsElements.codeBlock([
                    "{var(x)} = {num(3)} + {num(4j)}",
                    "{func(print)}({var(x)})",
                    "{term()}{out((3 + 4j))}"
                ], "Here is an example of how to define a complex number in Python"),
                docsElements.codeBlock([
                    "{var(x)} = {num(3)} + {num(4j)}",
                    "{func(print)}({var(x)}.{var(real)})",
                    "{term()}{out(3.0)}",
                    "{func(print)}({var(x)}.{var(imag)})",
                    "{term()}{out(4.0)}"
                ], "You can access the real and imaginary components of a complex number using the real and imag attributes respectively"),
                docsElements.p("The real component of a complex number can be any real number, including floating-point numbers and decimal numbers. The imaginary component must be an integer or a floating-point number")
            ], "3. Complex")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Arithmetic Operations on Numbers");[
            docsElements.p("You can perform basic arithmetic operations on int values in Python, such as addition, subtraction, multiplication, and division"),
            docsElements.codeBlock([
                "{var(x)} = {num(2)}",
                "{var(y)} = {num(1)}",
                "",
                "{comment(# Add `x` and `y`:)}",
                "{var(z)} = {var(x)} + {var(y)}",
                "{func(print)}({var(z)})",
                "{term()}{out(3)}",
                "",
                "{comment(# Subtract `x` from `y`:)}",
                "{var(z)} = {var(x)} - {var(y)}",
                "{func(print)}({var(z)})",
                "{term()}{out(1)}",
                "",
                "{comment(# Multiply `x` and `y`:)}",
                "{var(z)} = {var(x)} * {var(y)}",
                "{func(print)}({var(z)})",
                "{term()}{out(2)}",
                "",
                "{comment(# Divide `x` and `y`:)}",
                "{var(z)} = {var(x)} / {var(y)}",
                "{func(print)}({var(z)})",
                "{term()}{out(2)}",
            ], "For example"),
            docsElements.noteText("Python follows the Order of Operations (BEDMAS) when evaluating an expression")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-strings/index.html", "Python: Strings", "../python-booleans/index.html", "Python: Booleans");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 17th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})