// Wait for 7 seconds before enabling scrolling
setTimeout(function () {
    document.body.style.overflow = 'auto';
    document.documentElement.style.scrollBehavior = 'smooth';
}, 7000);

// Scroll to top of page on reload
window.addEventListener('load', function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);
});

// Disable scrolling until 7 seconds have passed
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflow = 'hidden';
});



// add fade effect when u reach the element
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add('fade-in-elements');
        }
    });
}, { threshold: 0.25 });

const projects = document.getElementById('projects').children;
for (let i = 0; i < projects.length; i++) {
    observer.observe(projects[i]);
}

const languages_frameworks = document.getElementById('languages-frameworks').children;
for (let i = 0; i < languages_frameworks.length; i++) {
    observer.observe(languages_frameworks[i]);
}

const contacts = document.getElementById('contacts').children;
for (let i = 0; i < contacts.length; i++) {
    observer.observe(contacts[i]);
}

const external_links = document.getElementById('external-links').children;
for (let i = 0; i < external_links.length; i++) {
    observer.observe(external_links[i]);
}

const footer = document.querySelector('footer');
observer.observe(footer);


// toggle hamburger button
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarmenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", function () {
    console.log(navbarToggle)
    this.classList.toggle("active-toggle");
});

navbarToggle.addEventListener("click", function () {
    console.log(navbarToggle)
    navbarmenu.classList.toggle("active-menu");
});

// add and remove animation class from the toggle button after some time
window.onload = function () {
    const hamburger = document.querySelector('.navbar-toggle');
    const children = hamburger.children
    setTimeout(function () {
        hamburger.classList.add('navbar-toggle-fade-in');
        setTimeout(function () {
            for (let i = 0; i < children.length; i++) {
                children[i].classList.add('show')
            }
            setTimeout(function () {
                hamburger.classList.remove('navbar-toggle-fade-in');
            }, 1000);
        }, 1000);
    }, 2500)
};