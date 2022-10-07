const liItemRef = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${liItemRef.length}`);

liItemRef.forEach((item) => {
  const titleRef = item.querySelector("h2").textContent;
  console.log(`Category: ${titleRef}`);

  const liRef = item.querySelectorAll("ul > li").length;
  console.log(`Elements: ${liRef}`);
});
