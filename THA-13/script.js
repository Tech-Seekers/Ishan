const breed=document.querySelector(".input1");
const search=document.querySelector(".button");
const article=document.querySelector("article");

search.addEventListener("click",()=>{
    const val=breed.value;
    if(val){
        fetch(`https://dog.ceo/api/breed/${val}/images/random/10`)
        .then(res => res.json())
        .then(data => getdata(data))
    }
    else{
        article.innerHTML=""
        alert("invalid search");
    }
})

function getdata(data){
    console.log(data.status)
    if(data.status==="success"){
        article.innerHTML=""
        data.message.forEach(da => {
        const element=document.createElement("div");
        element.innerHTML=`<img src=${da}>`
        element.classList.add("image");
        article.append(element);
    });
    }
    else{
        alert("Breed not Found");
    }
}
