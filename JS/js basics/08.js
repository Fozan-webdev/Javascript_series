// how to iterate Object 
// 2 method
// 1) for in loop(index deta hai)
// 2) Object .key 
const obj ={
    fname:"ali",
    age:22,
    address:"market hall",
    hobies:["book reding","cricket","programming"],
};
// for in loop 
for (let obj2 in obj){
    // console.log(obj.obj2); not use
    // console.log("obj2")
    console.log(obj[obj2  ]);
    // console.log(`${obj2}:${obj[obj2]}`);
    // console.log(obj2 +":"+obj[obj2]);
    // console.log(obj2);
}
// Object.key 
// ye humy array dy ga 
console.log(Object.keys(obj));
for(let key of Object.keys(obj)){
    // console.log(key);
    console.log(obj[key]);
}
// const fruits =[1,2,3];
// for(let fruit of fruits)
// {
//     console.log(fruit);
// }