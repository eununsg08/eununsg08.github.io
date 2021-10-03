const toggleTodoBtn = document.body.querySelector('#todoListButton');
const background = document.body.querySelector('#todoListBack');

function makeToDoListBackground() {
    background.classList.toggle("hidden");
}

toggleTodoBtn.addEventListener("click", makeToDoListBackground);

const weatherBtn = document.body.querySelector('#weatherBtn');
const toggleWeather = document.body.querySelector('#weather');

function toSeeweather() {
    toggleWeather.classList.toggle("hidden")
    weatherBtn.classList.toggle("hidden")
}

weatherBtn.addEventListener("click", toSeeweather);