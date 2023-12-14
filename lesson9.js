// class Car{
//   ten;
//   constructor(name){
//     this.ten = name;
//   }

//   // set ten(name){
//   //   this.name = name;
//   // }

//   get ten(){
//     return this.name;
//   }
// }

// let car = new Car("BMW");

// console.log(car.ten);

// car.ten = "Toyota";

// console.log(car.ten);


// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
//   get red() {
//     return this.values[0];
//   }
//   set red(value) {
//     this.values[0] = value;
//   }
// }

// const red = new Color(255, 0, 0);
// red.red = 0;
// console.log(red.red); // 0

// class Car{
//   name;
//   color;
//   #branch;
//   constructor(name, color, branch){
//     this.name = name;
//     this.color = color;
//     this.#branch = branch;
//   }

//   set name(name){
//     this.name = name;
//   }

//   get name(){
//     return this.name;
//   }

//   set color(color){
//     this.color = color;
//   }

//   get color(){
//     return this.color;
//   }

//   get branch(){
//     return this.#branch;
//   }

//   set branch(branch){
//     this.#branch = branch;
//   }

//   getFullName(){
//     return this.#branch + this.name;
//   }

//   driving(){
//     console.log("I'm driving "+ this.name);
//     this.#honk();
//   }

//   decorate( decal){
//     console.log(this.name + " Ahihi I have a new decal "+ decal);
//   }

//   #honk(){
//     console.log("My sound so fancy!")
//   }
// }

// let car = new Car("S650", "blue", "BMW");
// car.driving();
// car.decorate(" pink decal");
// console.log(car.name);
// console.log(car.color);
// console.log(car.getFullName());
// car.branch = "Toyota";
// console.log(car.branch);


// class Animal{
//   name;
//   #defaultName = "Animal";

//   constructor(name){
//     this.name = name;
//   }

//   get defaultName(){
//     return this.#defaultName;
//   }

//   printName(){
//     let na = this.name == undefined || this.name == null ? this.#defaultName : this.name;
//     console.log("My name is: "+ na);
//   }

//   #defaultAction(){
//     console.log("do something");
//   }
// }

// class Mammal extends Animal{

// }

// class Fish extends Animal{

// }

// class Dog extends Animal{
//   constructor(name, legs){
//     super(name);
//     this.legs = legs;
//   }
//   sound(){
//     console.log("Bark bark");
//   }

//   printName(message){
//     if(message != null && message != undefined){
//       this.#printWithMessage(message);
//     }else{
//       this.#printWithOutMessage();
//     }
//   }

//   #printWithOutMessage(){
//     console.log("My Cho name is: " + this.name);
//   }

//   #printWithMessage(message){
//     console.log("My Cho name is: " + this.name + " " + message);
//   }
  
// }

// let dog1 = new Dog("Tony Teo");
// let dog2 = new Dog();

// dog1.printName("Ahihi");
// dog1.printName();

class Animal {
  constructor(){
    if(new.target === Animal){
      throw new Error("Abstract class can not be created!");
    }
  }

  eat(){
    throw new Error("Method \"eat()\" must be implemented by sub class");
  }
}

class Mammal extends Animal{
  constructor(name){
    super();
    this.name = name;
  }
}

let animal =  new Mammal("Monkey");
animal.eat();
