// add one object value to another object 
// const key ="name";
// const data ={}
// data[key]="ali";
// console.log(data);

// how to iterate object 
// forin loop 
// const detail ={
//     name:"ali",
//     age:32,
//     id:355,
// };
// for(let key in detail){
//     console.log(detail[key]);
//     console.log(`${key}:${detail[key]}`);

// }

const obj={
    arr:[
        {key:"value"},
        {key11:"value11"},
        {key22:"value11"},
    ],
}
console.log(obj);
const mapp=obj.arr.map((get)=>{
    // console.log(get)
   return get;
});
console.log(mapp);
let num=0;
console.log(num++);
console.log(++num);
console.log(num);

function check(...arr){
    console.log(typeof arr)
}

check(21);

// const a="4";
// const b="6";
// console.log(typeof (a+b));

// const a=4;
// const b="6";
// console.log(a+parseInt(b));

let x=4;
let y=x++;
console.log(y);

let c={
    key: "value",
}
let d;
d=c;
c.key="value1";
console.log(d.key);