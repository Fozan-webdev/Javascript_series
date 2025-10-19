function mypromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const value=true;
            if(value)
                resolve("yes");
            else
                reject("no")
        },1000);
    })
}

mypromise()
    .then((resolve)=>{
        console.log(resolve);
        resolve+="i have";
        return resolve;
    })
    .then((resolve)=>{
        console.log(resolve);
    })