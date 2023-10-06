/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Mangaliso Karabo Rodney Mamabolo",
    photo : "images/Karabo.jpeg",
    favoriteFoods : [
        "Orange",
        "Grape",
        "Peach",
        "Kiwi",
        "Banana",
        "Steak",
        "Chocolate cake"
    ],
    hobbies : [
        "Soccer",
        "Chess",
        "American Football",
        "Growing a food forest"
    ],
    placesLived : [
    {
        place: "Sebokeng, South Africa",
        length: "10 years"
    },
    {
        place: "Vereening, South Africa",
        length: "10 years"
    },
    {
        place: "Johannesburg, South Africa",
        length: "2 years"
    },
    {
        place: "Germiston, South Africa",
        length: "8 years"
    },
    {
        place: "Discovery, South Africa",
        length: "4 years"
    },
    {
        place: "Gaborone, Botswana",
        length: "1 year"
    },
    {
        place: "Mochudi, Botswana",
        length: "2 years"
    }

    ]
};



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */


/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

let favoriteFoodList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */

let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

let placesLivedList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});