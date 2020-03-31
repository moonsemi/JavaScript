// spread&rest

// spread (...)
const slime = {
    name : '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute : 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSllime = {
    ...purpleCuteSlime,
    color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSllime);

// 배열에서 사용하기
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
// const anotherAnimals = animals.concat('비둘기');

console.log(animals);
console.log(anotherAnimals);

// 중복으로 사용하기
const numbers = [1, 2, 3, 4, 5]

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

// 함수 인자에서의 spread
// 파라미터 : 함수에서 받아오는 값, 인자 : 함수를 사용할 때 넣어주는 값
function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...numbers));

// 퀴즈
function max(...numbers) {
    return numbers.reduce(
        (acc, current) => (current > acc ? current : acc),
        numbers[0]
    );
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
  

// rest
// spread와 반대, 모아주는 역할
// 객체, 배열, 함수의 파라미터에서 사용

// 객체
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};
  
const{color, ...cuteSlime} = purpleCuteSlime;
console.log(cuteSlime);

const{attribute, ...slime} = cuteSlime;
console.log(slime);

// 배열
// 배열에서의 rest는 맨 마지막에 와야한다.
const numbers = [0, 1, 2, 3, 4, 5, 6]

const[one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

// 함수 파라미터에서의 rest
function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
  