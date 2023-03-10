/**
 * Checks whether a an element is visible
*/
function isVisible(element) {
    var rect = element.getBoundingClientRect();

    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * Makes all elements with `class="fade-in"` actually fade in
 * 
 * Note: For this to work, call `fadeElements()` inside a `load` event listener
 */
function toggleFadeElements() {
    Array.from(document.querySelectorAll(".fade-in")).forEach(elem => {
        if (isVisible(elem) || elem.classList.contains("default")) {
            elem.classList.add("visible");
            if (elem.getAttribute("delay")) {
                elem.style.animationDelay = elem.getAttribute("delay");
            }
        } else {
            elem.classList.remove("visible");
        }
    })
}

/**
 * Creates event listeners for `toggleFadeElements()` to be called upon
 */
function fadeElements() {
    // Add the <style> tag to make the `.fade-in` work:
    let style = document.createElement('style');
    let css = `@keyframes fadeInAnimation { from { opacity: 0%; } to { opacity: 100%; } } .fade-in { opacity: 0%; } .fade-in.visible { animation: fadeInAnimation 0.9s forwards; }`;
    let cssNode = document.createTextNode(css);
    style.appendChild(cssNode);
    document.head.appendChild(style);

    document.addEventListener("scroll", () => { toggleFadeElements(); });
    document.addEventListener("resize", () => { toggleFadeElements(); });
    document.addEventListener("DOMContentLoaded", () => { toggleFadeElements(); });
    toggleFadeElements();
}

window.addEventListener("load", function() {
    // Add functionality to elements with `class="fade-in"`:
    fadeElements();
})