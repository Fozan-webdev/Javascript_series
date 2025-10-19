// how to get the dimension of element 
// kesi bi section ya div ki width ya height check krni hai tu 
// property hai iss lia : getboundingclientrect

// const ul=document.querySelector(".list");
// const details=ul.getBoundingClientRect()
// console.log(details);

// static list vs live list
// static list 
// const li =document.querySelectorAll(".list li");
// console.log(li);
// const newli=document.createElement("li");
// newli.textContent="add new communication skills";
// const ul=document.querySelector(".list");
// ul.append(newli);
// live list 
const ulitem=document.querySelector(".list");
const lis=ulitem.getElementsByTagName("li");
const newli=document.createElement("li");
newli.textContent="add new communication skills";

ulitem.append(newli);
console.log(lis);
const heading=ulitem.getElementsByTagName("h1");
console.log(heading);