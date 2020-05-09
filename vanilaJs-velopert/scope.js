// scope에 대한 이해
// 변수, 함수가 어디서부터 어디까지 유효한지에 대한 범위
// let, const : block scope로 선언이 된다.
// var로 선언하면 의도치 않게 중복으로 사용 시 오류가 난다. 사용하지 말자!

// hoisting : 자바스크립트에서 아직 선언되지 않은 함수, 변수를 끌어 올려서 사용할 수 있는 작동방식
// let&const는 안된다. 오직 var만 hoistiog 가능
// 코드가 길어지면서 헷갈릴 수 있다. 피하자! 이런 게 있다 정도만 알아두자.
myFunction();

function myFunction(){
  console.log('hello world');
};

console.log(number);

var number = 2;
