// Delay kr ky check krty hai output working ko 
console.log("start script");
let n=0;
const allbtn=document.querySelectorAll(".bttn");
allbtn.forEach((obj)=>{
    obj.addEventListener("click",(e)=>{
        // for(let i=0; i<1000000000; i++)
        // {
        //     n=n+i;
        // }
        e.target.style.backgroundColor="yellow";
        e.target.style.color="red";
    });
});
let outervar=0;
for(let i=0; i<100000000; i++)
{
     outervar=outervar+i;
}
console.log("value",outervar);
console.log("end script");