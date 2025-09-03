const url="https://jsonplaceholder.typicode.com/posts"
fetch(url)
.then(req=>req.json())
.then(data=>displayData(data))

const displayData=(posts)=>{
    posts.forEach(element => {
        console.log(element)
    });
}