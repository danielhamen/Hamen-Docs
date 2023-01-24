function makeBody() {
    const body = `#Quickstart

This API is generally stable but some areas are still being extended and improved.

LIST:
TITLE:Blender Python API features::TITLE
Edit any data the user interface can (Scenes, Meshes, Particles etc.).
Modify user preferences, keymaps and themes.
Run tools with own settings.
Create user interface elements such as menus, headers and panels.
Create new tools.
Create interactive tools.
Create new rendering engines that integrate with Blender.
Subscribe to changes to data and it's properties.
Define new settings in existing Blender data.
LIST:
Other items are:
\`scripts/startup/bl_ui for the user interface.\`
\`scripts / startup / bl_operators for operators.\`
:LIST
Draw in the 3D Viewport using Python.
:LIST

CODE:
LANG:PYTHON

bpy.data.objects
>>> <bpy_collection[3], BlendDataObjects>

:CODE

HR::HR`;

    let HTML = document.createElement("div");

    for (let i = 0; i < body.split("\n").length; i++) {
        const line = body.split("\n")[i].trim();

        // Match headings:
        let headingMatch = line.match(/(^#{1,6})\s*(.*)/);
        if (headingMatch) {
            // Get the heading type (eg. H1, H2, ...):
            let headingType = headingMatch[1].length;
            let headingText = headingMatch[2];

            console.log(`<h${headingType}>${headingText}</h${headingType}>`);
        }
    }
}

window.addEventListener("load", () => {
    // Make the body:
    makeBody();

    // Make the header:
    document.querySelector("header").innerHTML = `<div class="header"><div class="logo"></div><div class="actions"><input type="text" id="header-search" class="text hidden" placeholder="Search a Software, Company, etc"><span class="material-symbols-outlined" id="header-search-icon"> search </span><span class="material-symbols-outlined" id="header-account-icon"> person </span></div></div><div class="mobile-toggle-tree"><span id="mobile-toggle-tree-label" class="text">View Tree</span></div>`;

    // Make footer:
    let footer = document.querySelector("docs-footer");
    footer.innerHTML = `<docs-hr></docs-hr><p>© Copyright Hamen Docs</p><p>Latest Revision ID: <a href="#">${footer.getAttribute('id')}</a></p><docs-hr></docs-hr>`

    // 
    document.querySelector("#docs-tree-exit-icon").addEventListener("click", function () {
        document.querySelector(".docs-tree").style.display = "none";
        document.querySelector(".docs-tree-content").style.display = "none";
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

    // Hide/show tree item when the user clicks its header:
    Array.from(document.querySelectorAll(".title.toggle")).forEach(chev => {
        let chev_ = chev.getElementsByClassName("chevron")[0];
        chev.addEventListener("click", function (e) {
            chev_.classList.toggle("rot");
            let options = chev.parentElement.getElementsByClassName("option");
            for (let i = 0; i < options.length; i++) {
                options[i].classList.toggle("display-none");
            }

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

    // 
    document.querySelector(".mobile-toggle-tree").addEventListener("click", function() {
        document.querySelector(".docs-tree").style.display = "block";
        document.querySelector(".docs-tree-content").style.display = "block";
        document.querySelector(".mobile-toggle-tree").style.display = "none";
        document.querySelector("main").style.top = "var(--header-size)";
        document.querySelector("body").style.overflow = "hidden";
    })
})