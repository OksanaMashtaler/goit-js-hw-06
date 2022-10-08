const refs = {
  input: document.querySelector("#name-input"),
  nameUser: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (refs.nameUser.textContent = "Anonymous")
    : (refs.nameUser.textContent = event.currentTarget.value);
}
