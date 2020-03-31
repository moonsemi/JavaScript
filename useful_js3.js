// 함수의 기본 파라미터
// 함수의 파라미터 값을 넣지 않았을 때 기본값으로 사용할 값을 지정하는 문법

// 원주율 구하기 함수
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea(4);
console.log(area);


// 조건문 더 스마트하게 쓰기
// 특정 값이 여러가지 중 하나일 때
// includes 
const isAnimal = text => ['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));
// 코드가 짧다고 무조건 좋은 코드인 것이 아니라
// 짧으면서도 읽었을 때 어떤 역할을 하는 지 알 수 있는 코드가 좋은 코드다!

// 객체 이용하기
function getSound(animal){
  const sounds = {
    개 : '멍멍',
    고양이 : '야옹',
    참새 : '짹짹',
    비둘기 : '구구 구 구'
  }
  return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));