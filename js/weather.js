const API_KEY = "4b4a6452c8e528ead6fa2fa823527423";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    //fetch를 통해 js로 url을 연다. json을 통해 data를 받아와 저장한다.
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=` - ${data.weather[0].main} / ${parseInt(data.main.temp)}°C `;
    }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

/* getCurrentPosition(argu1, argu2);
argu1 : successCallback 함수
argu2 : errorCallback 함수
*/
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);