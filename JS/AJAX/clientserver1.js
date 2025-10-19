const url="https://jsonplaceholder.typicode.com/posts";
// const url="https://jsonplaceholder.typicode.com/postss";
const xhr=new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET",url);
// console.log(xhr);

// xhr.onreadystatechange=function(){
//     console.log(xhr.readyState);
// }
// 1st method 
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4)
//         // agr humra url ma koi mistake ho jaye tu 
//     // if(xhr.status===200)
//     {
//         // console.log(xhr.readyState);
//         // console.log(xhr.response);
//         console.log(typeof xhr.response);
//         // convert JSON string to JS Object 
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(typeof data);


//     }
    
// }
// 2nd method and easy way 
xhr.onload=function(){
    console.log(xhr.readyState);
    // console.log(xhr.response);
    const response=xhr.response;
    const data=JSON.parse(response);
    console.log(data);
}
xhr.send();