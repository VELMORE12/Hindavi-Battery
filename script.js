/* ==========================================
   HINDAVI BATTERY - PREMIUM JAVASCRIPT
========================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Sticky header effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.padding = "8px 0";
        header.style.boxShadow = "0 4px 15px rgba(255,193,7,.25)";

    }

    else {

        header.style.background = "#000";
        header.style.padding = "";
        header.style.boxShadow = "0 0 10px rgba(255,193,7,.2)";

    }

});


// Active navigation highlighting

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Fade-in animation using Intersection Observer

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});


// Hero animation

const heroText = document.querySelector(".heroText");

window.addEventListener("load", () => {

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(50px)";
    heroText.style.transition = "1.5s";

    setTimeout(() => {

        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0px)";

    }, 300);

});


// Button hover animation

document.querySelectorAll(".btn,.btn2,.callBtn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";
        btn.style.transition = ".3s";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// Floating buttons pulse animation

const floatingButtons = document.querySelectorAll(".floatingCall,.floatingWhatsapp");

setInterval(() => {

    floatingButtons.forEach(btn => {

        btn.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.12)" },

            { transform: "scale(1)" }

        ], {

            duration: 1200

        });

    });

}, 2500);


// Scroll progress bar

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#FFC107";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


// Simple reveal animation

const revealItems = document.querySelectorAll(
"#about,#contact,.card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([

                {

                    opacity: 0,
                    transform: "translateY(80px)"

                },

                {

                    opacity: 1,
                    transform: "translateY(0)"

                }

            ], {

                duration: 1000,
                fill: "forwards"

            });

        }

    });

});

revealItems.forEach(item => {

    revealObserver.observe(item);

});


// Console welcome

console.log("⚡ Hindavi Battery Website Loaded Successfully");