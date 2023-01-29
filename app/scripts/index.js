window.addEventListener("load", () => {
    // Make the header:
    let header = document.querySelector("header");
    let headerHTML = `<div class="header"><!-- <img src="${header.getAttribute("step")}images/hamen-docs-logo.png" class="logo"><img src="${header.getAttribute("step")}images/hamen-docs-icon.png" class="logo media"> --><div class="actions"><input type="text" id="header-search" class="text hidden" placeholder="Search a Software, Company, etc"><span class="material-symbols-outlined" id="header-search-icon"> search </span><span class="material-symbols-outlined" id="header-account-icon"> person </span></div></div>`;
    if (header.getAttribute("tutorial")) {
        headerHTML += `<div class="mobile-toggle-tree"><span id="mobile-toggle-tree-label" class="text">View Tree</span></div>`;
    }
    header.innerHTML = headerHTML;

    // 
    try {
        document.querySelector("#docs-tree-exit-icon").addEventListener("click", function () {
            document.querySelector(".docs-tree").style.display = "none";
            document.querySelector(".docs-tree-content").style.display = "none";
            document.querySelector("body").style.overflow = "scroll";
            document.querySelector(".mobile-toggle-tree").style.display = "flex";
            document.querySelector("main").style.top = "calc(var(--header-size) + var(--mobile-header-size))";
            document.querySelector("body").style.overflow = "scroll";
        })
    } catch (error) {}

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

    // Hide/show tree item when the user clicks its header:
    Array.from(document.querySelectorAll(".title.toggle")).forEach(chev => {
        let chev_ = chev.getElementsByClassName("chevron")[0];
        chev.addEventListener("click", function (e) {
            chev_.classList.toggle("rot");
            let options = chev.parentElement.getElementsByClassName("option");
            Array.from(options).forEach(option => {
                option.classList.toggle("display-none");
            })

            if (e.shiftKey) {
                let add = options[0].classList.contains("display-none");
                Array.from(document.querySelectorAll(".docs-tcs")).forEach(tcs => {
                    if (add) {
                        tcs.getElementsByClassName("title")[0].getElementsByClassName("chevron")[0].classList.add("rot");
                    } else {
                        tcs.getElementsByClassName("title")[0].getElementsByClassName("chevron")[0].classList.remove("rot");
                    }

                    if (add) {
                        Array.from(tcs.getElementsByClassName("option")).forEach(option => { option.classList.add("display-none"); })
                    } else {
                        Array.from(tcs.getElementsByClassName("option")).forEach(option => { option.classList.remove("display-none"); })
                    }
                })
            }
        })
    })

    // Add 'Copy Hyperlink' icon to all headings:
    let headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    let i = 0;
    headings.forEach(heading => {
        let id = "UEID-" + i.toString();

        let linkSpan = document.createElement("span");
        linkSpan.id = id;
        linkSpan.classList.add("material-symbols-outlined");
        linkSpan.classList.add("link-section");
        linkSpan.innerHTML = "link";
        linkSpan.addEventListener("click", function () {
            HamenAPI.logMessage("Heading link copied to clipboard!");
            let URL = window.location.pathname + "#" + id;
            window.location.replace(URL);
            navigator.clipboard.writeText(URL);
        })

        heading.appendChild(linkSpan);
    })

    // 
    try {
        document.querySelector(".mobile-toggle-tree").addEventListener("click", function () {
            document.querySelector(".docs-tree").style.display = "block";
            document.querySelector(".docs-tree-content").style.display = "block";
            document.querySelector(".mobile-toggle-tree").style.display = "none";
            document.querySelector("main").style.top = "var(--header-size)";
            document.querySelector("body").style.overflow = "hidden";
        })
    } catch (error) {}
})