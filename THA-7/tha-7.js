const box=document.querySelectorAll('.itm')
const booked=document.querySelector('.main .seats .booked')
const remaining=document.querySelector('.main .seats .remaining')

var r_seats=36;
var b_seats=0;

box.forEach(function (itm){
    itm.addEventListener('click',()=>{
    if(itm.classList.contains('booked-seat')){
        itm.classList.remove('booked-seat')
        remove_seat()
    }
    else{
        itm.classList.add('booked-seat')
        booked_seats()
    }
})
})

const booked_seats = () =>{
    r_seats-=1
    b_seats+=1
    booked.innerHTML=`Total Booked Seats :  ${b_seats}`;
    remaining.innerHTML=`Total Remaining Seats :  ${r_seats}`;
}

const remove_seat = () =>{
    r_seats+=1
    b_seats-=1
    booked.innerHTML=`Total Booked Seats :  ${b_seats}`;
    remaining.innerHTML=`Total Remaining Seats :  ${r_seats}`;
}