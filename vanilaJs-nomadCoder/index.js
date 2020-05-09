console.log('Im Working. Im JS. Im Beautiful.');

// const title = document.getElementById("title");
// const title = document.querySelector("#title");
// title.innerHTML = "Hi From JS !";
// title.style.color = "red";

// const BASE_COLOR = "rgb(255, 255, 255)";
// const OTHER_COLOR = "#0000ff";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// };

// function init(){
//     title.style.color = BASE_COLOR;
//     // 폰트컬러 베이스컬러로 초기화
//     title.addEventListener("click", handleClick);
//     // 이벤트 함수 호출 - 실행
// }

// init();


// # Event, Event Handler(=Event Listener)
// 이벤트 핸들러(=리스너)란 이벤트가 발생했을 때 그 처리를 담당하는 함수이다.
// function handleClick(){
//     title.style.color = "blue";
// };

// title.addEventListener("click", handleClick);


// # If/Else, And/Or 예시
// prompt는 구식! 지금은 잘 안쓴다.
// const age = prompt("How old are you?");

// if(age >= 18 && age <= 21){
//     console.log("You can drink if you want!");
// }else if(age > 21){
//     console.log("Go ahead");
// }else{
//     console.log("You are too young to drink")
// };


// # ononline, offline함수 : 내 컴퓨터의 인터넷 연결상태 확인 함수
function handleOffLine(){
    console.log("Bye Bye!");
};
function handleOnLine(){
    console.log("Welcome back!")
};

window.addEventListener('offline', handleOffLine);
window.addEventListener('online', handleOnLine);


// # DOM -If/Else - Function 연습
const title = document.getElementById("title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    };

};

function init(){
    title.addEventListener("click", handleClick);
};

init();
// 위 코드의 문제점! h1의 class는 "clicked"로 지정했기 때문에 다른 class를 쓸 수 없다.

// 그래서 해결방법 코드!
function handleClick(){
    // classList : 읽기 전용 프로퍼티!
    // classList.contains(String) : 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    };

};

function init(){
    title.addEventListener("click", handleClick);
};

init();

// toggle 메서드를 사용하면 더 간결한 코드를 짤 수 있다.
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
};

function init(){
    title.addEventListener("click", handleClick);
};

init();

