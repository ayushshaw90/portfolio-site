let navHeight = document.getElementById("nav-bar").clientHeight
console.log(navHeight)

window.addEventListener("hashchange",()=>{
    window.scrollTo(window.scrollX, window.scrollY-navHeight)
})

let DivToMenu = new Map();
let Home = document.getElementById("Home");
let Contact = document.getElementById("Contact");
let About = document.getElementById("About");
let Skills = document.getElementById("Skills");
let Projects = document.getElementById("Projects");

let home_link = document.getElementById("home-link");
let contact_link = document.getElementById("contact-link");
let about_link = document.getElementById("about-link");
let skills_link = document.getElementById("skills-link");
let projects_link = document.getElementById("projects-link");
DivToMenu.set(Home, home_link);
DivToMenu.set(Contact, contact_link);
DivToMenu.set(About, about_link);
DivToMenu.set(Skills, skills_link);
DivToMenu.set(Projects, projects_link);
let observer= new IntersectionObserver(entries=>{
    
})