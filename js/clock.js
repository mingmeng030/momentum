const clock = document.querySelector("h2#clock");

function getClock(){ //매초 시분초를 갱신
    const date= new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock(); 
setInterval(getClock, 1000); //1000ms = 1s