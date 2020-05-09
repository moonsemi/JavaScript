const semiInfo = {
  name : "semi",
  age : 26,
  lang : ["html5", "css3", "javascript"],
  myType : [
    {
      lang : "html5",
      diff : "easy"
    },
    {
      lang : "css3",
      diff : "easy"
    },
    {
      lang : "javascript",
      diff : "hard"
    }
  ]
} 
console.log(semiInfo.name);
// 찍히는 값 = semi
console.log(semiInfo.lang[0]);
// 찍히는 값 = html5
console.log(semiInfo.myType[1].diff);
// 찍히는 값 = easy