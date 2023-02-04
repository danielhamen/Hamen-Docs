function setLightMode() {
    let darkMode = document.querySelector("header > .header > .options > .option > .account-options > #dark-mode");
    darkMode.innerHTML = "Dark Mode";

    localStorage.setItem("hamen-docs-dark-mode", "false");

    const colors = {
        "--text-first":                 "hsl(0deg, 9%, 14%)",
        "--text-primary":               "hsl(0deg, 9%, 20%)",
        "--text-default":               "hsl(0, 4%, 37%)",
        "--anchor":                     "#2a6edd",
        "--anchor-hover":               "#3d567d",
        "--anchor-active":              "#7989a3",
        "--background-primary":         "hsl(0deg, 0%, 99%)",
        "--background-default":         "hsl(0deg, 0%, 94%)",
        "--background-secondary":       "hsl(0deg, 0%, 91%)",
        "--docs-hr":                    "rgba(0, 0, 0, 0.08)",
        "--docs-inline-code":           "rgb(242, 51, 51)",
        "--docs-note-background":       "rgb(243, 239, 184)",
        "--docs-note-color":            "hsl(0, 8%, 23%)",
        "--box-shadow-light":           "rgba(0, 0, 0, 0.1)",
        "--box-shadow-mid":             "rgba(0, 0, 0, 0.23)",
        "--box-shadow-dark":            "rgba(0, 0, 0, 0.35)",
        "--border-mid":                 "hsl(0deg, 0%, 70%)",
        "--border-light":               "hsl(0deg, 0%, 85%)",
        "--border-dark":                "hsl(0deg, 0%, 60%)",
        "--tree-width":                 "20em",
        "--header-size":                "4.8em",
        "--mobile-header-size":         "3em",
        "--nav-bar-background":         "hsl(0deg, 0%, 90%)",
        "--nav-bar-items-color":        "#545b68"
    };

    let root = document.querySelector(":root");
    Array.from(Object.keys(colors)).forEach(key => {
        key = key.toLowerCase();
        root.style.setProperty(key, colors[key]);
    })
}

function setDarkMode() {
    let darkMode = document.querySelector("header > .header > .options > .option > .account-options > #dark-mode");
    darkMode.innerHTML = "Light Mode";

    localStorage.setItem("hamen-docs-dark-mode", "true");

    const colors = {
        "--text-first":                 "hsl(0deg, 9%, 100%)",
        "--text-primary":               "hsl(0deg, 9%, 96%)",
        "--text-default":               "hsl(0, 4%, 93%)",
        "--anchor":                     "#88b5ff",
        "--anchor-hover":               "#6588c1",
        "--anchor-active":              "#667da1",
        "--background-primary":         "#3a3c40",
        "--background-default":         "#383a3e",
        "--background-secondary":       "hsl(0deg, 0%, 23%)",
        "--docs-hr":                    "rgba(255, 255, 255, 0.08)",
        "--docs-inline-code":           "rgb(242, 51, 51)",
        "--docs-note-background":       "rgb(243, 239, 184)",
        "--docs-note-color":            "hsl(0, 8%, 23%)",
        "--box-shadow-light":           "rgba(0, 0, 0, 0.1)",
        "--box-shadow-mid":             "rgba(0, 0, 0, 0.23)",
        "--box-shadow-dark":            "rgba(0, 0, 0, 0.35)",
        "--border-light":               "hsl(0deg, 0%, 40%)",
        "--border-mid":                 "hsl(0deg, 0%, 50%)",
        "--border-dark":                "hsl(0deg, 0%, 60%)",
        "--tree-width":                 "20em",
        "--header-size":                "4.8em",
        "--mobile-header-size":         "3em",
        "--nav-bar-background":         "#373b41",
        "--nav-bar-items-color":        "#e3e6f0"
    };

    let root = document.querySelector(":root");
    Array.from(Object.keys(colors)).forEach(key => {
        key = key.toLowerCase();
        root.style.setProperty(key, colors[key]);
    })
}

window.addEventListener("load", () => {
    // Make the header:
    let header = document.querySelector("header");
    let headerHTML = `
<div class="header">
    <!--
        <div class="actions">
            <input type="text" id="header-search" class="text hidden" placeholder="Search a Software, Company, etc">
            <span class="material-symbols-outlined" id="header-search-icon"> search </span>
            <span class="material-symbols-outlined" id="header-account-icon"> person </span>
        </div>
    -->
    <img src="https://www.hamen.tech/images/hamen-docs-icon.png" class="logo" onclick="window.location.assign('https://www.hamen.tech/');">
    <div class="options">
        <div class="option">
            <a href="#" id="nav-bar-docs">Docs</a>
            <a href="#" id="nav-bar-services">Services</a>
            <a href="#" id="nav-bar-account">
                Account
            </a>
            <div class="account-options">
                <a href="javascript:void(0);"> Sign Up </a>
                <a href="javascript:void(0);"> Login </a>
                <a id="dark-mode" href="javascript:void(0);"> Dark Mode </a>
            </div>
            <!-- <a href="#" id="nav-bar-dark-mode"><span class="material-symbols-outlined"> dark_mode </span></a> -->
        </div>
    </div>
</div>
    `;
    
    // Add mobile 'View Tree' if its a tutorial:
    if (header.getAttribute("tutorial")) {
        headerHTML += `<div class="mobile-toggle-tree"><span id="mobile-toggle-tree-label" class="text">View Tree</span></div>`;
    };
    
    // Add header HTML:
    header.innerHTML = headerHTML;

    // Navigation bar 'Dark Mode' Event Listener:
    let darkMode = document.querySelector("header > .header > .options > .option > .account-options > #dark-mode");
    darkMode.addEventListener("click", function() {
        if (this.innerHTML.trim() === "Dark Mode") {
            setDarkMode();
        } else {
            setLightMode();
        }
    })

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
    // document.querySelector("#header-search-icon").addEventListener("click", function () {
    //     let input = document.querySelector("#header-search");
    //     if (this.innerHTML.trim() === "search") {
    //         this.innerHTML = "close";
    //         input.classList.remove("hidden");
    //         input.focus();
    //         input.select();
    //     } else {
    //         this.innerHTML = "search";
    //         input.classList.add("hidden");
    //     }
    // })

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
        if (!heading.classList.contains("no-link")) {
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
        }
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

    // Set Dark Mode / Light Mode:
    let isDarkMode = localStorage.getItem("hamen-docs-dark-mode");
    isDarkMode = isDarkMode === "true" ? true : false;
    if (isDarkMode) {
        setDarkMode();
    } else {
        setLightMode();
    }
})