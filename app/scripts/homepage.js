function checkScroll() {
    let items = document.querySelector('.items');
    let left = document.querySelector("#items-scroll-left");
    let right = document.querySelector("#items-scroll-right");

    // Hide scroll right:
    if (items.scrollLeft <= 600) {
        right.style.display = "flex";
    } else if (items.scrollLeft > 600) {
        right.style.display = "none";
    }

    // 
    if (items.scrollLeft <= 50) {
        left.style.display = "none";
    } else if (items.scrollLeft > 50) {
        left.style.display = "flex";
    }
}

function scrollItems(amount) {
    let items = document.querySelector('.items');
    items.scrollBy({
        left: amount, behavior: 'smooth'
    });

    checkScroll();
}

window.addEventListener("load", function() {
    checkScroll();
})