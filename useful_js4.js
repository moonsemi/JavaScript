// 비구조화 할당(구조 분해)
// 기본 값 설정
const object = {a : 1};

const {a, b = 2} = object;
console.log(a);
console.log(b);

// 이름을 바꿀 때
const animal = {
  name : '멍멍이',
  type : '개'
};

// const nickname = animal.name;
// console.log(nickname);

const {name : nickname} = animal;
console.log(nickname);

// 배열에 비구조화 할당 시용하기
const array = [1, 2];

const [one, two] = array;

console.log(one);
console.log(two);

// 객체의 깊숙한 곳에서 값 꺼내기
const deepObject = {
  state: {
    information: {
      name: 'semi',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const{name, languages} = deepObject.state.information;
const{value} = deepObject;

const extracted = {
  name, languages, value
}
console.log(extracted)


