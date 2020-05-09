// 단축 평가 논리 계산법(short-circuit evaluation)
// && 연산자
console.log(true && 'hello')
// 찍히는 값 = hello
console.log(false && 'hello')
// 찍히는 값 = false
console.log('hello', 'bye')
// 찍히는 값 = bye
console.log(null && 'hello');
// 찍히는 값 = null
console.log(undefined && 'hello')
// 찍히는 값 = undefined
console.log(0 && 'hello')
// 찍히는 값 = 0
console.log('' && 'hello')
// 찍히는 값 = ''
// &&연산자에서 앞이 truthy하면 뒤에 값이 찍히고
// falsy하면 falsy한 값이 찍힌다.
// 특정 값이 유효할 떄 어떤 값을 조회할 때 사용 

// 예시
const dog = {
  name : '멍멍이'
};

function getName(animal){
  return animal && animal.name;
}

const name = getName(dog);
console.log(name);
// 멍멍이 
// getName 파라미터가 없다면 = undefined

const object = {name : 1};

const o_name = object && object.name;
console.log(o_name);
// 오류 없이 잘 나온다. &&연산자 앞이 falsy하면 falsy한 값이
// truthy하면 truthy한 값이 나온다.

// ||연산자
console.log(false || 'hello');
console.log(null || '널이다')
console.log(undefined || 'undefined다')

console.log(1 || '음?')
console.log(true || '여기 안봐요')
console.log('와와' || '여기 안본다니까!')
// ||연산자에서 앞이 truthy하면 앞에 값이 찍히고
// falsy하면 || 뒤에 값이 찍힌다