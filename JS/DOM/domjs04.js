// get and set attribute 
// 1) get attribute 
// its use to select attribute and 
const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
// changes  value.
link.setAttribute("href","About");
console.log(link.getAttribute("href"));
