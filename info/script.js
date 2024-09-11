document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("section"));

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transition = "opacity 1s ease-in-out";
    });

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        sections.forEach((section) => {
            const distanceFromTop = section.getBoundingClientRect().top;
            
            if (distanceFromTop <= windowHeight - 100) {
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();  // Azonnali megjelenítéshez az oldal betöltésekor
});
