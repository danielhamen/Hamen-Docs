window.addEventListener("load", function () {
    const body = new ArticleBody("Python Operators", "python-operators");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In Python, operators are special symbols that are used to perform operations on variables and values"),
            docsElements.p("There are 7 different \"groups\" of operators and each group is used to perform specific tasks"),
            docsElements.unorderedList([
                docsElements.boldText("Arithmetic operators") + ": Used to perform mathematical operations on numbers",
                docsElements.boldText("Assignment operators") + ": Used to assign values to variables",
                docsElements.boldText("Comparison operators") + ": Used to compare values and return Boolean values (True or False)",
                docsElements.boldText("Logical operators") + ": Used to combine Boolean values and return Boolean values",
                docsElements.boldText("Identity operators") + ": Used to compare the memory locations of two objects",
                docsElements.boldText("Membership operators") + ": Used to test whether a value is a member of a sequence (such as a list or a string)",
                docsElements.boldText("Bitwise operators") + ": Used to perform bit-level operations on binary numbers"
            ], "The 7 groups are")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Arithmetic Operators");[
            docsElements.p("Arithmetic operators are used to perform mathematical operations"),
            docsElements.p("The following table shows the different arithmetic operators in Python:"),
            docsElements.table([
                [
                    docsElements.tableHeader("Operator"),
                    docsElements.tableHeader("Description"),
                    docsElements.tableHeader("Example"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("+"), "CENTER"),
                    docsElements.tableCell("Addition (can also be used on strings to " + docsElements.titleHint("concatenate", "Concatenation is the process of combining two or more strings or lists into a single string or list") + " them)"),
                    docsElements.tableCell(docsElements.inlineCode("3 + 5 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("-"), "CENTER"),
                    docsElements.tableCell("Subtraction"),
                    docsElements.tableCell(docsElements.inlineCode("7 - 2 = 5"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("*"), "CENTER"),
                    docsElements.tableCell("Multiplication (can also be used on strings to " + docsElements.titleHint("repeat multiply", "Repeat Multiplication is repeating / duplicating a string 'x' times. Eg. 'Hello' * 5 = 'HelloHelloHelloHelloHello'") + " them)"),
                    docsElements.tableCell(docsElements.inlineCode("4 * 2 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("/"), "CENTER"),
                    docsElements.tableCell("Division"),
                    docsElements.tableCell(docsElements.inlineCode("10 / 2 = 5"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("%"), "CENTER"),
                    docsElements.tableCell("Modulus (Remainder)"),
                    docsElements.tableCell(docsElements.inlineCode("11 % 3 = 2"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("**"), "CENTER"),
                    docsElements.tableCell("Exponentiation"),
                    docsElements.tableCell(docsElements.inlineCode("2 ** 3 = 8"), "CENTER"),
                ], [
                    docsElements.tableCell(docsElements.inlineCode("//"), "CENTER"),
                    docsElements.tableCell("Floor Division"),
                    docsElements.tableCell(docsElements.inlineCode("15 // 2 = 7"), "CENTER"),
                ]
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Comparison Operators");[
            docsElements.p("Comparison operators are used to compare two values"),
            docsElements.p("The result of a comparison operation is a boolean value (" + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False") + ")"),
            docsElements.p("The following table shows the different comparison operators in Python:"),
            docsElements.table([[docsElements.tableHeader("Operator", "CENTER"), docsElements.tableHeader("Description"), docsElements.tableHeader("Example", "CENTER")], [docsElements.tableCell(docsElements.inlineCode("=="), "CENTER"), docsElements.tableCell("Equal to"), docsElements.tableCell(docsElements.inlineCode("5 == 5"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("!="), "CENTER"), docsElements.tableCell("Not equal to"), docsElements.tableCell(docsElements.inlineCode("5 != 6"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode(">"), "CENTER"), docsElements.tableCell("Greater than"), docsElements.tableCell(docsElements.inlineCode("7 > 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("<"), "CENTER"), docsElements.tableCell("Less than"), docsElements.tableCell(docsElements.inlineCode("3 < 7"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode(">="), "CENTER"), docsElements.tableCell("Greater than or equal to"), docsElements.tableCell(docsElements.inlineCode("6 >= 6"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("<="), "CENTER"), docsElements.tableCell("Less than or equal to"), docsElements.tableCell(docsElements.inlineCode("3 <= 3"), "CENTER")],])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Logical Operators");[
            docsElements.p("Logical operators are used to combine two or more conditions"),
            docsElements.p("The result of a logical operation is a boolean value (" + docsElements.inlineCode("True") + " or " + docsElements.inlineCode("False") + ")"),
            docsElements.p("The following table shows the different logical operators in Python"),
            docsElements.table([[docsElements.tableHeader("Operator", "CENTER"), docsElements.tableHeader("Description"), docsElements.tableHeader("Example", "CENTER")], [docsElements.tableCell(docsElements.inlineCode("and"), "CENTER"), docsElements.tableCell("Returns True if both conditions are True"), docsElements.tableCell(docsElements.inlineCode("x < 5 and x < 10"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("or"), "CENTER"), docsElements.tableCell("Returns True if at least one condition is True"), docsElements.tableCell(docsElements.inlineCode("x < 5 or x < 10"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("not"), "CENTER"), docsElements.tableCell("Reverses the result of the condition"), docsElements.tableCell(docsElements.inlineCode("not(x < 5 and x < 10)"), "CENTER")],])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Assignment Operators");[
            docsElements.p("Assignment operators are used to assign values to variables"),
            docsElements.p("The following table shows the different assignment operators in Python:"),
            docsElements.table([[docsElements.tableHeader("Operator", "CENTER"), docsElements.tableHeader("Example"), docsElements.tableHeader("Equivalent to", "CENTER")], [docsElements.tableCell(docsElements.inlineCode("="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x = 5")), docsElements.tableCell(docsElements.inlineCode("x = 5"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("+="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x += 3")), docsElements.tableCell(docsElements.inlineCode("x = x + 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("-="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x -= 3")), docsElements.tableCell(docsElements.inlineCode("x = x - 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("*="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x *= 3")), docsElements.tableCell(docsElements.inlineCode("x = x * 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("/="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x /= 3")), docsElements.tableCell(docsElements.inlineCode("x = x / 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("%="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x %= 3")), docsElements.tableCell(docsElements.inlineCode("x = x % 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("**="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x **= 3")), docsElements.tableCell(docsElements.inlineCode("x = x ** 3"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("//="), "CENTER"), docsElements.tableCell(docsElements.inlineCode("x //= 3")), docsElements.tableCell(docsElements.inlineCode("x = x // 3"), "CENTER")],])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Membership Operators");[
            docsElements.p("Membership operators are used to test whether a value is a member of a sequence (e.g. a string, list, or tuple)"),
            docsElements.p("The following table shows the different membership operators in Python:"),
            docsElements.table([[docsElements.tableHeader("Operator", "CENTER"), docsElements.tableHeader("Description"), docsElements.tableHeader("Example", "CENTER")], [docsElements.tableCell(docsElements.inlineCode("in"), "CENTER"), docsElements.tableCell("Returns True if the value is a member of the sequence"), docsElements.tableCell(docsElements.inlineCode("\"l\" in \"hello\""), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("not in"), "CENTER"), docsElements.tableCell("Returns True if the value is not a member of the sequence"), docsElements.tableCell(docsElements.inlineCode("\"z\" not in \"hello\""), "CENTER")],])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        section = layout.newSection("Bitwise Operators");[
            docsElements.p("Bitwise operators are used to perform operations on individual bits of binary numbers"),
            docsElements.p("They take two integer operands and return bitwise operators in Python:"),
            docsElements.table([[docsElements.tableHeader("Operator", "CENTER"), docsElements.tableHeader("Description"), docsElements.tableHeader("Example", "CENTER")], [docsElements.tableCell(docsElements.inlineCode("&"), "CENTER"), docsElements.tableCell("Bitwise AND"), docsElements.tableCell(docsElements.inlineCode("0b1010 & 0b011 = 0b0010"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("^"), "CENTER"), docsElements.tableCell("Bitwise XOR"), docsElements.tableCell(docsElements.inlineCode("0b1010 ^ 0b0110 = 0b1100"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("~"), "CENTER"), docsElements.tableCell("Bitwise NOT"), docsElements.tableCell(docsElements.inlineCode("~0b1010 = -11"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode("<<"), "CENTER"), docsElements.tableCell("Left shift"), docsElements.tableCell(docsElements.inlineCode("0b1010 << 2 = 0b101000"), "CENTER")], [docsElements.tableCell(docsElements.inlineCode(">>"), "CENTER"), docsElements.tableCell("Right shift"), docsElements.tableCell(docsElements.inlineCode("0b1010 >> 1 = 0b0101"), "CENTER")],])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-booleans/index.html",
        "Python: Booleans}",
        "../python-data-structures/index.html",
        "Python: Data Structures");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 17th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})