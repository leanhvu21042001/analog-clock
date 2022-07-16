const hHand = document.querySelector('#h-hand');
const mHand = document.querySelector('#m-hand');
const sHand = document.querySelector('#s-hand');

let timer = function () {
  const time = new Date();
  let hours = time.getHours() * 30 + time.getHours() * 0.5;
  let minutes = time.getMinutes() * 6;
  let seconds = time.getSeconds() * 6;

  hHand.style.transform = `rotate(${hours}deg)`;
  mHand.style.transform = `rotate(${minutes}deg)`;
  sHand.style.transform = `rotate(${seconds}deg)`;

  setTimeout(timer, 1000);
}
timer();