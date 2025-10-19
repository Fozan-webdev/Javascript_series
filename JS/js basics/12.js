// hoisting 
numb();
function numb(){
    console.log("hoisting")
}
// function inside function 
const mainfun=()=>{
    
    const insidefun=()=>{
        console.log("inside funtion");
    }
    console.log("outside funtions");
    insidefun();
}
mainfun();
// function inside function laxical scope
const main=()=>{
    const val=2;

    const inside=()=>{
        const val=3;
        console.log("inside funtion",val );
    }
    console.log("outside funtions",val);
    inside();
}
main();
