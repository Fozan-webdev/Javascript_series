// Main URL to jump sub URL 

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onload=()=>{
    if(xhr.status>=200&&xhr.status<300)
    {
        const data=JSON.parse(xhr.response)
        const id=data[3].id;
        console.log(id);
        const url2=`${URL}/${id}`;
        console.log(url2);
        const xhr2=new XMLHttpRequest();
        xhr2.open("GET",url2);
        xhr2.onload=()=>{
            const data2=JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();

    }
}

xhr.send();