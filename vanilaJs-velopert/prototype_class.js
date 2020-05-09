// 프로토타입과 클래스 - 객체 생성자
// 함수 이름을 대문자로 한다. 2. new라는 키워드를 사용한다.
function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function(){
    //   console.log(this.sound);
    // }
}
  
// 프로토타입 : 어떤 값을 함께 재사용하고 싶을 때 사용
Animal.prototype.say = function(){
    console.log(this.sound);
}
  
// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');
  
// dog.say();
// cat.say();
  
  
// 객체 생성자 상속하기
function Dog(name, sound){
    Animal.call(this, '개', name, sound);
}
function Cat(name, sound){
    Animal.call(this, '고양이', name, sound);
}
  
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;
  
const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
  
dog.say();
cat.say();


// ES6 - class
class Animal {
    constructor(type, name, sound){
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say(){
      console.log(this.sound);
    }
}
  
class Dog extends Animal{
    constructor(name,sound){
      super('개', name, sound);
    }
}
class Cat extends Animal{
    constructor(name,sound){
      super('고양이', name, sound);
    }
}
  
const dog = new Dog('멍멍이', '멍멍')
const cat = new Cat('야옹이', '야옹')
  
  
// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');
  
dog.say();
cat.say();
  
  
// 연습
class Food{
    constructor(name){
      this.name = name;
      this.brands = [];
    }
    addBrand(brand){
      this.brands.push(brand);
    }
    print(){
      console.log(`${this.name}을 파는 음식점`)
      console.log(this.brands.join(', '));
    }
}
  
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');
  
const chicken = new Food('치킨');
chicken.addBrand('굽네 치킨');
chicken.addBrand('bhc');
  
pizza.print();
chicken.print();
  
  
  
  
  