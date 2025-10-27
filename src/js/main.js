let frm = document.getElementById("submitt")
let scrollers = document.querySelectorAll(".scroller")
let hamburgerMenu = document.getElementById("hamburgerMenu")
let hamburger = document.getElementById("hamburger")
let menuclosed = true

frm.addEventListener("submit" , e => e.preventDefault())

if(!window.matchMedia("(prefer-reduced-motion: reduce)").matches){
    addAnimation()
}

function addAnimation(){
    scrollers.forEach((scroller) =>{
        scroller.setAttribute("data-animated" , true)
        const scrollerInner = document.querySelector(".scroller-inner")
        const scrollerContent = Array.from(scrollerInner.children)

        scrollerContent.forEach(element => {
            const duplicateelement = element.cloneNode(true);
            duplicateelement.setAttribute("aria-hidden" , "true")
            scrollerInner.appendChild(duplicateelement)            
        });

    })
}

hamburger.addEventListener("click" , () =>{
    // console.log("hi");
    if (menuclosed) {
        hamburgerMenu.classList.remove("bottom-full")
        hamburgerMenu.classList.add("top-full")
        hamburger.src = "./src/images/cancel.svg"
        menuclosed = false
    }else{
        hamburgerMenu.classList.remove("top-full")
        hamburgerMenu.classList.add("bottom-full")
        hamburger.src = "./src/images/menu.svg"
        menuclosed = true
    }
})
