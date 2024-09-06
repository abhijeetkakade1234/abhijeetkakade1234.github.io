// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

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
    if (section.id !== 'landing') {
        sectionObserver.observe(section);
    }
});

// Handle GitHub repository link
const githubRepoLink = document.getElementById('github-repo-link');
if (githubRepoLink) {
    githubRepoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/abhijeetkakade1234?tab=repositories', '_blank');
    });
}

// Set up the skills scrolling animation
const skillsContainer = document.querySelector('.skills-container');
const skillsWrapper = document.createElement('div');
skillsWrapper.className = 'skills-wrapper';
const skills = Array.from(skillsContainer.children);

// Clone the skills to create a seamless loop
skills.forEach(skill => {
    skillsWrapper.appendChild(skill.cloneNode(true));
});

// Add the original skills
skills.forEach(skill => {
    skillsWrapper.appendChild(skill);
});

skillsContainer.innerHTML = '';
skillsContainer.appendChild(skillsWrapper);