window.addEventListener("load", function () {
    const body = new ArticleBody("Getting Started with the Hamen API", "hamen-api-getting-started");
    body.draw = function () {
        let layout = this.layout;

        // Section:
        let section = layout.newSection(); [
            docsElements.p("Getting started with the Hamen API is very easy!"),
            docsElements.p("This tutorial will not help you with the syntax and functionality of the API"),
            docsElements.p("Instead, it will help you understand, and implement the API into your project, testing and debugging")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Acquiring the API"); [
            docsElements.p("If you haven't purchased the API yet, you can do so at " + docsElements.anchorText("The Hamen Store", "https://www.hamen.tech/store", "_blank")),
            docsElements.p("You can try out the API before purchasing it by using the free  " + docsElements.anchorText("Hamen API: Arrays", "#", "_blank") + " expansion pack"),
            docsElements.directoryTree({
                "HamenAPI.zip": {
                    "README.md": 0,
                    "HamenAPI.js": 0,
                    "HamenAPI_Arrays.js": 0
                }
            }, null, "Once you download the API, you should have the following files"),
            docsElements.noteText("The exact file tree may vary depending on which API and version you purchased, but you should always have " + docsElements.inlineCode("README.md") + ", " + docsElements.inlineCode("HamenAPI.js") + ", and the purchase-specific API file ( " + docsElements.inlineCode("HamenAPI_&lt;API&gt;.js") + " )")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Setting up the API"); [
            docsElements.p("Once you have the API downloaded as " + docsElements.inlineCode("HamenAPI.zip") + ", you can extract the file using the steps below:"),
            docsElements.tabbedInterface([
                docsElements.tab([
                    docsElements.unorderedList([
                        docsElements.listItem("In File Explorer, right-click " + docsElements.inlineCode("HamenAPI.zip"), "number"),
                        docsElements.listItem("Click \"Extract All\" from the context menu", "number"),
                        docsElements.listItem("In the \"Extract Compressed (Zipped) Folders\" window, choose the destination folder where you want to extract the files", "number"),
                        docsElements.listItem("Click \"Extract\"", "number"),
                        docsElements.listItem("The files will now be extracted to the destination folder", "number")
                    ], "To extract the archived API on Windows, you can follow these steps")
                ], "Windows"),
                docsElements.tab([
                    docsElements.unorderedList([
                        docsElements.listItem("Double-click " + docsElements.inlineCode("HamenAPI.zip"), "number"),
                        docsElements.listItem("The file will be automatically extracted to a new folder with the same name as the ZIP file", "number")
                    ], "To extract the archived API on MacOS, you can follow these steps")
                ], "MacOS"),
                docsElements.tab([
                    docsElements.unorderedList([
                        docsElements.listItem("In File Explorer, right-click " + docsElements.inlineCode("HamenAPI.zip"), "number"),
                        docsElements.listItem("Click \"Extract Here\" from the context menu", "number"),
                        docsElements.listItem("The files will now be extracted to the current directory.", "number")
                    ], "To extract the archived API on Windows, you can follow these steps"),
                    docsElements.noteText("The specific steps for extracting ZIP files on different distributions of Linux may vary")
                ], "Linux (Ubuntu)")
            ], ["Windows", "Linux (Ubuntu)", "MacOS"], "Windows"),
            docsElements.p("Now that you have the API archive extracted, you can add it to your project"),
            docsElements.directoryTree({
                "index.html": 0,
                "js": {
                    "script.js": 0
                }
            }, "project/", "As an example, consider the following project directory"),
            docsElements.p("This file tree contains an " + docsElements.inlineCode("index.html") + " file and a " + docsElements.inlineCode("./js") + " directory that contains a " + docsElements.inlineCode("script.js") + " file. If you want to use the HamenAPI in your project, you need to copy the extracted API files to the same directory as " + docsElements.inlineCode("index.html") + " and " + docsElements.inlineCode("script.js") + ""),

            docsElements.p("To do this, go to the directory where you extracted the " + docsElements.inlineCode("HamenAPI.zip") +" archive, and find the " + docsElements.inlineCode("./HamenAPI") +" folder to the " + docsElements.inlineCode("./project") +" directory"),
            docsElements.directoryTree({
                "index.html": 0,
                "js": {
                    "script.js": 0
                },
                "HamenAPI": {
                    "README.md": 0,
                    "HamenAPI.js": 0,
                    "HamenAPI_Arrays.js": 0,
                }
            }, "project/", "Once you have moved the " + docsElements.inlineCode("./HamenAPI") + " folder to the " + docsElements.inlineCode("./project") + " directory, your file tree should look like this"),
            docsElements.noteText("You can delete " + docsElements.inlineCode("README.md") + " from your project file if you want"),
            docsElements.p("Now that you have added the HamenAPI to your project directory, you need to import it into your HTML and JavaScript files"),
            docsElements.p("To import the API into your HTML file, add the following code to the " + docsElements.inlineCode("&lt;head&gt;") + " section of your " + docsElements.inlineCode("index.html") + " file"),
            docsElements.codeBlock([
                "{comment(&lt;!-- Inside HTML File ... --&gt;)}",
                "&lt;{html-tag(script)} {html-attr(type)}={str(\"text/javascript\")} {html-attr(src)}={str(\"HamenAPI/HamenAPI.js\")}&gt;&lt;/{html-tag(script)}&gt;",
                "&lt;{html-tag(script)} {html-attr(type)}={str(\"text/javascript\")} {html-attr(src)}={str(\"HamenAPI/HamenAPI_Arrays.js\")}&gt;&lt;/{html-tag(script)}&gt;"
            ]),
            docsElements.p("Note that you should modify the " + docsElements.inlineCode("src") + " attribute of the " + docsElements.inlineCode("&lt;script&gt;") + " tags to match the relative path to your " + docsElements.inlineCode("HamenAPI") + " directory"),
            docsElements.p("If you have additional API files that you want to import, include them using additional " + docsElements.inlineCode("&lt;script&gt;") + " tags"),
            docsElements.p("Once you have imported the HamenAPI into your HTML file, you can use it in your JavaScript code"),
            docsElements.codeBlock([
                "{comment(// Inside `script.js` ...)}",
                "{var(myArray)} = [{num(1)}, {num(2)}, {num(3)}]",
                "{var(myArray)} = {lib(HamenAPI)}.{cls(Arrays)}.{func(reversed)}( {var(myArray)} )",
                "{cls(console)}.{func(log)}( {var(myArray)} )",
                "{term()}{out([3, 2, 1])}"
            ], "For example, to use the " + docsElements.inlineCode("reversed") + " function in the " + docsElements.inlineCode("HamenAPI_Arrays.js") + " file, you can add the following code to your " + docsElements.inlineCode("script.js") + " file")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // VSCode 'Hamen API' extension - Eg. "You'll notice that there is no auto-correct when using the HamenAPI, ou can use the HamenAPI VSCode Extension"

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../introduction/index.html", "Introduction to the Hamen API", "javascript:void(0);", "");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 12th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})