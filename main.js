let navHeight = document.getElementById("nav-bar").clientHeight
console.log(navHeight)

window.addEventListener("hashchange",()=>{
    window.scrollTo(window.scrollX, window.scrollY-navHeight)
})