// method of String 
// 1) trim 
// 2) touppercase
// 3) tolowercase
// 4) slice 


// 1 trim 
// iss ka use hum string ma sy "space" katm krna ky lia krta hai 
let fname =" fozan ";
console.log(fname);
// console.log(fname.trim());
// store another variable
let newname=fname.trim();
console.log(newname);

// 2 touppercase

console.log(newname.toUpperCase());

// 3 toLowerCase
console.log(newname.toLowerCase());

// 4 slice 
// string ma sy ksi particular part ko print krwna
// iss ma index ka kihal rakha jata hai 
// start index , end index 

console.log(newname.slice(3));
console.log(newname.slice(0,3));