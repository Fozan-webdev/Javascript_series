// styling using parent node 
const childelement=document.querySelector(".heading");
console.log(childelement);
const divparent=childelement.parentNode;
console.log(divparent);
divparent.style.backgroundColor="green";
console.log(divparent.childNodes);
divparent.childNodes[3].style.color="white";
// const fchile=divparent.childNodes[3]
// console.log(fchile);
// fchile.style.color="white";


// direct body select 
const bodyselect=document.body;
console.log(bodyselect);
bodyselect.style.background="gray";
// select head directly .....
console.log(document.head);
const headelement=document.head;
const titleelement=headelement.querySelector("title");
console.log(titleelement);
titleelement.textContent="my website";