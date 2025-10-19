// After and before property
const ul=document.querySelector(".list");
console.log(ul);

const createelement=document.createElement("h1");
const creattext=document.createTextNode("add new communication skill");
createelement.appendChild(creattext);
// short cut of previous two lines 
// createelement.textContent="add new communication skill";
ul.before(createelement);
// ul.after(createelement);

// 3rd Method to Create element in next file
