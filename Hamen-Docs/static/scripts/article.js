window.addEventListener("load", function() {
    // Convert all "'" to "’":
    Array.from(document.querySelectorAll("p")).forEach(element => {
        element.innerText = element.innerText.replace("'", "’");
        element.innerText = element.innerText.replace(/"/g, "“");
    })
})