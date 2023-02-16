window.addEventListener("load", function() {
    Array.from(document.querySelectorAll(".browse-courses > .items > .item > .content")).forEach(row => {
        const slider = row;
        let isDown = false;
        let startX;
        let scrollLeft;
        let scrollSpeed = 1;
        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * scrollSpeed;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
})