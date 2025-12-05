// Smooth scroll for navbar links and fix offset for fixed navbar
document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    });
});

// Fade in/out animation on scroll
function handleFadeSections() {
    const sections = document.querySelectorAll(".fade-section");
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerBottom && rect.bottom > 0) {
            section.classList.add("visible");
            section.classList.remove("invisible");
        } else {
            section.classList.remove("visible");
            section.classList.add("invisible");
        }
    });
}
window.addEventListener("scroll", handleFadeSections);
window.addEventListener("DOMContentLoaded", handleFadeSections);

// Scroll progress bar logic
function updateScrollProgressBar() {
    const scrollBar = document.getElementById('scroll-progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = percent + '%';
}
window.addEventListener('scroll', updateScrollProgressBar);
window.addEventListener('DOMContentLoaded', updateScrollProgressBar);

// Typing effect for Why Me section
const whymeLines = [
    "Proven track record of delivering high-quality solutions on time and exceeding expectations.",
    "Strong analytical and problem-solving skills, with a focus on innovation and efficiency.",
    "Excellent communication and collaboration abilities, thriving in team environments.",
    "Continuous learner, always adapting to new technologies and industry trends.",
    "Dedicated to creating value for clients and stakeholders through impactful work."
];

let whymeIndex = 0;
let charIndex = 0;
let typingTimeout, pauseTimeout;
const typingSpeed = 30; // ms per character
const pauseBetweenLines = 7000; // ms

function typeWhyMeLine() {
    const typingSpan = document.getElementById('whyme-typing');
    if (!typingSpan) return;
    const line = whymeLines[whymeIndex];
    if (charIndex <= line.length) {
        typingSpan.textContent = line.slice(0, charIndex);
        charIndex++;
        typingTimeout = setTimeout(typeWhyMeLine, typingSpeed);
    } else {
        pauseTimeout = setTimeout(() => {
            charIndex = 0;
            whymeIndex = (whymeIndex + 1) % whymeLines.length;
            typeWhyMeLine();
        }, pauseBetweenLines);
    }
}

window.addEventListener('DOMContentLoaded', function () {
    typeWhyMeLine();
});

// Mobile navbar toggle logic
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('open');
    });

    // Close sidebar when a link is clicked (for better UX)
    navbarMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('open');
        });
    });

    // Optional: close sidebar on outside click
    document.addEventListener('click', function (e) {
        if (
            navbarMenu.classList.contains('open') &&
            !navbarMenu.contains(e.target) &&
            e.target !== navbarToggle
        ) {
            navbarMenu.classList.remove('open');
        }
    });
}

// Custom cursor follower logic
const cursorDot = document.querySelector('.cursor-dot');
if (cursorDot) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Optional: Add effect on hoverable elements
    document.querySelectorAll('a, button, .box-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorDot.style.opacity = '0.8';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.opacity = '1';
        });
    });
}
