// function : 함수
// 하나의 코드조각으로 내가 원하는 만큼 쓸 수 있는 것!
function sayHello(name, age){
    console.log('Hello!', name, "I'm", age, "years old.")
}
// 매개변수(parameter) : name, age - '함수의 정의' 부분에 나열되어 있는 변수(variable)

sayHello("Semi", 26);
// 전달인자(argument) : 'Semi', 26 :  - 함수를 호출할 때 전달되는 실제 값(value)

// 찍히는 값 = Hello! Semi I'm 26 years old.


// 함수에게 외부에 있는 데이터를 주는 방법 
// : 매개변수(parameter)와 전달인자(argument) 사용

// console.log(); console : 객체, log : 자바스크립트 내장함수
// 내장함수를 사용할수도 있고 개발자가 직접 만들어 사용할 수 있다.

function sayHello(name, age){
    return `Hello ${name} I'm ${age} years old.`;
}
// 템플릿 리터럴(Template literal)

const greetSemi = sayHello('semi', 26);
console.log(greetSemi);
// 찍히는 값 = Hello semi! I'm 26 years old. 


const calculator = {
    plus : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    multiple : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a / b;
    }
};

const plus = calculator.plus(5, 5);
console.log(plus); 
// 찍히는 값 = 10
const minus = calculator.minus(5, 5);
console.log(minus);
// 찍히는 값 = 0
const multiple = calculator.multiple(5, 5);
console.log(multiple);
// 찍히는 값 = 25
const divide = calculator.divide(5, 5);
console.log(divide);
// 찍히는 값 = 1

console.log(`plus: ${plus}, minus: ${minus}, multiple: ${multiple}, divide: ${divide}`);