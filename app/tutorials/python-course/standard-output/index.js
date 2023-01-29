window.addEventListener("load", function () {
    const body = new ArticleBody("Standard Output in Python", "standard-output");
    body.draw = function () {
        let layout = this.layout;

        // Intro section:
        let section = layout.newSection(); [
            docsElements.p("In Python, the " + docsElements.inlineCode("print()") + " function is used to display output on the screen, and is one of the most basic and essential functions in any programming language"),
            docsElements.p("The " + docsElements.inlineCode("print()") + " function is used to display a string of characters on the screen"),
            docsElements.p("A string is a sequence of characters enclosed in single or double quotes"),
            docsElements.p("For example, the following code will display the string \"Hello, World!\" on the screen:"),
            docsElements.codeBlock([
                "{func(print)}({str(\"Hello World!\")})",
                "{term()}{out(Hello World!)}"
            ]),
            docsElements.break(),
            docsElements.p("You can also use the " + docsElements.inlineCode("print()") + " function to display the value of a variable"),
            docsElements.p("For example, the following code will display the value of the variable " + docsElements.inlineCode("x") + " on the screen:"),
            docsElements.codeBlock([
                "{var(x)} = {num(5)}",
                "{func(print)}({var(x)})"
            ]),
            docsElements.detailsDropdown("Print Function:", [
                docsElements.p("The syntax of the " + docsElements.inlineCode("print()") + " function in Python is as follows: "),
                docsElements.codeBlock([
                    /* 
                    print(
                        *values: any,
                        sep: str,
                        end: str,
                        flush: bool
                    )
                    */
                    "{func(print)}(",
                    "    *{var(values)}: {cls(any)},",
                    "    {var(sep)}: {cls(str)},",
                    "    {var(end)}: {cls(str)},",
                    "    {var(flush)}: {cls(bool)}",
                    ")"
                ], { "showCopy": false }),
                docsElements.unorderedList([
                    docsElements.inlineCode("*values") + ": One or more values to be printed",
                    docsElements.inlineCode("sep") + ": Specifies the separator between values, default is ''",
                    docsElements.inlineCode("end") + ": Specifies the string to be added at the end of the printed values, default is '\\n'",
                    docsElements.inlineCode("flush") + ": If " + docsElements.inlineCode("true") + ", the output buffer will be flushed (emptied) after the " + docsElements.inlineCode("print()") + " call"
                ], "Where"),
                docsElements.break(),
                docsElements.noteText("For further information on the usage of the " + docsElements.inlineCode("print()") + " method, please refer to the " + docsElements.anchorText("Print Reference", "#", "_blank"))
            ])
        ].forEach(elem => { section.appendChild(elem); }); body.appendChild(section);

        // 'Multiple Arguments' section:
        section = layout.newSection("Multiple Arguments"); [
            docsElements.p("You can pass multiple arguments to the " + docsElements.inlineCode("print()") + " function, separated by commas. For example, the following code will display the strings \"Hello\" and \"World\" on separate lines:"),
            docsElements.codeBlock([
                "{func(print)}({str(\"Hello\")}, {str(\"World\")})",
                "{term()}{out(Hello, World)}"
            ]),
            docsElements.p("Or, you can join the two strings with a separator, for example:"),
            docsElements.codeBlock([
                "{func(print)}({str(\"Hello\")} + {str(\")}{esc(\\n)}{str(\")} + {str(\"World\")})",
                "{term()}{out(Hello)}",
                "{term()}{out(World)}"
            ])
        ].forEach(elem => { section.appendChild(elem); }); body.appendChild(section);

        // 'Formatting Output' section:
        section = layout.newSection("Formatting Output"); [
            docsElements.p("You can use the " + docsElements.inlineCode("format()") + " method to insert values into a string"),
            docsElements.p("The " + docsElements.inlineCode("format()") + " method is used to replace placeholders in a string with their corresponding values. The placeholders are represented by curly braces {}. For example, the following code will display the string \"My name is John\" on the screen:"),
            docsElements.codeBlock([
                "{var(name)} = {str(\"John\")}",
                "{func(print)}({str(\"My name is \\{\\}\")}.{func(format)}({var(name)}))"
            ]),
            docsElements.p("You can also use positional arguments to format the output. For example, the following code will display the string \"My name is John and I am 25 years old\" on the screen:"),
            docsElements.codeBlock([
                "{var(name)} = {str(\"John\")}",
                "{var(age)} = {num(25)}",
                "{func(print)}({str(\"My name is \\{\\} and I am \\{\\} years old\")}.{func(format)}({var(name)}, {var(age)}))",
            ]),
            docsElements.p("You can also use f-strings, a feature introduced in python 3.6, to format the output:"),
            docsElements.codeBlock([
                "{var(name)} = {str(\"John\")}",
                "{var(age)} = {num(25)}",
                "{func(print)}({int(f)}{str(\"My name is \\{name\\} and I am \\{age\\} years old\")})"
            ]),
            docsElements.detailsDropdown("Format Function:", [
                docsElements.p("The syntax of the " + docsElements.inlineCode("format()") + " function in Python is as follows: "),
                docsElements.codeBlock([
                    "{func(format)}(",
                    "    *{var(values)}: {cls(str)}",
                    ")"
                ], { "showCopy": false }),
                docsElements.unorderedList([
                    docsElements.inlineCode("*values") + ": One or more values to be formatted and inserted into the string"
                ], "Where"),
                docsElements.break(),
                docsElements.noteText("For further information on the usage of the " + docsElements.inlineCode("format()") + " method, please refer to the " + docsElements.anchorText("Format Reference", "#", "_blank"))
            ])
        ].forEach(elem => { section.appendChild(elem); }); body.appendChild(section);

        // 'New Line & Tabulation' section:
        section = layout.newSection("New Line & Tabulation"); [
            docsElements.p("You can use the special characters " + docsElements.inlineCode("\\n") + " and " + docsElements.inlineCode("\\t") + " to insert new lines and tabulations (tabs) in the output. For example:"),
            docsElements.codeBlock([
                "{func(print)}({str(\"Hello)}{esc(\\n\\t)}{str(World\")})",
                "{term()}{out(Hello)}",
                "{term()}&nbsp;&nbsp;&nbsp;&nbsp;{out(World)}"
            ]),
            docsElements.noteText("You will learn more about Escape Sequences in the " + docsElements.anchorText("String Tutorial", "#", "_self"))
        ].forEach(elem => { section.appendChild(elem); }); body.appendChild(section);

        /* Footer: */
        let footer = docsElements.footer("2syap8l9xk34");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})