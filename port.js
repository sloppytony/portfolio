const aboutLink = document.querySelector('.about-link');
const about = document.querySelector('.about-modal');
const contactLink = document.querySelector('.contact-link');
const contact = document.querySelector('.contact');
const projectLink = document.querySelector('.project-link');
const project = document.querySelector('.projects');

about.classList.add('active-about');

aboutLink.addEventListener('click', function(){
    about.classList.add('active-about');
    contact.classList.remove('active-contact');
    project.classList.remove('active-projects');
});

contactLink.addEventListener('click', function(){
    contact.classList.add('active-contact');
    about.classList.remove('active-about');
    project.classList.remove('active-projects');
})

projectLink.addEventListener('click', function(){
    project.classList.add('active-projects');
    contact.classList.remove('active-contact');
    about.classList.remove('active-about');
});

