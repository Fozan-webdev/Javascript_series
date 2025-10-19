// Error Handling 
const url="https://jsonplaceholder.typicode.com/postss";
const xhr= new XMLHttpRequest();
xhr.open("get",url);
xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300)
    {
        const data =JSON.parse(xhr.response);
        console.log(data);

    }
    else{
        console.log("something went wrong..");
    }
    
}
xhr.onerror=()=>{
    console.log("network Error...");
}
xhr.send();