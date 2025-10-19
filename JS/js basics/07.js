// Object use 
const obj ={
    key1: "value1",
    key2: "value2",
    // person hobies="cricket ,football"
    "person hobies":["cricket" ,"football"]
};
console.log(obj);
console.log(obj.key1);
// console.log(obj["key1"]);
// obj.key3="value3";
obj["key3"]="value3";
console.log(obj);
console.log(obj["person hobies"]);
// obj["person hobies"]="book";
// console.log(obj["person hobies"]);
// one value copy to Object
const ob="email";
const ob2={};
ob2[ob]="mail.com";
console.log(ob2);
// console.log(ob);


