// promise and setTimeout 
function mypromise(){
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(()=>{
             if(value)
            resolve("good");
        else
            reject("bad");


        },1000);
       
    });
}
const promise=mypromise();
promise.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})