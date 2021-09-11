window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("active",window.scrollY > 10);
})