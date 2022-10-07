const counterValue = document.getElementById("value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');

buttonDec.addEventListener("click", () => {
  counterValue.textContent--;
});

buttonInc.addEventListener("click", () => {
  counterValue.textContent++;
});
