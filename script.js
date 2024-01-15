let checkVegetarian = document.getElementById("check-vegetarian");
let checkVegan = document.getElementById("check-vegan");
let checkLowCarb = document.getElementById("check-lowcarb");
let checkPaleo = document.getElementById("check-paleo");

let generateButton = document.getElementById("button-generate");

let vegetarian = false;
let vegan = false;
let lowcarb = false;
let paleo = false;

let checkDietaryOptions = () => {
  checkVegetarian.checked ? (vegetarian = true) : (vegetarian = false);
  checkVegan.checked ? (vegan = true) : (vegan = false);
  checkLowCarb.checked ? (lowcarb = true) : (lowcarb = false);
  checkPaleo.checked ? (paleo = true) : (paleo = false);

  console.log(vegetarian, vegan, lowcarb, paleo);
};

generateButton.addEventListener("click", checkDietaryOptions);
