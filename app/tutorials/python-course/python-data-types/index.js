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
            docsElements.unorderedList([
                docsElements.listItem(docsElements.inlineCode("str")),
                docsElements.listItem(docsElements.inlineCode("int")),
                docsElements.listItem(docsElements.inlineCode("float")),
                docsElements.listItem(docsElements.inlineCode("complex")),
                docsElements.listItem(docsElements.inlineCode("list")),
                docsElements.listItem(docsElements.inlineCode("tuple")),
                docsElements.listItem(docsElements.inlineCode("set")),
                docsElements.listItem(docsElements.inlineCode("frozenset")),
                docsElements.listItem(docsElements.inlineCode("range")),
                docsElements.listItem(docsElements.inlineCode("dict")),
                docsElements.listItem(docsElements.inlineCode("bool")),
                docsElements.listItem(docsElements.inlineCode("bytes")),
                docsElements.listItem(docsElements.inlineCode("bytearray")),
                docsElements.listItem(docsElements.inlineCode("memoryview")),
                docsElements.listItem(docsElements.inlineCode("NoneType")),
            ], "In Python, there are several built-in data types that you can use")
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
            docsElements.p("In this example, the variable " + docsElements.inlineCode("age") + " was originally a string, but then we casted it to an integer")
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