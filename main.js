let navHeight = document.getElementById("nav-bar").clientHeight

let height = window.innerHeight-30

let roots=document.getElementById("Observer-test");
window.addEventListener("hashchange",()=>{
    window.scrollTo(window.scrollX, window.scrollY-navHeight)
})

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

function clearAll(){
    home_link.classList.remove("md:selected-nav-item");
    contact_link.classList.remove("md:selected-nav-item");
    about_link.classList.remove("md:selected-nav-item");
    skills_link.classList.remove("md:selected-nav-item");
    projects_link.classList.remove("md:selected-nav-item");
}
window.onscroll = ()=>{
    let h1=Home.getBoundingClientRect().top
    let c1=Contact.getBoundingClientRect().top
    let a1=About.getBoundingClientRect().top
    let s1=Skills.getBoundingClientRect().top
    let p1=Projects.getBoundingClientRect().top
    let h2=Home.getBoundingClientRect().bottom
    let c2=Contact.getBoundingClientRect().bottom
    let a2=About.getBoundingClientRect().bottom
    let s2=Skills.getBoundingClientRect().bottom
    let p2=Projects.getBoundingClientRect().bottom
    
    if(h1>=60 && h1<120){
        clearAll()
        home_link.classList.add("md:selected-nav-item")
    }else
    if(c1>=60 && c1<120){
        clearAll()
        contact_link.classList.add("md:selected-nav-item")
    }else
    if(a1>=60 && a1<120){
        clearAll()
        about_link.classList.add("md:selected-nav-item")
    }else
    if(s1>=60 && s1<120){
        clearAll()
        skills_link.classList.add("md:selected-nav-item")
    }else
    if(p1>=60 && p1<120){
        clearAll()
        projects_link.classList.add("md:selected-nav-item")
    }else if(h2>=height && h2<(height+30)){
        clearAll()
        home_link.classList.add("md:selected-nav-item")
    }else if(c2>=height && c2<(height+30)){
        clearAll()
        contact_link.classList.add("md:selected-nav-item")
    }else if(a2>=height && a2<(height+30)){
        clearAll()
        about_link.classList.add("md:selected-nav-item")
    }else if(s2>=height && s2<(height+30)){
        clearAll()
        skills_link.classList.add("md:selected-nav-item")
    }else if(p2>=height && p2<(height+30)){
        clearAll()
        projects_link.classList.add("md:selected-nav-item")
    }
}
home_link.classList.add("md:selected-nav-item")