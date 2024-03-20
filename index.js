var crsr = document.querySelector(".cursor");
var crsrBlur = document.querySelector(".cursor-blur");
var body = document.querySelector("body");

body.addEventListener("mousemove",function(e){
    crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
    crsrBlur.style.left = e.x-100+"px";
    crsrBlur.style.top = e.y-100+"px";
})