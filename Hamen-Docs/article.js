window.addEventListener("load", () => {
    const Article = HamenAPI.Docs.Article();
    Article.draw = function() {
        let layout = this.layout;

        let x = layout.newSection("test-1");
        x.appendElements(function() {
            this
        })
    }
})