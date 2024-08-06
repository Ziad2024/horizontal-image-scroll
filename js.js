let scrollGallery=document.querySelector(".gallery");
let back=document.querySelector(".back");
let next=document.querySelector(".next");
scrollGallery.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollGallery.scrollLeft += e.deltaY;
})
back.addEventListener("click",()=>{
    scrollGallery.scrollLeft -= 900;
})
next.addEventListener("click",()=>{
    scrollGallery.scrollLeft += 900;
})