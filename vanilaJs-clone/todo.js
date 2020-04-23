const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(e){
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // const cleanToDos = toDos.filter(function(toDo){
    //     return toDo.id !== parseInt(li.id);
    // });
    // 화살표함수로 표현!
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}; 

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    // toDoList.appendChild(li); 
    // 원페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 8개
    if(newId < 9){
        toDoList.appendChild(li);
    }else{
        alert("최대 8개까지 작성할 수 있습니다!")
    }
    const toDoObj = {
        text: text,
        id: newId
    };
    // toDos.push(toDoObj);
    // 원페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 8개
    if(newId < 9){
        toDos.push(toDoObj);
    }
    saveToDos();
};

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 엔터 누르면 input 안 초기화

    toDoInput.value = "";
};

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    // localStorage에 TODOS_LS = "toDos" key값이 있다면
    if(loadedToDos !== null){
        // 투두리스트가 한 개 이상일 수 있으니 객체로 담자!
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
};

init();