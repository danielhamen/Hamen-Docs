window.addEventListener("load", function () {
    const body = new ArticleBody("Introduction to Python", "introduction-to-python");
    body.draw = function () {
        let layout = this.layout;

        // 'What is Python?':
        let section = layout.newSection("What is Python?"); [
            docsElements.p("Python is a popular High-Level programming language"),
            docsElements.p("Python was created by Guido van Rossum in 1991, and was written in C"),
            docsElements.p("Python is used by many programmers around the world")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Why Should you Learn Python?':
        section = layout.newSection("Why Should you Learn Python?"); [
            docsElements.p("Python is amongst the World's most popular programming language (alongside Javascript)"),
            docsElements.p("Python's Syntax is extremely simple compared to other languages"),
            docsElements.p("There are many different uses of Python"),
            docsElements.p("Python is an interpreted language making it easy for prototyping, but slower compared to other languages")
        ].forEach(elem => {
            section.appendChild(elem);
        }); body.appendChild(section);

        // 'Why Should you Learn Python?':
        section = layout.newSection("Python Uses and Users:"); [
            docsElements.p("Python is used all around the world by anyone ranging from hobbyists, to massive companies"),
            docsElements.unorderedList([
                "Google",
                "Facebook",
                "Tesla",
                "NASA (technically a Government Agency)",
                "Netflix"
            ], "Some popular companies that use Python are"),
            docsElements.unorderedList([
                "Data Analysis",
                "Machine Learning",
                "Web Development",
                "Automation",
                "Mathematics",
                "Software Development"
            ], "Common tech-related fields that use Python are", { "boldTitle": false }),
            docsElements.unorderedList([
                "Create GUIs (with Tkinter, or PyQT)",
                "Develop Games (with PyGame)",
                "Create Graphs (with Matplotlib)",
                "Machine Learning (with PyTorch, or TensorFlow)",
                "Python has thousands of libraries, which is one of reasons Python is one of the most widely used languages"
            ], "Additionally, with the use of external libraries, you can extend Python to do things like", { "boldTitle": false }),
            docsElements.p("Python has thousands of libraries, which is one of reasons Python is one of the most widely used languages")
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