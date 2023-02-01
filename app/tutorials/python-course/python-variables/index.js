window.addEventListener("load", function () {
    const body = new ArticleBody("Variables in Python", "python-variables");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In programming, variables are used for storing certain information and data"),
            docsElements.p("Variables are essential in writing meaningful and complex programs"),
            docsElements.p("There are different types that variables can be stored in such as integers, floats, string, booleans, etc"),
            docsElements.p("Creating variables in Python is very easy compared to most other languages"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Declaring Variables' section:
        section = layout.newSection("Declaring Variables"); [
            docsElements.p("To declare / define a variable in Python, simply state the variable name, followed by its value"),
            docsElements.p("The syntax for declaring a variable is:"),
            docsElements.codeBlock([
                "{var(variable_name)} = {str(value)}"
            ]),
            docsElements.p("For example:"),
            docsElements.codeBlock([
                "{comment(# Define variables)}",
                "{var(name)} = {str(\"Jacob\")}",
                "{var(age)} = {num(32)}",
                "",
                "{comment(# Print the variables:)}",
                "{func(print)}({var(name)}, {var(age)})",
                "{term()}{out(Jacob, 32)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Variable Naming Conventions' section:
        section = layout.newSection("Variable Naming Conventions"); [
            docsElements.p("Giving variables an appropriate name can help with the readability of your code"),
            docsElements.p("Additionally, it is important to follow the proper variable style-guidelines stated in " + docsElements.anchorText("PEP-8", "#", "_blank")),
            docsElements.unorderedList([
                docsElements.boldText("Characters") + ": Variable names should only contain alphanumerical characters (A-z, 0-9, and \"_\")",
                docsElements.boldText("Prefix") + ": Variable names should only start with a letter, or underscore",
                docsElements.boldText("Case") + ": Variable names should be in Snake Case"
            ], "Rules for variable names"),
            docsElements.detailsDropdown("Different Types of Variable Cases", [
                docsElements.p(docsElements.boldText("Reference the table below for the different types of variable naming cases") + ":"),
                docsElements.table([
                    [
                        docsElements.tableHeader("Case:"),
                        docsElements.tableHeader("Example:", "60")
                    ], [
                        docsElements.tableCell("Snake Case", "CENTER"),
                        docsElements.tableCell(docsElements.inlineCode("favorite_car_brand = \"Ford\""), "CENTER")
                    ], [
                        docsElements.tableCell("Kebab Case", "CENTER"),
                        docsElements.tableCell(docsElements.inlineCode("ice-cream-flavor = \"Chocolate\""), "CENTER")
                    ], [
                        docsElements.tableCell("Camel Case", "CENTER"),
                        docsElements.tableCell(docsElements.inlineCode("isPlayerAlive = true"), "CENTER")
                    ], [
                        docsElements.tableCell("Pascal Case", "CENTER"),
                        docsElements.tableCell(docsElements.inlineCode("ProductQuantity = 1400"), "CENTER")
                    ]
                ])
            ], false)
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Updating Variables' section:
        section = layout.newSection("Declaring Variables"); [
            docsElements.p("To declare / define a variable in Python, simply state the variable name, followed by its value"),
            docsElements.p("The syntax for declaring a variable is:"),
            docsElements.codeBlock([
                "{var(variable_name)} = {str(value)}"
            ]),
            docsElements.p("For example:"),
            docsElements.codeBlock([
                "{comment(# Define variables)}",
                "{var(name)} = {str(\"Jacob\")}",
                "{var(age)} = {num(32)}",
                "",
                "{comment(# Print the variables:)}",
                "{func(print)}({var(name)}, {var(age)})",
                "{term()}{out(Jacob, 32)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Updating Variables' section:
        section = layout.newSection("Updating Variables"); [
            docsElements.p("To change the value of a variable, you can use an Assignment Operator"),
            docsElements.p("You will learn more about different types of operators in the " + docsElements.anchorText("Operators Tutorial", "#", "_blank") + " but for now, all you need to know is that you can use the " + docsElements.inlineCode("=") + " operator to change the value of a variable"),
            docsElements.p("Here's an example on how you can change a variable value:"),
            docsElements.codeBlock([
                "{comment(# Create initial variable:)}",
                "{var(name)} = {str(\"John Doe\")}",
                "",
                "{comment(# Change the name:)}",
                "{var(name)} = {str(\"Jane Doe\")}"
            ]),
            docsElements.p("Additionally, you can use the Arithmetic Operators to change the value of a variable:"),
            docsElements.codeBlock([
                "{comment(# Create variables:)}",
                "{var(x)} = {num(11)}",
                "{var(x)} = {var(x)} + {num(6.5)}",
                "",
                "{comment(# Print out the value of `x`:)}",
                "{func(print)}({str(\"11 + 6.5 = \")} + {var(x)})",
                "{term()}{out(11 + 6.5 = 17.5)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Define Multiple Variables' section:
        section = layout.newSection("Define Multiple Variables"); [
            docsElements.p("If you need to define multiple variables, this can actually be done in one line:"),
            docsElements.codeBlock([
                "{var(x)}, {var(y)}, {var(z)} = {num(1)}, {num(2)}, {num(3)}",
                "",
                "{func(print)}({var(x)})",
                "{func(print)}({var(y)})",
                "{func(print)}({var(z)})",
                "",
                "{term()}{out(1)}",
                "{term()}{out(2)}",
                "{term()}{out(3)}",
            ]),
            docsElements.p("You can also assign one value to multiple variables:"),
            docsElements.codeBlock([
                "{var(x)} = {var(y)} = {var(z)} = {num(1)}",
                "",
                "{func(print)}({var(x)})",
                "{func(print)}({var(y)})",
                "{func(print)}({var(z)})",
                "",
                "{term()}{out(1)}",
                "{term()}{out(1)}",
                "{term()}{out(1)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../comments/index.html", "Comments", "../python-data-types/index.html", "Python: Data Types");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("January 30th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})