const spanRef = document.getElementById("text");
const textRef = document.getElementById("font-size-control");

textRef.addEventListener("input", (event) => {
  spanRef.style.fontSize = event.currentTarget.value + "px";
});
