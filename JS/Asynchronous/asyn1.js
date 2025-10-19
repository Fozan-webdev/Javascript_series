console.log("start");
const settimeout = setTimeout(() => {
  console.log(Math.random());
}, 1000);
console.log("end");
clearTimeout(settimeout);
