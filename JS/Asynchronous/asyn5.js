//callback hell with the help of function
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

function pramiddoom(elememt, text, color, times, onsuccessful, onfailure) {
  setTimeout(() => {
    if (elememt) {
      elememt.textContent = text;
      elememt.style.backgroundColor = color;
      if(onsuccessful){
        onsuccessful();
      }
    }
    else{
        if(onfailure){
            onfailure();
        }
    }
  }, times);
}

pramiddoom(heading1, "heading 1", "red", 1000,()=>{
  pramiddoom(heading2, "heading 2", "blue", 2000,()=>{
  
},()=>{console.log("heading does not exist")})
},()=>{console.log("heading does not exist")})
