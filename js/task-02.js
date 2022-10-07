const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liArray = [];

ingredients.forEach((element) => {
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  newLi.textContent = element;
  liArray.push(newLi);
});

const $ingredients = document.querySelector("#ingredients");
$ingredients.append(...liArray);
