const btn=document.querySelector("#btn");
btn.onclick=function(){
    console.log("yes you are click me");
}
const myfunct=function(){
    console.log("i am inline function");
}
// console.log(this);
const myfunc=function(){
    console.log("i am add event listener");
    console.log(this);
}
const bttn=document.querySelector("#bttn");
bttn.addEventListener('click',myfunc);