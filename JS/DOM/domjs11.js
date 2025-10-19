// children property 
// agr hum chata hai child node ma sirf element node hi aa textnode na aa tu hum children property ka use kr sakty hai 

const docobject=document.getRootNode();
console.log(docobject);
const htmlelemnt=docobject.childNodes;
console.log(htmlelemnt);
// console.log(htmlelemnt[0]);
// console.log(htmlelemnt[1]);
const html=htmlelemnt[1];
// textnode bi arhi hai

console.log(html.childNodes); 
// ab text node ni aa gi
console.log(html.children); 
