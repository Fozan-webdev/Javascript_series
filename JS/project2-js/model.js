const model=document.querySelector(".model")
const openModelButton=document.querySelector(".openModelButton")
const closeButton=document.querySelector(".close-button")
const overlay=document.querySelector(".overlay");

// console.log(model)
// console.log(openModelButton)


function openmodel(){
    model.classList.remove("open-model")
};
function closeModel(){
    model.classList.add("open-model");
}

openModelButton.addEventListener("click",()=>{
    openmodel();
});

// closeButton.addEventListener("click",()=>{
//     closeModel();
// });
// overlay.addEventListener("click",()=>{
//     closeModel();
// });
// short method 
model.addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("close-button")||
        target.classList.contains("overlay")){
        closeModel();
    }
})