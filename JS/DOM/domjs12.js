// class list check the classes 
const checkclasses=document.querySelector("p");
console.log(checkclasses.classList);
// add new class 
checkclasses.classList.add("item3");
console.log(checkclasses.classList);
// remove class
checkclasses.classList.remove("item3");
console.log(checkclasses.classList);

// check class exist or not 
const checking=checkclasses.classList.contains("items");
console.log(checking);

// toggle property 
// agr class hui tu osy remove kr dy gi agr na hui tu add kr dy gi 
const togle=checkclasses.classList.toggle("item");
console.log(togle);
console.log(checkclasses.classList);
