//call back funtion
function callfun(){
    console.log("callback funtion");
}

function call(callbacks){
    console.log("receive callback fun");
    callbacks();
}

call(callfun);
// funtion returning funtion
const main=()=>{
    const val=2;

    const inside=()=>{
        const val=3;
        console.log("inside funtion",val );
    }
    console.log("outside funtions",val);
    return inside();
}
const rf=main();
// rf();
// console.log(rf);