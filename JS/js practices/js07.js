// Array destructuring 
const ar=[1,2,3];
// array item store in variable 
// method 1
let item1=ar[0];
let item2=ar[1];

// method 2 
let[item3,item4]=ar;
// third array item store in second var /
let [va1,,val2]=ar;

// slice() 
let [v1,v2]=ar;
let newar=ar.slice(2);
// speard operator 
let [vall1,...narr]=ar;