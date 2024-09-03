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

// Add hover sound effect
const hoverSound = new Audio('path/to/your/hover-sound.mp3');

// Animate sections on scroll and add hover sound
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
    
    // Add hover sound effect
    section.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset audio to start
        hoverSound.play();
    });
});

// Handle GitHub repository link
const githubRepoLink = document.getElementById('github-repo-link');
if (githubRepoLink) {
    githubRepoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/abhijeetkakade1234?tab=repositories', '_blank');
    });
}