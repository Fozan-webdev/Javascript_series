// 1) Event Bubbling / propagation
// 2) capturing
// 3) Delegation

// 1) Event Bubbling / propagation
const body=document.body;
const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

// grandparent.addEventListener("click", ()=>{
//     console.log("i am grandparent!!!!");
// });
// parent.addEventListener("click", ()=>{
//     console.log("i am parent!!!!");
// });
// child.addEventListener("click", ()=>{
//     console.log("i am child!!!!");
// });

// 2) capturing
// grandparent.addEventListener("click", ()=>{
//     console.log("i am grandparent!!!!");
// },true);
// parent.addEventListener("click", ()=>{
//     console.log("i am parent!!!!");
// },true);
// child.addEventListener("click", ()=>{
//     console.log("i am child!!!!");
// },true);

// 3) Delegation

grandparent.addEventListener("click", ()=>{
    console.log("i am grandparent!!!!");
    // console.log(grandparent.textContent);
});
grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
});