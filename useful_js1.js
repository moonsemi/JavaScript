// 삼항연산자
const array = [];
let text = array.length === 0
  ? '배열이 비어있습니다'
  : '배열이 비어있지 않습니다.'
  console.log(text);

// Truthy&Falsy
// Falsy한 값들
console.log(!undefined);
console.log(!null)
console.log(!0);
console.log(!' ');
console.log(!NaN);

// Truthy : Falsy한 값들을 제외한 것

const value = null;
const truthy = !!value;
// false라면 true -> false
// true라면 false -> true
console.log(truthy);