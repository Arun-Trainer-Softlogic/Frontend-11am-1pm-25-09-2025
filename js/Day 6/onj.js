// // let studentName = "soandso"
// // let age = 123;
// // let address = "",

// // let studentName = "

// // let student = {
// //     key1 : value1,
// //     key2 : value2,
// // }

// let student = {
//     name : "Adthiya",
//     age : 23,
//     cource : "BCA",

// }

// // console.log(student.name);

// student.city = "Delhi";

// student.age = 26;

// delete student.cource;

// console.log(student);

// let person = {
//     name : "rahul",
//     age : 34,
//     greet : function () {
//         console.log("Hello , "+this.name);

//     }
// }

// person.greet()

// let car = {
//     brand : "Tesla",
//     model : "Model Y",
//     price : 50000,
// }

// console.log(car.brand);

// let { brand , model } = car

// console.log(brand);

// class car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   showDetails() {
//     console.log(`Car :  ${this.brand} ${this.model}`);
//   }
// }

// let car1 = new car("tesla", "Model 3");
// let car2 = new car("BMW" , "x5")

// car1.showDetails();
// car2.showDetails();

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   showProduct() {
//     console.log(` ${this.name} costs $ ${this.price}`);
//   }
// // }

// let laptop = new Product("600", "laptop");
// let pencil = new Product();

// laptop.showProduct();

class Person {
  constructor(name) {
    this.name = name;

    this.greet = function () {
      console.log(`hello , my name is  ${this.name}!`);
    };
  }
}

const p1 = new Person("Bob");
const p2 = new Person("Bob");
console.log(p1.greet === p2.greet);

// ==============================

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Helo , my name is  ${this.name}`);
//   }
// }
// const p1 = new Person("Alice");
// const p2 = new Person("Bob");

// console.log(p1.greet === p2.greet);
