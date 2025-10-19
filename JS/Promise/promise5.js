// use promise instead of callbackHell 
const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");

function mypromise(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(element)
          {
            element.texContent=text;
            element.style.color=color;
            resolve();
            }
        else
        {
            reject();
        }

        },time);
    });
    
}

const promise=mypromise(heading1,"one","blue",1000);
promise.then(()=>{return mypromise(heading2,"two","red",1000)})
.then(()=>{return mypromise(heading3,"three","yellow",1000)});