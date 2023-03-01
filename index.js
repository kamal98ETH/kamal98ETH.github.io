// showing the web page only after the loading animation finishes
setTimeout(() => {
    const elements = document.getElementsByClassName("wait-to-display");
    Array.from(elements).forEach((element) => {
        element.classList.remove("wait-to-display");
    });
}, 5000)

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
const main = document.getElementById("main")

navbarToggle.addEventListener("click", function () {
    this.classList.toggle("active-toggle");
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
});

navbarToggle.addEventListener("click", function () {
    navbarmenu.classList.toggle("active-menu");
});

//close the menu after clicking a link on the menu
const menuLinks = document.querySelectorAll('.navbar-menu a');
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbarmenu.classList.remove('active-menu');
        navbarToggle.classList.remove('active-toggle');
        main.classList.remove('blur');
        footer.classList.remove('blur');
    });
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
    }, 2000)
};


// close the menu when u click outside of it
const navbar = document.getElementById('navbar');
document.addEventListener('click', (event) => {
    if (!navbarmenu.contains(event.target) && event.target !== navbarToggle && !navbar.contains(event.target)) {
        navbarmenu.classList.remove('active-menu');
        navbarToggle.classList.remove('active-toggle');
        main.classList.remove('blur');
        footer.classList.remove('blur');
    }
});