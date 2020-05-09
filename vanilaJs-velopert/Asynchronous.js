// 비동기 처리
// Ajac Web api 요청, 파일 읽기, 암호화/복호화, 작업 예약시 주로 사용
// setTimeout
function work(callback){
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i < 1000000000; i++){

    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end - start)
  }, 0)
}

console.log('작업 시작!')
work((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다고 해요');
});
console.log('다음 작업!')