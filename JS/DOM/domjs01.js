console.dir(window.document);
// get element by id 
console.dir(document.getElementById("heading"));
const h1=document.getElementById("heading");
console.dir(h1);
console.dir(typeof h1);
// get element by qurey selector using tag
// ye sirf pehly h1 ko he select kry ga
console.log(document.querySelector("h1"));
const selector=document.querySelector("h1");
console.log(selector);
// get element by qurey selector using id
console.log(document.querySelector("#heading"));
const id=document.querySelector("#heading");
console.log(id);
// get element by qurey selector using class
console.log(document.querySelector(".title"));
const classs=document.querySelector(".title");
console.log(classs);
// get element by qurey selector all using tag
const allelement=document.querySelectorAll("h1");
console.log(allelement);
// get element by qurey selector all using tag

console.log(allelement[0]);