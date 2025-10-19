// setInterval(()=>{
//     console.log(Math.random());

// },2000);

const body = document.body;
const button = document.querySelector("button");
const setIntervalid = setInterval(() => {
  const red = Math.floor(Math.random() * 125);
  const green = Math.floor(Math.random() * 125);
  const blue = Math.floor(Math.random() * 125);
  const rgbcol = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = rgbcol;
}, 1000);
button.addEventListener("click", () => {
  clearInterval(setIntervalid);
  button.textContent = body.style.backgroundColor;
});
