window.addEventListener("load", function () {
    const body = new ArticleBody("Python Strings", "python-strings");

    body.draw = function () {
        let layout = this.layout;

        // Section:
        let section = layout.newSection();[
            docsElements.p("A string is a very important data type in any programming language"),
            docsElements.p("Strings are used to store text values, characters, or character sequences"),
            docsElements.p("Examples of strings are: " + docsElements.inlineCode("\"Hello World\"") + ", " + docsElements.inlineCode("\"39\"") + ", " + docsElements.inlineCode("\"Help!!!\"") + ", " + docsElements.inlineCode("\"[Mexico, Canada, Russia]\"") + ""),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Creating Strings");[
            docsElements.p("In Python, a string is denoted by either single or double quotes"),
            docsElements.codeBlock([
                "{comment(# String:)}",
                "{var(x)} = {str(\"Hello World!\")}",
                "",
                "{comment(# Also a string:)}",
                "{var(x)} = {str('Hello World!')}"
            ], "For example"),
            docsElements.noteText("There is absolutely no difference between defining a string with double quotes or single quotes. The reason there are 2 ways is because is most other programming languages, there is a type called: " + docsElements.inlineCode("char") + " which is defined by single quotes"),
            docsElements.break(1.5),
            docsElements.codeBlock([
"{var(my_multiline_string)} = {str(\"\"\")}",
"{str(This)}",
"{str(is)}",
"{str(a)}",
"{str(multi-line)}",
"{str(string)}",
"{str(\"\"\")}"
            ], "You can also use triple quotes to create multiline strings")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Accessing Characters in a String");[
            docsElements.p("You can access individual characters in a string by using indexing"),
            docsElements.p("In Python, the first character of a string has an index of 0"),
            docsElements.codeBlock([
                "{var(my_string)} = {str(\"Hello, world!\")}",
                "{var(first_character)} = {var(my_string)}[{num(0)}]",
                "{func(print)}({var(first_character)})",
                "{term()}{out(H)}"
            ], "For example"),
            docsElements.p("You can also access a range of characters in a string by using slicing"),
            docsElements.codeBlock([
                "{var(my_string)} = {str(\"Hello, world!\")}",
                "{var(substring)} = {var(my_string)}[{num(0)}:{num(5)}]",
                "{func(print)}({var(substring)})",
                "{term()}{out(Hello)}"
            ], "Here's an example")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("String Methods");[
            docsElements.p("Python strings come with a variety of built-in methods that you can use to manipulate them"),
            docsElements.unorderedList([
                docsElements.inlineCode("upper()") + ": Returns the string in all uppercase letters",
                docsElements.inlineCode("lower()") + ": Returns the string in all lowercase letters",
                docsElements.inlineCode("split()") + ": Splits the string into a list of substrings based on a specified delimiter",
                docsElements.inlineCode("replace()") + ": Replaces a specified substring with another substring"
            ], "Here are a few examples"),
            docsElements.codeBlock([
                "{var(my_string)} = {str(\"Hello, world!\")}",
                "",
                "{comment(# Make the string all uppercase)}",
                "{var(uppercase_string)} = {var(my_string)}.{func(upper)}()",
                "{func(print)}({var(uppercase_string)})",
                "{term()}{out(HELLO, WORLD!)}",
                "",
                "{comment(# Split the string into a list of substrings)}",
                "{var(split_string)} = {var(my_string)}.{func(split)}({str(\",\")})",
                "{func(print)}({var(split_string)})",
                "{term()}{out([\"Hello\", \" world!\"])}",
                "",
                "{comment(# Replace a substring with another substring)}",
                "{var(replaced_string)} = {var(my_string)}.{func(replace)}({str(\"world\")}, {str(\"Python\")})",
                "{func(print)}({var(replaced_string)})",
                "{term()}{out(Hello, Python!)}"
            ], "Here are some examples"),
            docsElements.noteText("For in-depth documentation about each String method, read our " + docsElements.anchorText("Python String Method Reference", "https://www.hamen.tech/coming-soon", "_self"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("String Formatting");[
            docsElements.p("String formatting allows you to insert values into a string dynamically"),
            docsElements.p("There are several ways to format a string in Python, but the most common method is to use the " + docsElements.inlineCode("%") + " operator or the " + docsElements.inlineCode("format()") + " method"),
            docsElements.codeBlock([
                "{var(name)} = {str(\"John\")}",
                "{var(age)} = {num(25)}",
                "",
                "{comment(# Using the % operator)}",
                "{var(message)} = {str(\"My name is %s and I'm %d years old.\")} {int(%)} ({var(name)}, {var(age)})",
                "{func(print)}({var(message)})",
                "{term()}{out(My name is John and I'm 25 years old.)}",
                "",
                "{comment(# Using the format() method)}",
                "{var(message)} = {str(\"My name is {} and I'm {} years old.\")}.{func(format)}({var(name)}, {var(age)})",
                "{func(print)}({var(message)})",
                "{term()}{out(My name is John and I'm 25 years old.)}",
                "",
                "{comment(# Using f-strings)}",
                "{var(message)} = {prestr(f)}{str(\"My name is )}{{var(name)}}{str( and I'm )}{{var(age)}}{str( years old.\")}",
                "{func(print)}({var(message)})",
                "{term()}{out(My name is John and I'm 25 years old.)}"
            ], "Here are some examples")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../python-data-types/index.html", "Python: Data Types", "../python-numbers/index.html", "Python: Numbers");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 17th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})