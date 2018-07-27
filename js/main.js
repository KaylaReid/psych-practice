function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
const data = loadData("Psych Data");

console.log("I grabbed psych data", data);

const body = document.querySelector("body");
const script = document.querySelector("script");
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "wrapper");
body.insertBefore(mainDiv, script);
const wrapper = document.querySelector(".wrapper");

function startHTML(){
    wrapper.innerHTML +=
    `<header>
        <h1>psych</h1>
    </header>
    <main class="content-container">
    </main>
    <footer>
        <p><small>&copy; Kayla Reid</small></p>
        <a href="https://github.com/KaylaReid">My GitHub</a>
    </footer>`
}
startHTML();

const mainContent = document.querySelector(".content-container");
function addChars(){
    mainContent.innerHTML += 
    `<div class="character-container">
        <h2>Characters</h2>
        <div class="char-card-container"></div>
    </div>`
    const cardDiv = document.querySelector(".char-card-container");
    data.characters.forEach(index => {
        cardDiv.innerHTML += 
        `<div class="char-card">
            <div>
                <img src="${index.image}" alt="${index.name}">
            </div>
            <div>
                <h3>${index.name}</h3>
                <h4>${index.job}</h4>
                <p>${index.bio}</p>
            </div>
        </div>`
    });
}
addChars();

function addCast(){
    mainContent.innerHTML += 
    `<div class="cast-container">
        <h2>Cast</h2>
        <div class="cast-card-container"></div>
    </div>`
    const cardDiv = document.querySelector(".cast-card-container");
    data.cast.forEach(index => {
        cardDiv.innerHTML += 
        `<div class="cast-card">
            <div>
                <h3>${index.name}</h3>
                <h4>${index.birth}</h4>
                <p>${index.bio}</p>
            </div>
            <div>
                <img src="${index.image}" alt="${index.name}">
            </div>
        </div>`
    });
}
addCast();

function addRandomGusName() {
    let gusButton = document.querySelector(".gus-button");
    let gusCard = document.querySelector(".gus-card");
    gusCard.removeChild(gusButton);
    let min = Math.ceil(0);
    let max = Math.floor(136);
    let index = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    gusCard.innerHTML +=
    `<p>${data.gusNames[index]}</p>
    <button class="gus-button">Get Name!</button>`
    gusButton = document.querySelector(".gus-button");
    gusButton.addEventListener("click", addRandomGusName)
}
function addGusNames(){
    mainContent.innerHTML +=
    `<div class="gus-container">
    <h2>Get a Gus Name!</h2>
    <div class="gus-card"></div>
    </div>`
    let gusCard = document.querySelector(".gus-card");
    gusCard.innerHTML +=
    `<button class="gus-button">Get Name!</button>`
    const gusButton = document.querySelector(".gus-button");
    gusButton.addEventListener("click", addRandomGusName);
}
addGusNames();

console.log("gus total", data.gusNames.length);





