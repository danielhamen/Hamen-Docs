window.addEventListener("load", function () {
    const body = new ArticleBody("Python Data Types", "python-data-types");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("Data types are a way to classify values into different categories based on their characteristics"),
            docsElements.p("Different types of variables would use a different data types"),
            docsElements.p("For example, the variable: " + docsElements.inlineCode("x = 39.5") + ", would use the data type: " + docsElements.inlineCode("float") + " because it's a number with a decimal")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Category of Data Types' section:
        section = layout.newSection("Data Type Categories:"); [
            docsElements.p("The data types inside of Python can be classified into 7 different \"categories\":"),
            docsElements.unorderedList([
                "Text Types",
                "Numerical Types",
                "Booleans",
                "Data Structure",
                "Mapping Types",
                "Binary Types",
                "NoneType"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Python's Data Types' section:
        section = layout.newSection("Built-in Data Types:"); [
            docsElements.p("In Python, there are several built-in data types you can use"),
            docsElements.p("Within the next 15 sections, we'll go over each one"),
            docsElements.subSection([
                docsElements.p("A string value is a sequence of characters and is used to represent text in Python"),
                docsElements.p("A string is denoted by either single or double quotes"),
                docsElements.codeBlock([
                    "{comment(# String:)}",
                    "{var(x)} = {str(\"Hello World!\")}",
                    "",
                    "{comment(# Also a string:)}",
                    "{var(x)} = {str('Hello World!')}"
                ], "For example"),
                docsElements.noteText("There is absolutely no difference between defining a string with double quotes or single quotes. The reason there are 2 ways is because is most other programming languages, there is a type called: " + docsElements.inlineCode("char") + " which is defined by single quotes")
            ], "1. Strings"),
            docsElements.subSection([
                docsElements.p("An " + docsElements.inlineCode("int()") + " value is a whole number, either positive, negative, or zero"),
                docsElements.p("Integers cannot contain decimals, whereas " + docsElements.inlineCode("float()") + " can"),
                docsElements.p("Unlike many other languages, integers are not limited to any range such as 32-bit or 64-bit"),
                docsElements.p("You can create an int value in Python by assigning a number without a decimal point to a variable:"),
                docsElements.codeBlock([
                    "{var(x)} = {num(14)}",
                    "{var(y)} = {num(-64)}"
                ]),
                docsElements.p("You can perform basic arithmetic operations on int values in Python, such as addition, subtraction, multiplication, and division"),
                docsElements.codeBlock([
                    "{var(x)} = {num(14)}",
                    "{var(y)} = {num(27)}",
                    "{var(z)} = {var(x)} + {var(y)}",
                    "",
                    "{func(print)}({var(z)})",
                    "{term()}{out(34)}"
                ])
            ], "2. Integers"),
            docsElements.subSection([
                docsElements.p("A " + docsElements.inlineCode("float()") + " value is like an " + docsElements.anchorText("integer", "../python-integers/index.html", "_self") + ", but contains decimals"),
                docsElements.p("Again, similar to integers, floats are not limited to a 32-bit or 64-bit range"),
                docsElements.p("You can create a float value in Python by assigning a number with a decimal point to a variable:"),
                docsElements.codeBlock([
                    "{var(x)} = {num(6.3)}",
                    "{var(y)} = {num(-27.5)}",
                    "{var(y)} = {num(-0.0)}"
                ]),
                docsElements.codeBlock([
                    "{var(x)} = {num(135)}",
                    "{var(y)} = {num(0.5)}",
                    "{var(z)} = {var(x)} * {var(y)}",
                    "",
                    "{func(print)}({var(z)})",
                    "{term()}{out(67.5)}"
                ], "Additionally, like Integers, you can perform basic arithmetic operations on floats in Python")
            ], "3. Floats"),
            docsElements.subSection([
                docsElements.p("A " + docsElements.inlineCode("complex") + " value is a number with a real and imaginary component, represented as " + docsElements.inlineCode("a + bj") + " where " + docsElements.inlineCode("a") + " is the real component, " + docsElements.inlineCode("b") + " is the imaginary component, and " + docsElements.inlineCode("j") + " is the imaginary unit"),
                docsElements.codeBlock([
                    "{var(x)} = {num(3)} + {num(4j)}",
                    "{func(print)}({num(x)})",
                    "{term()}{out((3 + 4j))}"
                ], "Here is an example of how to define a complex number in Python"),
                docsElements.codeBlock([
                    "x = 3 + 4j",
                    "{func(print)}({var(x)}.{var(real)})",
                    "{term()}{out(3.0)}",
                    "{func(print)}({var(x)}.{var(imag)})",
                    "{term()}{out(4.0)}"
                ], "You can access the real and imaginary components of a complex number using the real and imag attributes respectively"),
                docsElements.p("Like Integers, and Floats, you can perform arithmetic operations on complex numbers in Python"),
                docsElements.p("It's also worth noting that the real component of a complex number can be any real number, including floating-point numbers and decimal numbers. The imaginary component must be an integer or a floating-point number"),
                docsElements.noteText("Python follows the Order of Operations (BEDMAS) when evaluating an expression")
            ], "4. Complex"),
            docsElements.subSection([
                docsElements.p("The " + docsElements.inlineCode("bool") + " type in Python represents a boolean value, which is either " + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False")),
                docsElements.p("The boolean type is commonly used in control flow statements and other logic operations"),
                docsElements.codeBlock([
                    "{var(x)} = {bool(True)}",
                    "{func(print)}({var(x)})",
                    "{term()}{out(True)}"
                ], "Here is an example of how to define a boolean value in Python"),
                docsElements.codeBlock([
                    "{var(x)} = {bool(True)}",
                    "{var(y)} = {bool(False)}",
                    "{func(print)}({var(x)} {int(and)} {var(y)}) {comment(# Checks whether both variables are `True`)}",
                    "{term()}{out(False)}",
                    "",
                    "{func(print)}({var(x)} {int(or)} {var(y)}) {comment(# Checks whether one, or both variables are `True`)}",
                    "{term()}{out(True)}",
                    "",
                    "{func(print)}({int(not)} {var(x)}) {comment(# Inverts the boolean (`False` -> `True` and vice-versa))}",
                    "{term()}{out(False)}",
                    "",
                    "{func(print)}({var(x)} {int(is)} {bool(True)}) {comment(# Checks whether `x` is equal to True (similar to `==`, but for booleans))}",
                    "{term()}{out(False)}"
                ], "You can perform operations on boolean values in Python using the " + docsElements.inlineCode("and") + ", " + docsElements.inlineCode("or") + ", " + docsElements.inlineCode("is") + ", and " + docsElements.inlineCode("not") + " operators"),
                docsElements.codeBlock([
                    "{var(x)} = {num(5)}",
                    "{var(y)} = {num(10)}",
                    "{func(print)}({var(x)} == {var(y)})",
                    "{term()}{out(False)}",
                    "",
                    "{func(print)}({var(x)} != {var(y)})",
                    "{term()}{out(True)}",
                    "",
                    "{func(print)}({var(x)} < {var(y)})",
                    "{term()}{out(True)}"
                ], "Boolean values can also be used in comparisons, such as " + docsElements.inlineCode("==") + ", " + docsElements.inlineCode("!=") + ", " + docsElements.inlineCode("<") + ", " + docsElements.inlineCode(">") + ", " + docsElements.inlineCode("<=") + ", and " + docsElements.inlineCode(">=") + ""),
                docsElements.unorderedList([
                    docsElements.listItem(docsElements.inlineCode("None")),
                    docsElements.listItem(docsElements.inlineCode("False")),
                    "Zero of any numeric type, for example, " + docsElements.inlineCode("0") + ", " + docsElements.inlineCode("0.0") + ", " + docsElements.inlineCode("0j"),
                    "Empty sequences, for example, " + docsElements.inlineCode("''") + ", " + docsElements.inlineCode("[]") + ", " + docsElements.inlineCode("()") + "",
                    "Empty collections, for example, " + docsElements.inlineCode("{}") + ", " + docsElements.inlineCode("set()")
                ], "It's also worth noting that any value in Python can be evaluated as a boolean in a conditional statement. The following values are considered False in a boolean context"),
                docsElements.p("All other values are considered " + docsElements.inlineCode("True")),
                docsElements.noteText("You will learn more about comparison operators (eg. " + docsElements.inlineCode("and") + ", " + docsElements.inlineCode("not") + ", " + docsElements.inlineCode("==") + ", " + docsElements.inlineCode(">") + ", etc) in the " + docsElements.anchorText("Operators Tutorial", "../python-operators/index.html", "_self"))
            ], "5. Booleans"),
            docsElements.subSection([
            ], "6. Lists"),
            docsElements.subSection([
            ], "7. Tuples"),
            docsElements.subSection([
            ], "8. Sets"),
            docsElements.subSection([
            ], "9. Frozen Sets"),
                docsElements.subSection([
            ], "10. Ranges"),
            docsElements.subSection([
            ], "11. Dictionaries"),
            docsElements.subSection([
            ], "12. Bytes"),
            docsElements.subSection([
            ], "13. Byte Arrays"),
            docsElements.subSection([
            ], "14. Memory Views"),
            docsElements.subSection([
            ], "15. NoneType")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Determining Data Types' section:
        section = layout.newSection("Determining Data Types"); [
            docsElements.p("You can use the " + docsElements.inlineCode("type()") + " function in Python to determine the data type of a value. For example:"),
            docsElements.codeBlock([
                "{var(x)} = {str(\"hello\")}",
                "{func(print)}({func(type)}({var(x)}))",
                "{term()}{out(&lt;class 'str'&gt;)}"
            ]),
            docsElements.p("Furthermore, you can condition code based on the data type by using the " + docsElements.inlineCode("is") + " keyword:"),
            docsElements.codeBlock([
                "{var(x)} = {var(\"Hello World!\")}",
                "{int(if)} {func(type)}({var(x)}) {int(is)} {cls(str)}:",
                "    {func(print)}({str(\"String!\")})",
                "{int(else)}:",
                "    {func(print)}({str(\"Not String.\")})",
                "{term()}{out(String!)}"
            ]),
            docsElements.noteText("You will learn more about " + docsElements.inlineCode("if...else") + " in the '" + docsElements.anchorText("Python: If-Statements", "../python-if-statements/index.html", "_self") + "' Tutorial"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Type Casting' section:
        section = layout.newSection("Type Casting"); [
            docsElements.p("Sometimes you may need to convert a value from one data type to another"),
            docsElements.p("Converting a certain type to another is known as Type Casting"),
            docsElements.p("To cast a data type in Python, state the target type followed by brackets surrounding the source value"),
            docsElements.codeBlock([
                "{var(age)} = {str(\"19\")}",
                "{var(age)} = {cls(int)}({var(x)})",
                "{func(print)}({func(type)}({var(x)}))",
                "{term()}{out(&lt;type 'int'&gt;)}"
            ], "For example"),
            docsElements.p("In this example, the variable " + docsElements.inlineCode("age") + " was originally a string, but then we casted it to an integer"),
            docsElements.codeBlock([
                "{comment(# str() -> bool():)}",
                "{var(a)} = {str(\"False\")}",
                "{var(a)} = {cls(bool)}({var(a)})",
                "{func(print)}({var(a)}, {func(type)}({var(a)}))",
                "{term()}{out(False &lt;class 'bool'&gt;)}",
                "",
                "{comment(# str() -> list():)}",
                "{var(b)} = {str(\"Hello!\")}",
                "{var(b)} = {cls(list)}({var(b)})",
                "{func(print)}({var(b)}, {func(type)}({var(b)}))",
                "{term()}{out(['H', 'e', 'l', 'l', 'o', '!'] &lt;class 'list'&gt;)}",
                "",
                "{comment(# list() -> tuple():)}",
                "{var(d)} = [{num(0)}, {num(1)}, {num(2)}, {num(3)}]",
                "{var(d)} = {cls(tuple)}({var(d)})",
                "{func(print)}({var(d)}, {func(type)}({var(d)}))",
                "{term()}{out((0, 1, 2, 3) &lt;class 'tuple'&gt;)}",
            ], "This method works with any data type")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-variables/index.html", "Python: Variables", "../python-strings/index.html", "Python: Strings");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("January 30th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})