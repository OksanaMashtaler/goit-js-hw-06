const inputRef = document.querySelector("#validation-input");
const value = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (Number(value) === inputRef.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
