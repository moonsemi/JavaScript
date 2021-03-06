const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
SHOWING_CN = "showing", USER_NAME = "user-name"

function saveName(text){
    localStorage.setItem(USER_LS, text);
};

function handleSubmit(e){
    // submit시 새로고침 방지코드
    e.preventDefault();
    // 사용자가 넣을 input 값
    const currentValue = input.value;
    // "Hello currentValue" 부분 함수 호출
    paintGreeting(currentValue);
    // 로컬스토리지에 currentValue 저장 함수 호출
    saveName(currentValue);
};

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const span01 = document.createElement("span");
    const span02 = document.createElement("span");
    span02.classList.add(USER_NAME);
    span01.innerText = `Hello !`;
    span02.innerText = `${text}`;
    greeting.appendChild(span01);
    greeting.appendChild(span02);
};

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    // nobody
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    };
};

function init(){
    loadName();
};

init();