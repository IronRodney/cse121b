/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");


/* async displayTemples Function */

let templeList = [];

const displayTemples = (templeList) => {
    templeList.forEach(temple => {
        const articleElement = document.createElement("article");

        const TempleNameH3 = document.createElement("h3");
        TempleNameH3.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(TempleNameH3);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json()
    if(response.ok){
        displayTemples(templeList)
    } else {
        console.log("Data could not be fetched!")
    }

};


/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

        case "notutah":
            const nonUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break;

        case "older":
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case "all":
            displayTemples(temples);
            break;
        
        default:
            console.log("Invalid filter option.");
            break;

    };
};

/* Event Listener */

const sortByDropdown = document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);

});

getTemples();