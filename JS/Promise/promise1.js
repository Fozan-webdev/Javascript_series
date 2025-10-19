const arr=['salt','coffe','vegtable','fruit'];
const rice=new Promise((resolve,reject)=>{
    if(arr.includes("salt")&arr.includes("vegtable"))
        resolve("rice is ready");
    else
        reject("rice is not ready");
});
// console.log(rice);
// 1st method 
// rice.then((resolve)=>{
//     console.log(resolve);
// },(reject)=>{
//     console.log(reject);
// });

// 2nd method 
rice.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject);
})