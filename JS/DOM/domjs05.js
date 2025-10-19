// select multiple element usnig by class name 
const multipleitem=document.getElementsByClassName("item");
// ye humy html collection dy ga(array like object HAI)

console.log(multipleitem);
console.log("length is: ",multipleitem.length);
console.log(typeof multipleitem);
console.log(Array.isArray(multipleitem));
console.log(multipleitem[0]);
console.log(multipleitem[1]);
// / using loop to access this items 
// 1) simple for loop 
// for(let i=0; i<multipleitem.length; i++)
//     {
//         console.log(multipleitem[i]);
//     }
// 2) for of loop
for(let item of multipleitem)
    {
        console.log(item);
    }
// select multiple element usnig querySelectorAll
const selectallitems=document.querySelectorAll(".item");
// ye humy nodelist dy ga(array like object HAI)
console.log(selectallitems);
console.log(selectallitems[0]);
console.log(selectallitems[1]);
console.dir(selectallitems[2]);
// using loop to access this items 
// 1) simple for loop 
// for(let i=0; i<selectallitems.length; i++)
// {
//     console.log(selectallitems[i]);
// }
// 2) for of loop
for(let item of selectallitems)
    {
        // console.log("1");
        console.log(item);
        item.style.backgroundColor="green";
        item.style.color="white";
    }