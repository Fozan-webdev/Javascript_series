
// function searchnum(arr,num)
// const searchnum=function (arr,num)
const searchnum=(arr,num)=>
{
    for(let i=0; i<arr.length;i++){
        if(arr[i]===num)
            return arr[i];
    }
    return -1;

}
// console.log(searchnum);
const ar=[2,3,4];
const index=searchnum(ar,5);
if(index===-1){
    console.log("number is not find");
}
else{
    console.log("number is find");
}
console.log(index);
