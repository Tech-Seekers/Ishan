let words=["img/1.png","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.png","img/7.jpg","img/8.jpg"];
words=[...words,...words];

let moves=30;
let matches=0;
let gameActive=true;

for(let i=1;i<=16;i++)
{
    let card=document.createElement("div");
    card.classList.add("flip-card");

    let innr=document.createElement("div");
    innr.classList.add("flip-inner");

    let front=document.createElement("div");
    front.classList.add("front");

    let back=document.createElement("div");
    let rand=Math.floor(Math.random()*(16-i));
    back.innerHTML="<img src="+"'"+words[rand]+"'"+"style ="+ "'"+"box-sizing:border-box; width:140px; height:135px;" + "'" + ">";
    
    words.splice(rand,1);

    back.classList.add("back");
    
    innr.appendChild(front);
    innr.appendChild(back);

    card.appendChild(innr);

    document.getElementById("grid").appendChild(card);
}

let clicked;
let lockboard=false;
let cards=document.querySelectorAll('.flip-card')

cards.forEach(card =>{
    card.addEventListener("click", (e)=>{
        if(!gameActive)return;
        moves--;
        document.querySelector("span").innerHTML=moves;
        
        if(clicked){
            if(card===clicked)return;
            card.firstChild.classList.add("flipped");
            gameActive=false;
            setTimeout(() => {
                if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove("flipped");
                    clicked.firstChild.classList.remove("flipped");
                }else{
                    matches++;
                    card.style.visibility="hidden";
                    clicked.style.visibility="hidden";
                }
                clicked=undefined;
                gameActive=true;
            }, 500);
        }else{
            clicked=card;
            clicked.firstChild.classList.add("flipped");
        }
    })
})

setInterval(() => {
    if(moves===0){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        let h2=document.createElement("h2");
        document.querySelector(".popup > div > h2").innerHTML="You Lose !!";
    }
    if(matches==8){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector(".popup > div > h2").innerHTML="You Won !!"
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e)=>{
    window.location.reload();
})

