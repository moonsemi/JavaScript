const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); 
    const day = date.getDay
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    // setInterval 사용하기! 계속 작동하는 것이 아니라 새로고침 할 때만 업데이트 되어 보이니까 setInterval로 매 초 업데이트 시기기
    setInterval(getTime, 1000);
}

init();