const card1 = document.querySelector('.c1');
const card2 = document.querySelector('.c2');
const card3 = document.querySelector('.c3');
const card4 = document.querySelector('.c4');
const card5 = document.querySelector('.c5');
const card6 = document.querySelector('.c6');
const dil1 = document.querySelector('.dil1');
const dil2 = document.querySelector('.dil2');

const button = document.querySelector('.btn');
 function move1(e){
    card1.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card1.style.zIndex="6";
    dil1.style.left="40%";
    dil2.style.left="20%";
 }
 function move2(e){
    card2.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card2.style.zIndex="7";
 }
 function move3(e){
    card3.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card3.style.zIndex="8";
 }
 function move4(e){
    card4.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card4.style.zIndex="9";
 }
 function move5(e){
    card5.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card5.style.zIndex="10";
 }
 function move6(e){
    card6.style.transform = "rotateY(-180deg) translateX(19.3rem)";
    card6.style.zIndex="11";
 }
card1.addEventListener('click', move1);
card2.addEventListener('click', move2);
card3.addEventListener('click', move3);
card4.addEventListener('click', move4);
card5.addEventListener('click', move5);
card6.addEventListener('click', move6);


function flip(){
    setTimeout(() => {
        
        card6.style.transform = "rotateY(0deg) translateX(0rem)";
        card6.style.zIndex="1";
        dil1.style.left="63%";
        dil2.style.left="40%";
       

    },300);

    setTimeout(() => {
        card5.style.transform = "rotateY(0deg) translateX(0rem)";
        card5.style.zIndex="2";

    }, 600);
setTimeout(() => {
    card4.style.transform = "rotateY(0deg) translateX(0rem)";
    card4.style.zIndex="3";

}, 900);
setTimeout(() => {
    card3.style.transform = "rotateY(0deg) translateX(0rem)";
    card3.style.zIndex="4";

}, 1200);

setTimeout(() => {
    
    card2.style.transform = "rotateY(0deg) translateX(0rem)";
    card2.style.zIndex="5";

}, 1500);

setTimeout(() => {
    
    card1.style.transform = "rotateY(0deg) translateX(0rem)";
    card1.style.zIndex="6";
    
}, 1800);



}

button.addEventListener('click',flip);


