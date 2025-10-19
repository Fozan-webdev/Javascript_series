// Apply eventlistener on multiple Element 
// const allbtn=document.querySelectorAll(".bttn");
// for(let btn=0; btn<allbtn.length; btn++){
//     allbtn[btn].addEventListener('click',function(){
//         console.log(this);
//     });
// }
const allbtn=document.querySelectorAll(".bttn");
for(let btn of allbtn){
    btn.addEventListener("click",function(){
        console.log(this.textContent);
    });
}

// const allbtn=document.querySelectorAll(".bttn");
// allbtn.forEach((allbtn)=>{
//     allbtn.addEventListener('click',function(){
//         console.log(this);
//     });
// });