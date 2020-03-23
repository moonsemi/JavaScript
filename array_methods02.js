// shift : 앞에서부터 원소를 배열에서 추출
const numbers = [10, 20, 30, 40];

const value = numbers.shift();
console.log(value);
console.log(numbers);


// pop : 뒤에서부터 원소를 배열에서 추출
const numbers2 = [10, 20, 30, 40];
const values = numbers2.pop();
console.log(values);
console.log(numbers2);


// unshift : 원소를 배열에 앞에서부터 삽입 
const numbers3 = [10, 20, 30, 40];
// 뒤의 원소부터 삽입 및 추출
numbers3.unshift(5);
// numbers3.shift(5);
console.log(numbers3)

// 뒤의 원소부터 삽입 및 추출
// numbers3.push(5);
// numbers3.pop(5);


// concat : 여러 개의 배열을 하나의 배열로 합져줌
// 기존의 배열을 건드리지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]

const concated = arr1.concat(arr2);
console.log(concated);


// join : 배열 안에 있는 값들을 문자열 형태로 합쳐줌
const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));
