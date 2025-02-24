document.addEventListener("DOMContentLoaded", function () {
    // Add a glowing effect when scrolling
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".hero_container");
        header.style.filter = "brightness(" + (1 - window.scrollY / 1000) + ")";
    });

    // Add hover effect to social icons
    document.querySelectorAll(".social-links a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.boxShadow = "0 0 20px gold";
        });
        link.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });

    // Text typing effect
    function typeEffect(element, text, speed) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        element.innerHTML = ""; // Clear previous text
        typing();
    }

    let titleText = document.querySelector(".lg_intro");
    let originalText = titleText.innerText;
    typeEffect(titleText, originalText, 150); // Speed of typing effect
});
