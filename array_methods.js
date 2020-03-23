
// 배열 내장함수
const  superHeroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

// 이건 for문
for (let i = 0; i < superHeroes.length; i++){
  console.log(superHeroes[i]);
}

// 배열 내장함수 - forEach 
function print(hero){
  console.log(hero);
}
// superHeroes.forEach(print);

// 같은 데 코드 간단히
superHeroes.forEach(function(hero){
  // console.log(hero);
})

// 같은 데 화살표 함수 사용하여 더 간단히
superHeroes.forEach(hero => {
  console.log(hero);
})


// 배열 내장함수 - map
const array = [1, 2, 3, 4, 5, 6, 7, 8]

const squareed = array.map(n => n * n);
console.log(squareed);

const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'world'
  }
]
const texts = items.map(item => item.text);
console.log(texts);


// indexOf
const superHeroes2 = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스터레인지'];
const index = superHeroes2.indexOf('토르');
console.log(index);

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
]


// findIndex : 특수한 조건으로 몇 번째인지 찾기
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);


// find : 특수한 조건으로 찾아 값을 반환
const todo = todos.find(todo => todo.id === 3);
console.log(todo);


// filter
// const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);


// splice : 특정 항목을 제거할 때 사용
const numbers = [10, 20, 30, 40];
const index3 = numbers.indexOf(30);
const spliced = numbers.splice(index3, 2);
console.log(spliced);
console.log(numbers);


// slice : 기존 배열에 영향 X
const sliced = numbers.slice(0, 2);
console.log(sliced);

