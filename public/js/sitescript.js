const hHand = document.querySelector('#h-hand');
const mHand = document.querySelector('#m-hand');
const sHand = document.querySelector('#s-hand');

let timer = setTimeout(function setClock() {
    // const current = new Date();
    
    // const hAngle = current.getHours() * 30 + current.getMinutes() * 0.5;
    // const mAngle = current.getMinutes() * 6;
    // const sAngle = current.getSeconds() * 6;

    // hHand.style.transform = `rotate(${hAngle}deg)`;
    // mHand.style.transform = `rotate(${mAngle}deg)`;
    // sHand.style.transform = `rotate(${sAngle}deg)`;
    
    //timer = setTimeout(setClock, 1000);
}, 1000);