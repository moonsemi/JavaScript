// 객체
const dog = {
  name: "순덕",
  age: 2,
  "key with space": "스페이스는 이렇게"
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

// 1
// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//   console.log(text);
// };

// 2
// 객체 - 비구조화 할당(객체 내부에서 밖으로 빼와서 선언)
// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// };

// 3
// 더 간단한 소스코드
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);

const { name } = ironMan;
console.log(name);


// 객체 안에 함수 넣기
const dog2 = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function() {
    console.log(this.sound);
    // 함수에서 this는 function에서 자기가 속해있는 곳에서 자신(화살표 함수에서 작동x)
  }
};

const cat = {
  name: "야옹이",
  sound: "야옹~"
};

cat.say = dog2.say;
cat.say();
dog2.say();


// Getter함수 (특정 값을 조회할 때 사용)
// return값 필요
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다!");
    return this.a + this.b;
  }
};
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
// numbers.a = 5;
// console.log(numbers);

// Setter함수(특정 값을 설정할 때 사용)
// 파라미터 필요
const dog3 = {
  _name: "멍멍이",
  set name(value) {
    console.log("이름이 바뀝니다.." + value);
    this._name = value;
  }
};
console.log(dog3._name);
dog3.name = "뭉뭉이";
console.log(dog3._name);

// 숫자 바뀔때마다 sum값 업데이트하기
const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._a = value;
    this.calculate();
  }
};

console.log(numbers2.sum);
numbers2.a = 5;
console.log(numbers2.sum);
