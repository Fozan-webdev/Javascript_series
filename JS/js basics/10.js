// nesting destructuring 
const users=[
    {uid:1,uname:"ali",uage:22},
    {uid:2,uname:"asad",uage:22},
    {uid:3,uname:"hamid",uage:22},
]
// console.log(users)
for(let user of users){
    console.log(user);
}
// const [user1,...userss]=users;
// const [{uid},,{uname}]=users;
const [{uid:neid},,{uname:newname}]=users;
console.log(neid,newname);