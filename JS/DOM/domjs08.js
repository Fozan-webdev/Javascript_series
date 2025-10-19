// dom tree traverse 
// access root node 

const rootnode=document.getRootNode();
console.log(rootnode);
// 1) childNodes mehtod 
console.log(rootnode.childNodes);
console.log(rootnode.childNodes[0]);
const cNodes=rootnode.childNodes[1];
console.log(cNodes);
console.log(cNodes.childNodes);
console.log(cNodes.childNodes.length);
console.log(cNodes.childNodes[0]);
console.log(cNodes.childNodes[1]);
const bodyelement=cNodes.childNodes[2];

console.log(bodyelement);
console.log(bodyelement.childNodes);
console.log(bodyelement.childNodes[0]);

// childNodes sy access kia hum ny child ko ab hum child sy parent ko bi access kr sakta hai 

// 2) parentNodes method 
console.log(cNodes.parentNode);
console.log(bodyelement.parentNode);
// sibling relation in file no.9 
