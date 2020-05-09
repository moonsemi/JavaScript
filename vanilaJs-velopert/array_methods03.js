// reduce : 배열 연산하기
const numbers = [1, 2, 3, 4, 5];

// 각 원소 다 더하기
let sum = 0;
numbers.forEach(n => {
  sum += n;
})
console.log(sum);

const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum2);

// 원소들의 평균값 구하기
const avg = numbers.reduce((accumulator, current, index, array) => {
  if(index === array.length - 1){
  // 배열은 0부터 시작이니까 0, 1, 2, 3, 4
    return(accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);


// reduce의 다른 예시
// 배열 안 원소의 해당 갯수 구하기
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'c', 'e'];
const counts = alphabets.reduce((acc,current) => {
  if(acc[current]){
    acc[current] += 1;
  }else{
    acc[current] = 1;
  }
  return acc;
}, {})

console.log(counts);


// 배열 내장함수 - 퀴즈문제
function countBiggerThanTen(numbers) {
    // return numbers.reduce((acc, current) => {
    //     if (current > 10) {
    //       return acc + 1;
    //     } else {
    //       return acc;
    //     }
    // }, 0);

    // let count = 0;
    // numbers.forEach(n => {
    //   if(n > 10){
    //     count++;
    //   }
    // });
    // return count
    return numbers.filter(n => n > 10).length;
}
  
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
