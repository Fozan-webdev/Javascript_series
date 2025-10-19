// forEach loop check in classbyname and queryselectorall
const items=document.getElementsByClassName("details");
console.log(items);
// ais trh error aa ga 
// items.forEach((item) => {
//     item.style.color="blue";
//     console.log(item);
    
// });
// pehly iss ko array ma convert krna para ga
let itemall=Array.from(items);
itemall.forEach((item) => {
    item.style.color="blue";
    console.log(item);
    
});
// queryselectorall
// iss ko array ma convert krna ki zarort ni iss pr wasy bi apply ho jaye gi forEach loop agr convert krna ha tu apki marzi hai
const itemparagraph=document.querySelectorAll("h1");
itemparagraph.forEach((paragraph,index)=>{
    console.log(paragraph,index);
    paragraph.style.color="green";
});