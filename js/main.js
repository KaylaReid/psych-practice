function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
const data = loadData("PsychData");

console.log("I grabbed psych data", data);

const body = document.querySelector("body");
const script = document.querySelector("script");
const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "wrapper");
body.insertBefore(mainDiv, script);
const wrapper = document.querySelector(".wrapper");

document.querySelector(".wrapper").addEventListener("click", function (event){
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
    if(event.target.className === "gus-button"){
        addRandomGusName();
    }
});

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
    data.characters.forEach(item => {
        cardDiv.innerHTML += 
        `<div class="char-card">
            <div>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div>
                <h3>${item.name}</h3>
                <h4>${item.job}</h4>
                <p>${item.bio}</p>
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
    data.cast.forEach(item => {
        cardDiv.innerHTML += 
        `<div class="cast-card">
            <div>
                <h3>${item.name}</h3>
                <h4>${item.birth}</h4>
                <p>${item.bio}</p>
            </div>
            <div>
                <img src="${item.image}" alt="${item.name}">
            </div>
        </div>`
    });
}
addCast();

// this one does the cool shit
function addRandomGusName() {
    let gusButton = document.querySelector(".gus-button");
    let gusCard = document.querySelector(".gus-card");
    gusCard.removeChild(gusButton);
    let min = Math.ceil(0);
    let max = Math.floor(136);
    let index = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    gusCard.innerHTML +=
        `<p class="gus-names">${data.gusNames[index]}</p>
        <button class="gus-button">Get Another Name!</button>`
}
// this function makes and prints the button 
function addGusNames(){
    mainContent.innerHTML +=
    `<div class="gus-container">
    <h2>Get a Gus Name!</h2>
    <div class="gus-card"></div>
    </div>`
    let gusCard = document.querySelector(".gus-card");
    gusCard.innerHTML +=
    `<button class="gus-button">Get Name!</button>`
}
addGusNames();


// console.log("gus total", data.gusNames.length); //commented out cause it was clever

function addEps(){
    mainContent.innerHTML +=
    `<div class="episode-container">
        <h2>Just a few of the best episodes</h2>
        <div class="episode-card-container"></div>
    </div>`
    const epCardContainer = document.querySelector(".episode-card-container");
    data.favEps.forEach(item => {
    epCardContainer.innerHTML +=
    `<div class="ep-card">
        <div>
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div>
            <h3>${item.title}</h3>
            <h4>${item.airdate}</h4>
            <p>${item.description}</p>
            <p><b>A note about the episode from me:</b> ${item.why}</p>
        </div>
    </div>`
    });
}
addEps();

function showThemes(){
    mainContent.innerHTML += 
        `<div class="showthemes-container">
            <h2>Themes of the Show</h2>
            <div class="showthemes-card-container"></div>
        </div>`
    const themesCardContainer = document.querySelector(".showthemes-card-container");
    data.showThemes.forEach(item =>{
        themesCardContainer.innerHTML += 
            `<div class="theme-card">
                <h3>${item.theme}</h3>
                <div class="theme-image-${item.theme.replace(" ", "").replace("'", "")}">
                    <img src="${item.images[0]}" alt"${item.theme}${1}">
                    <img src="${item.images[1]}" alt"${item.theme}${2}">
                    <img src="${item.images[2]}" alt"${item.theme}${3}">
                </div>
                <p>${item.details}</p>
            </div>`;
    });
}
showThemes();
