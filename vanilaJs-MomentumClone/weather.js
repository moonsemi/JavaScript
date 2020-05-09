const weather = document.querySelector(".js-weather");

// coord : 좌표
const API_KEY = "449e1de2026658b7c7a2066d20fb0fce";
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

function getWeather(lat, lng){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        // 내가 더 추가해보기!
        const skyCondition = json.weather[0].main;
        const nation = json.sys.country;
        weather.innerText = `${skyCondition} ${temp} @${place} in ${nation}`;
    });
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // key와 value 변수명이 같다면! 아래와 같이 표현 가능
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

function handleGeoError(){
    console.log("Can not access geo location");
};

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

function loadCoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords === null){
        askForCoords();
    }else{
        //getWeather
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
};

function init(){
    loadCoords();
};

init();