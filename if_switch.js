// 비교연산자
// if문 안 특정 조건이 만족될 때 실행
const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log("if문 안의 a 값은" + a);
}
console.log("if문 밖의 a 값은" + a);
// var로 선언하지 않는 이유(변수 선언이 정확하지 않다. 이제는 사용x)


const b = 8;
if (b === 5) {
  console.log("b의 값은 5입니다!");
} else if (b === 8) {
  console.log("b의 값은 8입니다!");
} else {
  console.log("b의 값은 5도 아니고 8도 아닙니다!");
}


const device = 'iphone';
switch (device){
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!')
    break;
  case 'galaxy':
    console.log('갤럭시!')
    break;
  default:
    console.log('이 기기를 모르겠어요..')
}
// break : case 한 부분 안에서 실행하고 끝
// default : 아무것도 일치 하지 않으면 실행