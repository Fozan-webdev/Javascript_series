// create HTML element using JS 
// use innerHTML 
const ul=document.querySelector(".list");
// ul.innerHTML="<li>new communication skill</li>";
console.log(ul);
// iss previous remove ho jaye ga or new add ho jaye ga 
// lakin hum asa ni chata hum cha rah hai previous bi rahy or next/new bi add ho jaye
// Method 1
ul.innerHTML=ul.innerHTML+"<li>new communication skill</li>"+"<li>new communication skill</li>"+"<li>new communication skill</li>";
ul.innerHTML+="<li>new communication skill</li>";
// iss trh app new jitni marzi add kr sakty hai lakin is humry previous element dubara sy render ho gye

// useful method in next file 