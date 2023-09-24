/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Mangaliso Karabo Rodney Mamabolo";
let currentYear = new Date().getFullYear();
const profilePicture = "images/Karabo.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img[src='images/Karabo.jpeg']");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
const element = document.getElementById("year");
element.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFood = ["Orange, Grape, Peach, Kiwi, Banana, Chocolate cake"];
foodElement.textContent = favoriteFood.join(", ");
const moreFavoriteFood = " Biltong"
favoriteFood.push(moreFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join('<br>')}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join('<br>')}`;
//foodElement.textContent = favoriteFood.join('\n');
