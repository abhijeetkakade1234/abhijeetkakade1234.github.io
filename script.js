// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations
gsap.from("#landing h1", {duration: 1, y: 50, opacity: 0, ease: "power3.out"});
gsap.from("#landing p", {duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5});
gsap.from(".cta-button", {duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 1});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const animateSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target.children, {duration: 1, y: 50, opacity: 0, stagger: 0.2, ease: "power3.out"});
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(animateSection, {
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Easter egg
let keySequence = '';
const easterEggCode = 'innovation';

document.addEventListener('keydown', (e) => {
    keySequence += e.key.toLowerCase();
    if (keySequence.includes(easterEggCode)) {
        alert('You found the easter egg! You truly are an innovator!');
        keySequence = '';
    }
    if (keySequence.length > easterEggCode.length) {
        keySequence = keySequence.slice(1);
    }
});
