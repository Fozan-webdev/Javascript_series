// body change randomly when click button 
// 1) Math.floor (only integer value)
// 2) Math.random (generATE random number)
const btn=document.querySelector("button");
const body=document.body;
// body.style.backgroundColor="red";
const curcol=document.querySelector(".current-color");
function randomcolorgenrate(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const colvalue=`rgb(${red},${blue},${green})`;
    return colvalue;
}

btn.addEventListener("click",()=>{
    const rgbvalue=randomcolorgenrate();
    body.style.backgroundColor=rgbvalue;
    curcol.textContent=rgbvalue;
})