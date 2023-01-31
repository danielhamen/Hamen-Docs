window.addEventListener("load", function () {
    const body = new ArticleBody("Comments in Python", "comments");

    body.draw = function () {
        let layout = this.layout;

        // Introduction Section:
        let section = layout.newSection(); [
            docsElements.p("In computer programming, a comment is a human-readable explanation or annotation in the source code of a computer program"),
            docsElements.p("In Python, comments start with the " + docsElements.inlineCode("#") + " symbol and extend to the end of the line. Comments are completely ignored by the Python interpreter"),
            docsElements.p("If you're interested on why " + docsElements.inlineCode("#") + " is used to comment in Python since most other languages use: " + docsElements.inlineCode("//") + " (or a close variation) we recommend reading our, " + docsElements.anchorText("What's the reasoning behind Python's '#' commenting?") + " Hamen Article!")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Why use comments in Python?' Section:
        section = layout.newSection("Why use Comments in Python?"); [
            docsElements.p("Comments are an essential part of writing good and maintainable code"),
            docsElements.unorderedList([
                docsElements.inlineText("Provide documentation", { "style": "font-weight: bold;" }) + ": Comments help explain what the code does, making it easier for others (or yourself) to understand",
                docsElements.inlineText("Debugging", { "style": "font-weight: bold;" }) + ": Comments can be used to temporarily disable certain parts of the code while debugging",
                docsElements.inlineText("Organization", { "style": "font-weight: bold;" }) + ": Comments can help you structure and organize your code, making it easier to navigate"
            ], "Comments serve several purposes")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'How to use comments in Python' Section:
        section = layout.newSection("How to use Comments in Python:"); [
            docsElements.p("Using comments in Python is pretty straightforward!"),
            docsElements.p("To add a comment, start a line with the " + docsElements.inlineCode("#") + " symbol, followed by your comment text"),
            docsElements.p("Here's an example:"),
            docsElements.codeBlock(["{comment(# This is a comment in Python)}"], null, { "showCopy": true }),
            docsElements.p("You can also add comments after the code on a line, like this:"),
            docsElements.codeBlock([
                "{var(x)} = {num(10)} {comment(# This is a comment about the value assigned to x)}"
            ])
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Multi-line comments in Python' Section:
        section = layout.newSection("Multi-line Comments in Python:"); [
            docsElements.p("In Python, there is no direct way to write multi-line comments, but you can achieve a similar effect by using a string literal"),
            docsElements.p("Here's an example:"),
            docsElements.codeBlock([
                "{str(\"\"\")}",
                "{str(This is a multi-line)}",
                "{str(comment in Python)}",
                "{str(\"\"\")}",
            ]),
            docsElements.noteText("The usage of string literals ( " + docsElements.inlineCode("\"\"\"") + " ) as comments in Python are not strictly considered as comments, but they serve as the same purpose. This is due to the fact that string literals that are not assigned to any variable are ignored by the Python interpreter")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Additional Notes on Python Comments' Section:
        section = layout.newSection("Additional Notes on Python Comments:"); [
            docsElements.unorderedList([
                docsElements.inlineText("Backticks", { "style": "font-weight: bold;" }) + ": Some developers use backticks ( " + docsElements.inlineCode("`") + " ) to comment on specific items such as variables, functions, etc. This style of commenting is not part of the official Python syntax, but it is widely used by some developers for added clarity",
                docsElements.inlineText("Balancing Commenting", { "style": "font-weight: bold;" }) + ": Comments are important for code documentation and organization, but over-commenting can be harmful to code readability. It's important to find a balance between adding enough comments to help others understand your code and not adding so many comments that the code becomes cluttered and difficult to read",
                docsElements.inlineText("PEP8 and Comments", { "style": "font-weight: bold;" }) + ": PEP8 is the style guide for Python code, and it covers several aspects of commenting. For example, PEP8 recommends that you limit the length of comments to 72 characters, insert a space after the " + docsElements.inlineCode("#") + " symbol in comments, and avoid placing comments on the same line as code.",
            ], "Here are a few more things to note about commenting in Python"),
            docsElements.p("Comments are a critical part of writing clean, readable, and well-documented code, but it's important to strike a balance between adding enough comments to help others understand your code and not over-commenting to the point that the code becomes difficult to read"),
            docsElements.noteText("For more information regarding PEP8 specifications, refer to our " + docsElements.anchorText("PEP-8 Style-Guide Course", "#", "_blank"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../user-input/index.html", "User Input", "#", "Python: Variables");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("January 30th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})