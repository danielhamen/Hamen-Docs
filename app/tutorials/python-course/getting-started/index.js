window.addEventListener("load", function () {
    const body = new ArticleBody("Getting Started With Python", "introduction-to-python");
    body.draw = function () {
        let layout = this.layout;

        // 

        /* Footer: */
        let footer = docsElements.footer("2syap8l9xk34");
        body.setFooter(footer);
    }; body.draw();

    document.querySelector(".docs-content").innerHTML = body.outerHTML();
})