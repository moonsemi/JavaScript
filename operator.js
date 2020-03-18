//산술연산자
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);

// 논리연산자
// 처리되는 순서 : 1. NOT - 2. AND - 3. OR
// NOT !
const b = !false;
console.log(b);
// AND &&
const c = true && true;
console.log(c);
// 둘 다 true여야 true
// OR ||
const d = true || false;
console.log(d);
// true가 한 개 이상 있어도 true

// 예시)
const value = !((true && false) || (true && false) || !false);
// !(true && false || true && false || true)
// !(false || false || true)
// !(true)
// false
console.log(value);

// 비교연산자
const e = 1;
const f = 1;
const equals = e === f;
// '=='도 작동하긴 하지만 '==='가 더 정확하게 작동한다.
console.log(equals);

const g = "g";
const h = "h";
const notEquals = g !== h;
console.log(notEquals);
