// Clone Nodes 
const ul=document.querySelector(".list");
console.log(ul);

const newElement=document.createElement("li");
newElement.textContent="new communication skill";


const newElement2=newElement.cloneNode(true);
ul.append(newElement);
ul.prepend(newElement2);