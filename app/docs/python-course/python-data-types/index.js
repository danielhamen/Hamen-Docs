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
            ], "4. Complex")
            // docsElements.subSection([
            //     docsElements.p("A " + docsElements.inlineCode("list()") + " in Python represents a is one of the most commonly used data type"),
            //     docsElements.p("Lists are used to store a collection, or sequence of items, which can be of different data types"),
            //     docsElements.p("To create a list in Python, enclose a sequence of values inside square brackets, separated by commas"),
            //     docsElements.codeBlock([
            //         "{var(my_list)} = [{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}]"
            //     ], "Here's an example"),
            //     docsElements.codeBlock([
            //         "{var(my_list)} = []",
            //         "{var(my_list)}.{func(push)}({num(1)})",
            //         "{var(my_list)}.{func(push)}({num(2)})",
            //         "{var(my_list)}.{func(push)}({num(3)})",
            //         "",
            //         "{func(print)}({var(my_list)})",
            //         "{term()}{out([1, 2, 3])}"
            //     ], "You can also create an empty list and add elements to it later"),
            //     docsElements.subSection([
            //         docsElements.p("To access an element in a list, use square brackets and the index of the element"),
            //         docsElements.codeBlock([
            //             "{var(my_list)} = [{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}]",
            //             "{func(print)}({var(my_list)}[{num(0)}]) {comment(# Output: 1)}",
            //             "{func(print)}({var(my_list)}[{num(2)}]) {comment(# Output: 3)}"
            //         ]),
            //         docsElements.codeBlock([
            //             "{var(my_list)} = [{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}]",
            //             "{func(print)}({var(my_list)}[-{num(1)}]) {comment(# Output: 5)}",
            //             "{func(print)}({var(my_list)}[-{num(3)}]) {comment(# Output: 3)}"
            //         ], "You can also use negative indexing to access elements from the end of the list"),
            //         docsElements.noteText("Python uses 0-based indexing, which means that the first element has an index of 0")
            //     ], "Accessing Elements in a List", 3),
            //     docsElements.subSection([
            //         docsElements.p("You can access a range of elements in a list using slicing"),
            //         docsElements.p("Slicing is done using the colon (" + docsElements.inlineCode(":") + ") operator"),
            //         docsElements.codeBlock([
            //             "[",
            //             "\tstart:",
            //             "\tstop:",
            //             "\tstep:",
            //             "]"
            //         ], "The syntax for slicing is"),
            //         docsElements.codeBlock([
            //             "{var(my_list)} = [{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}]",
            //             "{func(print)}({var(my_list)}[{num(1)}:{num(3)}])  &emsp;&emsp; {comment(# Output: [2, 3])}",
            //             "{func(print)}({var(my_list)}[{num(1)}:])          &emsp;&emsp;&emsp; {comment(# Output: [2, 3, 4, 5])}",
            //             "{func(print)}({var(my_list)}[:{num(3)}])          &emsp;&emsp;&emsp; {comment(# Output: [1, 2, 3])}",
            //             "{func(print)}({var(my_list)}[::{num(2)}])         &emsp;&emsp; {comment(# Output: [1, 3, 5])}",
            //             "{func(print)}({var(my_list)}[::-{num(1)}])        &emsp; {comment(# Output: [5, 4, 3, 2, 1])}"
            //         ], "For example")
            //     ], "Slicing Lists", 3),
            //     docsElements.subSection([
            //         docsElements.p("Lists are mutable, which means that you can modify them by changing the values of their elements"),
            //         docsElements.p("You can also add or remove elements from a list"),
            //         docsElements.codeBlock([
            //             "{var(my_list)} = [{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}]",
            //             "{var(my_list)}[{num(0)}] = {num(0)}          {comment(# Modify the first element)}",
            //             "{func(print)}({var(my_list)})",
            //             "{term()}{out([0, 2, 3, 4, 5])}",
            //             "",
            //             "{var(my_list)}.{func(append)}({num(6)})       {comment(# Add an element to the end of the list)}",
            //             "{func(print)}({var(my_list)})",
            //             "{term()}{out([0, 2, 3, 4, 5, 6])}",
            //             "",
            //             "{int(del)} {var(my_list)}[{num(2)}]          {comment(# Remove the third element)}",
            //             "{func(print)}({var(my_list)})",
            //             "{term()}{out([0, 2, 4, 5, 6])}"
            //         ], "Here's an example")
            //     ], "Modifying Lists", 3)
            // ], "6. Lists"),
            // docsElements.subSection([
            //     docsElements.p("Tuples are similar to lists, but they are immutable, which means that you cannot modify them once they are created"),
            //     docsElements.p("Tuples are also created using parentheses instead of square brackets"),
            //     docsElements.p("To create a tuple in Python, enclose a sequence of values inside parentheses, separated by commas"),
            //     docsElements.codeBlock([
            //         "{var(my_tuple)} = ({num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)})"
            //     ], "Here's an example"),
            //     docsElements.codeBlock([
            //         "{var(my_singleton_tuple)} = ({num(1)},)"
            //     ],  "You can also create a tuple with a single element by including a trailing comma after the element"),
            //     docsElements.p("Furthermore, the syntax for accessing elements in a tuple is the same as for accessing elements in a list")
            // ], "7. Tuples"),
            // docsElements.subSection([
            //     docsElements.p("A set is an unordered collection of unique elements"),
            //     docsElements.p("Sets are created using curly braces " + docsElements.inlineCode("{}") + " or by using the " + docsElements.inlineCode("set()") + " constructor"),
            //     docsElements.codeBlock([
            //         "{var(my_set)} = \{{num(1)}, {num(2)}, {num(3)}, {num(4)}, {num(5)}\}"
            //     ], "Here's an example"),
            //     docsElements.subSection([
            //         docsElements.p("Sets have built-in methods for adding and removing elements"),
            //         docsElements.p("You can add an element to a set using the " + docsElements.inlineCode("add()") +" method"),
            //         docsElements.codeBlock([
            //             "{var(my_set)} = {{num(1)}, {num(2)}, {num(3)}}",
            //             "{var(my_set)}.{func(add)}({num(4)})",
            //             "{func(print)}({var(my_set)})",
            //             "{term()}{out({ 1, 2, 3, 4})}"
            //         ], "Here's an example"),
            //         docsElements.p("You can remove an element from a set using the " + docsElements.inlineCode("remove()") + " method"),
            //         docsElements.p("If the element is not in the set, this method will raise a " + docsElements.inlineCode("KeyError")),
            //         docsElements.codeBlock([
            //             "{var(my_set)} = {{num(1)}, {num(2)}, {num(3)}}",
            //             "{var(my_set)}.{func(remove)}({num(2)})",
            //             "{func(print)}({var(my_set)})",
            //             "{term()}{out({1, 3})}"
            //         ]),
            //         docsElements.p("To avoid raising a " + docsElements.inlineCode("KeyError") + ", you can use the " + docsElements.inlineCode("discard()") + " method instead"),
            //         docsElements.codeBlock([
            //             "{var(my_set)} = {{num(1)}, {num(2)}, {num(3)}}",
            //             "{var(my_set)}.{func(discard)}({num(2)})",
            //             "{func(print)}({var(my_set)})",
            //             "{term()}{out({1, 2})}"
            //         ])
            //     ], "Adding and Removing Elements"),
            //     docsElements.subSection([
            //         docsElements.p("Python sets support a number of set operations, such as union, intersection, and difference"),
            //         docsElements.codeBlock([
            //             "{var(set_a)} = {{num(1)}, {num(2)}, {num(3)}}",
            //             "{var(set_b)} = {{num(2)}, {num(3)}, {num(4)}}",
            //             "",
            //             "{comment(# Union of two sets)}",
            //             "{var(set_c)} = {var(set_a)} | {var(set_b)}",
            //             "{func(print)}({var(set_c)})",
            //             "{term()}{out({1, 2, 3, 4})}",
            //             "",
            //             "{comment(# Intersection of two sets)}",
            //             "{var(set_d)} = {var(set_a)} & {var(set_b)}",
            //             "{func(print)}({var(set_d)})",
            //             "{term()}{out({2, 3})}",
            //             "",
            //             "{comment(# Difference of two sets)}",
            //             "{var(set_e)} = {var(set_a)} - {var(set_b)}",
            //             "{func(print)}({var(set_e)})",
            //             "{term()}{out({1})}"
            //         ], "Here are a few examples"),
            //         docsElements.unorderedList([
            //             docsElements.boldText("Union") + " ( " + docsElements.inlineCode("|") + " ) : Combines all unique elements from two sets",
            //             docsElements.boldText("Intersection") + " ( " + docsElements.inlineCode("&") + " ) : Returns all the elements that are common to both sets",
            //             docsElements.boldText("Difference ") + " ( " + docsElements.inlineCode("-") + " ) : Returns all the elements that are in one set but not in the other",
            //         ], "In this example, we can see that")
            //     ], "Set Operations")
            // ], "8. Sets"),
            // docsElements.subSection([
            // ], "9. Frozen Sets"),
            //     docsElements.subSection([
            // ], "10. Ranges"),
            // docsElements.subSection([
            // ], "11. Dictionaries"),
            // docsElements.subSection([
            // ], "12. Bytes"),
            // docsElements.subSection([
            // ], "13. Byte Arrays"),
            // docsElements.subSection([
            // ], "14. Memory Views"),
            // docsElements.subSection([
            // ], "15. NoneType")
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
        let footer = docsElements.footer("February 17th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})