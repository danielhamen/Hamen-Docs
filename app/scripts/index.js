window.addEventListener("load", () => {
    // 
    document.querySelector("#docu-tree-exit-icon").addEventListener("click", function () {
        document.querySelector(".docu-tree").style.display = "none";
        document.querySelector(".docu-tree-content").style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
        document.querySelector(".mobile-toggle-tree").style.display = "flex";
        document.querySelector("main").style.top = "calc(var(--header-size) + var(--mobile-header-size))";
        document.querySelector("body").style.overflow = "scroll";
    })

    // Show 'header search input' when the user clicks the 'search' icon:
    document.querySelector("#header-search-icon").addEventListener("click", function () {
        let input = document.querySelector("#header-search");
        if (this.innerHTML.trim() === "search") {
            this.innerHTML = "close";
            input.classList.remove("hidden");
            input.focus();
            input.select();
        } else {
            this.innerHTML = "search";
            input.classList.add("hidden");
        }
    })

    // Add the 'link section' icons:
    Array.from(document.querySelectorAll(".add-section-link")).forEach(link => {
        link.innerHTML += `<span class="material-symbols-outlined link-section"> link </span>`;
    });

    // 
    Array.from(document.querySelectorAll(".title.toggle")).forEach(chev => {
        let chev_ = chev.getElementsByClassName("chevron")[0];
        chev.addEventListener("click", function () {
            chev_.classList.toggle("rot");
            let options = chev.parentElement.getElementsByClassName("option");
            for (let i = 0; i < options.length; i++) {
                options[i].classList.toggle("display-none");
            }
        })
    })

    // 
    document.querySelector(".mobile-toggle-tree").addEventListener("click", function() {
        document.querySelector(".docu-tree").style.display = "block";
        document.querySelector(".docu-tree-content").style.display = "block";
        document.querySelector(".mobile-toggle-tree").style.display = "none";
        document.querySelector("main").style.top = "var(--header-size)";
        document.querySelector("body").style.overflow = "hidden";
    })
})