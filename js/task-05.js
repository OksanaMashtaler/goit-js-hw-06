const refs = {
  input: document.querySelector("#name-input"),
  nameUser: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameUser.textContent = event.currentTarget.value;
}
