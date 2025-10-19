const ul=document.querySelector(".list");
console.log(ul);
// 2nd Method 
// const createelement=document.createElement("h1");
// const creattext=document.createTextNode("add new communication skill");
// createelement.appendChild(creattext);
ul.insertAdjacentHTML("beforebegin","<h1>communication skill with new method</h1>");
ul.insertAdjacentHTML("afterend","<h1>communication skill with new method</h1>");
ul.insertAdjacentHTML("afterbegin","<li>communication skill with new method</li>");
ul.insertAdjacentHTML("beforeend","<li>communication skill with new method</li>");