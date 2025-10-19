// 1) keypress events 
// 2) mouseover events 
// 3) mouseleave events 


const body= document.body;
const btn=document.querySelector("button");
body.addEventListener("keypress",(e)=>{
    console.log(e.key);
});


const botn=document.querySelector("button");
botn.addEventListener("mouseover",()=>{
    body.style.backgroundColor="blue";
});

// const botn=document.querySelector("button");
botn.addEventListener("mouseleave",()=>{
    body.style.backgroundColor="white";
});
