const rootnode=document.getRootNode();
console.log(rootnode);
console.log(rootnode.childNodes);
const firstnodechild=rootnode.childNodes[0];
console.log(firstnodechild);
console.log(firstnodechild.nextSibling);
const htmlelement=firstnodechild.nextSibling;
// create chain 
console.log(htmlelement.childNodes[0].nextSibling.nextSibling);
const bodyparent=htmlelement.childNodes[0].nextSibling.nextSibling;
console.log(bodyparent.parentNode.parentNode);
// parent sibling 
// styling in next file usnig sibling 