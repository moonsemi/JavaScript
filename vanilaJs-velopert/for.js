// 반복문
for(let i = 0; i < 10; i++){
    console.log(i);
    // 찍히는 값 = 0 ~ 9
}


// 반복문 + 배열
const names = ['멍멍이', '야옹이', '멍뭉이']

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    // 찍히는 값 = 멍멍이 야옹이 멍뭉이
}


// while문
// 특정 조건을 비교할 때 주로 사용
let i = 0;

while(i < 10){
    console.log(i);
    // 찍히는 값 = 0 ~ 9
    i++;
}

let isFun = false;

while(!isFun){
    console.log(i);
    i++;
    if(i == 30){
        isFun = true;
    }
}


// for ~ of
const numbers = [10, 20, 30, 40, 50]

for(let num of numbers){
    console.log(num);
    // 찍히는 값 = 10 20 30 40 50
}


// 객체의 정보를 받아오는 방법[알아두면 유용!]
const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : '2'
};
  
console.log(Object.keys(doggy));
// 찍히는 값 = ['name', 'sound', 'age']
console.log(Object.values(doggy));
// 찍히는 값 = ['멍멍이', '멍멍', '2']
console.log(Object.entries(doggy));
// 찍히는 값 = [Array[2], Array[2], Array[2]]...

// for ~ in
for(let key in doggy){
    console.log(`${key} : ${doggy[key]}`);
    // 찍히는 값 = name : 멍멍이  sound : 멍멍  age : 2 
}


// continue, break
// continue : 그 다음 거
// break는 끝내는 거
for (let i = 0; i < 10; i++){
    if(i === 2) continue;
    console.log(i);
    // 찍히는 값 = 0, 1, 3, 4, 5, 6, 7, 8, 9
    if(i === 6) break;
     // 찍히는 값 = 0, 1, 3, 4, 5, 6
}


// 반복문 - 연습
// 1 ~ 5까지 더해보기
function sumOf(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum
}

const result = sumOf([1,2,3,4,5]);
console.log(result);
// 찍히는 값 = 15

// 1 ~ 7까지의 숫자 중 3보다 큰 숫자 배열에 넣어보기
function biggerThanThree(numbers){
    const array = [];
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 3){
        array.push(numbers[i]);
      }
    }
    return array;
}
  
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); 
// 찍히는 값 = [4, 5, 6, 7]
  
  
  