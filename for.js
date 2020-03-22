// 반복문
for(let i = 0; i < 10; i++){
    console.log(i);
}


// 반복문 + 배열
const names = ['멍멍이', '야옹이', '멍뭉이']

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}


// while문
// 특정 조건을 비교할 때 주로 사용
let i = 0;

while(i < 10){
    console.log(i);
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
}


// 객체의 정보를 받아오는 방법
const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : '2'
};
  
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));


// for ~ in
for(let key in doggy){
    console.log(`${key} : ${doggy[key]}`);
  }