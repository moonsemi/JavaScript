// 배열
const array = [1, 2, '33', {}]
const array2 = [1, true, {a : 1}, [1, 2, 3, 4] ]
console.log(array[0]);
console.log(array2[1]);

const objects = [
  {name : '멍멍이'},
  {name : '야옹이'}
];
console.log(objects);
console.log(objects[1]);

// 배열에 새로운 항목 추가하기
// push (배열 내장함수)
objects.push({
  name : '멍뭉이'
})
console.log(objects[2]);
console.log(objects.length);

