let ar1=[1,2,3];
let ar2=[1,2,3];
console.log(ar1===ar2);

// slice 
let arr1=[1,2,3];
let arr2=ar1.slice(0);
console.log(arr2);
console.log(arr1===arr2);

// []cancat(variable)
let arr3=[1,2,3];
let arr4=[].concat(arr3);
console.log(arr4);

// very usefull speard operator...arrayname
let arr5=[1,2,3];
let arr6=[...arr5];
console.log(arr4);

// mixup 3 methods 
let val=[1,2,3];
let val2=val.slice(0).concat([4]);
console.log(val,val2);


let val3=[1,2,3];
let val4=[].concat(val3,[4]);
console.log(val3,val4);

let val5=[1,2,3];
let val6=[...val5,4]
console.log(val6);