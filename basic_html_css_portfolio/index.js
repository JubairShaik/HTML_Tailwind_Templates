// ------------------------- Creating scroll to top component ---------------------------

const heroSection = document.querySelector(".hero_section");
const footerElem = document.querySelector("footer");
const scrollElement = document.querySelector(".scroll-to-top");

scrollElement.classList.add("scrollTopStyle");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behaviour: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);



// ------------------------- Creating active navlink on scroll functionality  ---------------------------

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');

window.onscroll = ()=>{
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 80;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id +']').classList.add('active');
            })
        }
    })
}

// ------------------------- Navbar change on scroll  ---------------------------

window.addEventListener("scroll", function(){
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 70);
})



// ------------------------- Cursor blur  ---------------------------

let cursorBlur = document.querySelector('#cursor_blur');

document.addEventListener("mousemove", function(dets){
    cursorBlur.style.left = dets.x-150+"px";
    cursorBlur.style.top = dets.y-150+"px";
})