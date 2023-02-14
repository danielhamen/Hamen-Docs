window.addEventListener("load", function () {
    const body = new ArticleBody("Introduction to the Hamen API", "hamen-api-introduction");
    body.draw = function () {
        let layout = this.layout;

        // Section:
        let section = layout.newSection(); [
            docsElements.p("The Hamen API is a powerful Javascript API designed to provide developers with a wide range of tools and functions to help simplify and streamline their coding processes"),
            docsElements.p("The API offers a range of customization options through the use of sub-modules, allowing developers to tailor their experience to best suit their needs"),
            docsElements.p("The Hamen API was created by Hamen and is continuously being updated & improved!")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // Section:
        section = layout.newSection("Expansion Packs"); [
            docsElements.p("The Hamen API can be extended with expansion packs"),
            docsElements.p("Expansion packs allow for the purchase of specific features to extend the functionality of the API"),
            docsElements.unorderedList([
                docsElements.boldText("Arrays") + ": Over 50+ functions to easily manipulate arrays (eg. " + docsElements.inlineCode("HamenAPI.Arrays.prepend( ... )") + " which appends a value to the beginning of an array)",
                docsElements.boldText("Random") + ": Over 15+ functions in relations to random (eg. " + docsElements.inlineCode("HamenAPI.Random.shuffle( ... )") + " which shuffles an array)",
                docsElements.boldText("Validation") + ": Over 80+ functions to validate specific strings (eg. " + docsElements.inlineCode("HamenAPI.Validation.isEmail( ... )") + " which returns " + docsElements.inlineCode("true") + " if a specific string is an email, otherwise " + docsElements.inlineCode("false") + ")"
            ], "Here are some examples of some expansion packs"),
            docsElements.p("Those are just 3 examples; the Hamen API has many more high-quality expansion packs that are available at " + docsElements.anchorText("The Hamen Store", "#", "_blank"))
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("javascript:void(0);", "None", "../getting-started/index.html", "Getting Started with the Hamen API");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 12th, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})