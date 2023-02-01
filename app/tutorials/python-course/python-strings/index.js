window.addEventListener("load", function () {
    const body = new ArticleBody("Python: Strings", "python-strings");

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

        // 'Concatenating Strings' Section:
        section = layout.newSection("Concatenating Strings"); [
            docsElements.p("Concatenation, despite its daring name, is actually a very simple concept"),
            docsElements.p("When you merge 2 or more strings, this is known as concatenating"),
            docsElements.codeBlock([
                "{var(first_name)} = {str(\"John\")}",
                "{var(last_name)} = {str(\"Doe\")}",
                "",
                "{comment(# Concatenate the 2 strings:)}",
                "{var(name)} = {var(first_name)} + {str(\" \")} + {var(last_name)}",
                "",
                "{func(print)}({var(name)})",
                "{term()}{out(John Doe)}"
            ], "Concatenation example"),
            docsElements.p("In this example, we concatenated " + docsElements.inlineCode("first_name") + " and " + docsElements.inlineCode("last_name") + " to create a final variable called " + docsElements.inlineCode("name"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Accessing Characters in a String' Section:
        section = layout.newSection("Accessing Characters in a String"); [
            docsElements.p("You can access individual characters in a str value using square brackets and an index number"),
            docsElements.p("The index number starts from 0 and goes up to the length of the string minus 1"),
            docsElements.codeBlock([
                "{var(x)} = {str(\"hello\")}",
                "{func(print)}({var(x)}[{num(0)}])",
                "{term()}{out(h)}"
            ], "Accessing characters in a string"),
            docsElements.p("Additionally, you can access a range of characters. This is known as String Slicing"),
            docsElements.p("To slice a string, you can state the start and end indices separated by a colon"),
            docsElements.codeBlock([
                "{var(name)} = {str(\"George\")}",
                "{func(print)}({var(name)}[{num(0)}:{num(3)}])",
                "{term()}{out(Geo)}"
            ]),
            docsElements.noteText("The end index is exclusive")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-variables/index.html", "Python: Variables", "../python-integers/index.html", "Python: Integers");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 1st, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})