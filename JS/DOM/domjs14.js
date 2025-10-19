// new element add useful method 
const ul=document.querySelector(".list");
console.log(ul);

// 1st element create kry ga 
// 2nd text lihky gye 

const createelement=document.createElement("li");
const creattext=document.createTextNode("add new communication skill");
createelement.appendChild(creattext);
// add new element in after
ul.append(createelement);
// add new element in before

// ul.prepend(createelement);

// remove element
// sara he remove ho gya hai
// ul.remove("li");

const li=document.querySelector("li");
// console.log(li);
li.remove("li");

// ul ky first ma ya baad ma add krna ky lia nex file 