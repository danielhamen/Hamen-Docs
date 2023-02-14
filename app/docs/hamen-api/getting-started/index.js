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
            ], ["Windows", "Linux (Ubuntu)", "MacOS"], "Windows")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("../introduction/index.html", "Introduction to the Hamen API", "javascript:void(0);", "");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 12th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})