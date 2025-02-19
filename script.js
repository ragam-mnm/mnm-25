document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".container div");

    // Fade in effect for the container
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    container.style.transform = "translateY(-20px)";
    setTimeout(() => {
        container.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 200);

    // Add hover animations to links
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        link.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Click animation for a small pop effect
    links.forEach(link => {
        link.addEventListener("mousedown", function () {
            this.style.transform = "scale(0.95)";
        });

        link.addEventListener("mouseup", function () {
            this.style.transform = "scale(1.05)";
        });
    });
});
