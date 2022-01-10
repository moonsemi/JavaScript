// 함수
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello(name) {
    console.log("Hello, " + name + "!");
}
hello("semi");


// 함수 - ES6문법 중 Template Literal
function helloTL(name) {
    console.log(`Hello, ${name}!`);
}
helloTL("semi");


// 함수 - 연습
// getGrade
function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score === 89) {
        return "B+";
    } else if (score >= 80) {
        return "B";
    } else if (score === 79) {
        return "C+";
    } else if (score >= 70) {
        return "C";
    } else if (score === 69) {
        return "D+";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const grade = getGrade(68);
console.log(grade);


// 화살표 함수
const add2 = (a, b) => {
    return a + b;
};
const sum2 = add2(1, 2);
console.log(sum2);

// 위 코드 더 간결하게 수정
const add3 = (a, b) => a + b;
const sum3 = add3(1, 2);
console.log(sum3);

const hello2 = name => {
    console.log(`Hello, ${name}!`);
};
hello2("semi");

