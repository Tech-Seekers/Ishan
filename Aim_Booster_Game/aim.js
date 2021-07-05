const crosshair=document.querySelector('.cursor')
const target=document.querySelector('.target')
const scoreText=document.querySelector('.score')
const timer=document.querySelector('.timer')
const highscoreText=document.querySelector('.highscore')
const playtest=document.querySelector('playbutton')
const playbuton=document.querySelector('.menupage .playbutton')
const damage=document.querySelector('.damage')
const shoot=document.querySelector('.shoot')

var score=0;
var time=30;
var highscore=  0;

document.querySelector('.menupage').addEventListener('click',(e)=>{
    e.stopPropagation();
})

 playbuton.addEventListener('click',(e)=>{
    document.querySelector('.menupage').style.opacity='0'; 
    setTimeout(() =>{
        document.querySelector('.menupage').style.display='none'; 
    },100)
    play()
 })

 const play = () =>{
    setInterval(() =>{
        times(); 
     },(1000))
 }

window.onload =() =>{
    if(localStorage.getItem('highscore')){
        highscore=localStorage.getItem('highscore')
        highscoreText.innerHTML=`HIGHSCORE ${highscore}`;
    }
    scoreText.innerHTML=score;
    timer.innerHTML=time;
    respan();
}


document.addEventListener('mousemove', (e) => {
    crosshair.style.left= `${e.clientX}px`
    crosshair.style.top= `${e.clientY}px`
})

const respan = () => {
    const top=Math.floor(Math.random()*window.innerHeight)
    const left=Math.floor(Math.random()*window.innerWidth)
    target.style.top= `${top}px`
    target.style.left= `${left}px`
}

const gameOver=()=>{
    alert(`Game Over \n Your Score = ${score}`);
    
    if(localStorage.getItem('highscore')<score){
        localStorage.setItem('highscore',score);
        highscore=score;
        highscoreText.innerHTML=`HIGHSCORE ${highscore}`;
    }
    score=0;
    time=30+2;
}

const times =() =>{
    if(time==0){
        gameOver();
    }
    time-=1;
    timer.innerHTML=time;
}

document.addEventListener('click',()=>{
    damage.currentTime=0;
    damage.play()
})

target.addEventListener('click',(e)=>{
    e.stopPropagation();
    shoot.currentTime=0;
    shoot.play()
    score+=1;
    scoreText.innerHTML=score;
    respan();
})