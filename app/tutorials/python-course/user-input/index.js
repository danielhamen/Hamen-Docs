window.addEventListener("load", function () {
    const body = new ArticleBody("User Input in Python", "standard-output");
    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In programming, user input refers to data that a user enters into a program"),
            docsElements.p("This data can then be processed and used by the program to perform various tasks")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Input() Function' Section:
        section = layout.newSection("The " + docsElements.inlineCode("input()") + " Function:"); [
            docsElements.p("In Python, the " + docsElements.inlineCode("input()") + " function is used to take user input"),
            docsElements.p("The function waits for the user to enter some data and then stores it in a string. Here's an example:"),
            docsElements.codeBlock([
                "{var(name)} = {func(input)}({str(\"What is your name? \")})",
                "{func(print)}({str(\"Hello, \")} + {var(name)} + {str(\"!\")})"
            ]),
            docsElements.p("In this example, the " + docsElements.inlineCode("input()") + " function takes a string as an argument. The string is used as a prompt, which is displayed to the user. The user is then asked to enter some data, which is stored in the name variable. Finally, the data is printed to the screen with a friendly greeting"),
            docsElements.noteText("This tutorial employs various concepts such as Variables, Data Types, Type Casting, and Exception Handling. However, if you are unsure or unfamiliar with these concepts, don't worry! They will be thoroughly covered later-on in the course")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Converting User Input' Section:
        section = layout.newSection("Converting User Input:"); [
            docsElements.p("By default, the data entered by the user is stored as a string"),
            docsElements.p("This means that if you want to use the data in a calculation, you'll need to convert it to a different data type, such as an integer or a floating point number"),
            docsElements.p("Here's an example of how to convert user input to an integer:"),
            docsElements.codeBlock([
                "{var(age)} = {cls(int)}({func(input)}({str(\"How old are you? \")}))",
                "{func(print)}({str(\"You are \")} + {var(age)} + {str(\" years old!\")})"
            ]),
            docsElements.p("In this example, the " + docsElements.inlineCode("int()") + " function is used to convert the user's input to an integer. This allows us to perform mathematical operations with the data")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Error Handling' Section:
        section = layout.newSection("Error Handling:"); [
            docsElements.p("When working with user input, it's important to handle errors that might occur. For example, if a user enters a string when the program expects a number, an error will occur"),
            docsElements.p("Here's an example of how to handle errors when converting user input to an integer:"),
            docsElements.codeBlock([
                "{int(try)}:",
                "    {var(age)} = {cls(int)}({func(input)}({str(\"How old are you? \")}))",
                "    {func(print)}({str(\"You are \")} + {cls(str)}({var(age)}) + {str(\" years old\")})",
                "{int(except)} {cls(ValueError)}:",
                "    {func(print)}({str(\"Invalid input. Please enter a number!\")})"
            ]),
            docsElements.p("In this example, the " + docsElements.inlineCode("try") + " and " + docsElements.inlineCode("except") + " statements are used to handle errors. The code in the " + docsElements.inlineCode("try") + " block is executed. If an error occurs, the code in the " + docsElements.inlineCode("except") + " block is executed. In this case, if the user enters an invalid input, an error message is displayed.")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../standard-output/index.html", "Standard Output", "../comments/index.html", "Comments");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("January 29th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})