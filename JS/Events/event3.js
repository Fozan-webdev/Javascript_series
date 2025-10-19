// Event Object 
function hello(obj){
    console.log(obj);
}
hello({key:'value'});

const allbtn=document.querySelectorAll(".bttn");
allbtn.forEach((obj)=>{
     obj.addEventListener('click',(event)=>{
        console.log(event.currentTarget.textContent);

})
   
    });