// "use strict";

// console.log("hello world");
// var firstname= "fozan";
// console.log(firstname);

const tp=document.querySelector("#togglePassword");
const input=document.querySelector("input");
function toggle(){
    tp.classList.remove("fa-eye-slash");
    tp.classList.add("fa-eye")
}
function untoggle(){
     tp.classList.add("fa-eye-slash");
    tp.classList.remove("fa-eye")
}
input.addEventListener("change",()=>{
    const placeholder=input.getAttribute("placeholder");
})
// console.log(button);
tp.addEventListener("click",()=>{
    const type=input.getAttribute("type")==="password"?"text":"password";
    input.setAttribute("type",type);
    if(type==="text"){
         toggle();
    }
    else{
        untoggle();
    }
   
    // this.clasList.toggle("fa-eye-slash")
});
