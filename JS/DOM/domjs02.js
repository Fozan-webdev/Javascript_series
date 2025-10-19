// change text to existig text
// textcontent| innertext
// display:none|display:none
//show text in | not show text in
// console     | console

// textContent
// const heading=document.getElementById("titles");
// console.log(heading.textContent);
// heading.textContent="welcome our new website";
// const heading=document.querySelector(".heading").textContent="welcome our new website";
// const newtext=heading
// console.log(newtext);
// console.log(heading.textContent);
// const main=document.getElementsByClassName("heading")[0];
// main.textContent="new site";
// console.log(heading.textContent);
const main=document.querySelectorAll(".heading")[0];
main.textContent="new site";
console.log(main.textContent);

// innertext
const heading=document.getElementById("titles");
console.log(heading.innerText);
heading.innerText="welcome our new website";
console.log(heading.innerText);
