// const counterValue = document.getElementById("value");
// const buttonDec = document.querySelector('[data-action="decrement"]');
// const buttonInc = document.querySelector('[data-action="increment"]');

// buttonDec.addEventListener("click", () => {
//   counterValue.textContent--;
// });

// buttonInc.addEventListener("click", () => {
//   counterValue.textContent++;
// });

let spanValue = document.getElementById("value");
let buttonDec = document.querySelector('[data-action="decrement"]');
let buttonInc = document.querySelector('[data-action="increment"]');

let counterValue = 0;
function increment() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

buttonInc.addEventListener("click", increment);
buttonDec.addEventListener("click", decrement);
