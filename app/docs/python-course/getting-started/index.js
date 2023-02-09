window.addEventListener("load", function () {
    const body = new ArticleBody("Getting Started With Python", "introduction-to-python");
    body.draw = function () {
        let layout = this.layout;

        body.appendChild(layout.newSection("TODO"))

        /* Footer: */
        let footer = docsElements.footer("February 3rd, 2023");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})