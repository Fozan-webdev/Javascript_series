// return promise 
function mypromise(){
    return new Promise((resolve,reject)=>{
        const value=false;
        if(value)
            resolve("good");
        else
            reject("bad");
    })
}
const promise=mypromise();
promise.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})