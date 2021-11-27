const API_KEY = "e708131d2d3653a525c30cbb53555f37";

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lng= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const nameContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        nameContainer.innerText= `location: ${data.name} /`;
        weatherContainer.innerText = `weather: ${data.weather[0].main}`;
    });

}
function onGeoError(){
    alert("Can't find tou. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);