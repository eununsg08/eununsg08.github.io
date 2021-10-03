const API_KEY = "1338cdbd7f6d9498d77a9d18e5730ffc"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data)=>{
        const weather = document.querySelector("#weather div:nth-child(1)");
        const city = document.querySelector("#weather div:nth-child(2)");
        const temp = document.querySelector("#weather div:nth-child(3)")
        weather.innerText = `날씨:${data.weather[0].main}`;
        city.innerText = `도시:${data.name}`;
        temp.innerText = `온도:${data.main.temp}`;
    });
}
function onGeoFail() {
    alert("위치를 못찾겠습니다. 날씨를 알 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)