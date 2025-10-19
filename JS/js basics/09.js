// string in object 
// const obj ={..."abc",..."cdf"};
const obj={...["aa","bb"]};
for(let key in obj){
    console.log(obj[key]);

}
// Object destructuring 
const user ={
    fname:"ali",
    age:33,
    roll:32,
    rr:33
}
const names=user.fname;
console.log(names);
// const {fname,age}=user;
// const {fname:var1,age:var2}=user;
const {fname:var1,age:var2,...var3}=user;
console.log(var1,var2,var3);