window.addEventListener("load", function () {
    const body = new ArticleBody("Introduction to Literary Terms", "introduction-to-literary-terms");
    body.draw = function () {
        let layout = this.layout;

        // Introduction Section
        let section = layout.newSection(); [
            docsElements.p("Literary Terms refer to the various techniques and terms used by writers to create meaning and evoke emotions in their works of literature"),
            docsElements.p("These terms have been developed over centuries of literary criticism and analysis, and they provide a shared language for literary scholars and enthusiasts to discuss and analyze literary works"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'History of Literary Terms' Section
        section = layout.newSection("History of Literary Terms"); [
            docsElements.p("Literary terms have a long history, dating back to ancient Greece and Rome, where literary works were first subjected to systematic criticism and analysis"),
            docsElements.p("During the Middle Ages, literary terms were developed further in the context of religious and didactic works, and they continued to evolve during the Renaissance and the Enlightenment"),
            docsElements.p("The advent of Romanticism in the late 18th and early 19th centuries saw a new focus on individualism and emotion in literature, and this period saw the development of new literary terms to describe these themes and styles"),
            docsElements.p("Since then, literary terms have continued to evolve and adapt to changing literary trends and styles"),
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Types of Literary Terms' Section
        section = layout.newSection("Types of Literary Terms"); [
            docsElements.unorderedList([
                docsElements.boldText("Literary Devices") + ": These are techniques used by writers to create meaning and evoke emotions in their works. Examples include metaphor, simile, and personification",
                docsElements.boldText("Literary Elements") + ": These are the building blocks of literature, such as plot, character, setting, and theme",
                docsElements.boldText("Literary Movements") + ": These refer to the historical and cultural context in which literary works were produced, and they often have distinct styles, themes, and techniques. Examples include Romanticism, Modernism, and Postmodernism",
                docsElements.boldText("Literary Theory") + ": This refers to the systematic study and analysis of literature, and it encompasses a wide range of approaches, including structuralism, psychoanalysis, and feminist criticism"
            ], "Literary terms can be divided into several broad categories"),
            docsElements.unorderedList([
                docsElements.boldText("Metaphor") + ": A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable, in order to suggest a resemblance, eg. \"life is a journey\"",
                docsElements.boldText("Simile") + ": A figure of speech in which two unlike things are compared, using \"like\" or \"as\", eg. \"her eyes sparkled like diamonds\"",
                docsElements.boldText("Personification") + ": A figure of speech in which non-human objects, animals, or ideas are given human qualities or abilities, eg. \"the wind whispered through the trees\"",
                docsElements.boldText("Plot") + ": The sequence of events in a literary work, including the rising action, climax, and resolution",
                docsElements.boldText("Character") + ": The people or creatures who populate a literary work, and who drive the plot and reveal the themes",
                docsElements.boldText("Setting") + ": The time and place in which a literary work is set, and which contributes to the atmosphere and tone",
                docsElements.boldText("Theme") + ": The underlying message or meaning of a literary work, which is often revealed through the characters, plot, and setting"
            ], "Though we'll cover each of these categories later in the course, here are a few examples of common literary terms that you may have heard of")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        /* Course Navigator: */
        let courseNavigator = docsElements.courseNavigator("javascript:void(0);", "None", "../getting-started/index.html", "Getting Started");
        body.setCourseNavigator(courseNavigator);

        /* Footer: */
        let footer = docsElements.footer("February 3rd, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})