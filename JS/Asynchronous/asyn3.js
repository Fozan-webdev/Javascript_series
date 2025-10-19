// CallBacks in synchronous programmingn
function fun1(CallBack) {
  console.log("fuc 1 .....!");
  CallBack();
}

// fun1(function fun2(){
//     console.log("fuc 2 .....!");
// });
fun1(() => {
  console.log("fuc 2 .....!");
});

function gettwonumber(num1, num2, CallBack) {
  console.log(num1, num2);
  CallBack(num1, num2);
}
function addnum(n1, n2) {
  console.log(n1 + n2);
}
gettwonumber(3, 5, addnum);
