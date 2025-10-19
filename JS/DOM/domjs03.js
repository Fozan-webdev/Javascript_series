// apply css selector
// 1) decendent(space)
// 2) direct child(>)
// 3) adjacent sibling selector(+)
// 4) next sibling(~)

// apply styling using css selector/combinator selector
// 1) decendent
const decendent=document.querySelector("div .item");
// 3) adjacent sibling selector(+)
// const decendent=document.querySelector("h1+p");
decendent.style.backgroundColor="blue";
// apply css
const border=document.querySelector("div");
border.style.border="2px solid red";