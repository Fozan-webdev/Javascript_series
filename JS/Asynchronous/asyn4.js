// callbacks in Asynchronous programming
// callbacks hell

// use setTimeout
const heading = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
// console.log(heading);
// iss ko kehta hai call back hell (nested function)
setTimeout(() => {
  heading.textContent = "heading 1";
  setTimeout(() => {
    heading2.textContent = "heading 2";
    setTimeout(() => {
      heading3.textContent = "heading 3";
    }, 1000);
  }, 1000);
}, 2000);
// asa code ko handle krna muskil hai
// iss ky baad hum promises ko use kry gye
