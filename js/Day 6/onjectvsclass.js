// class

// blue print for objects

// class car { ...car} = shared
// (methords lives on prototype )

// object let car1 = new car("toyota", "red" )
// (each has its own data (properties))

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;

//   }
//   drive() {
//     console.log(`${this.brand} is driving`);
//   }
// }

// let car1 = new Car("toyota", "red");

// car1.drive();

// function Person(name) {
//   this.name = name;
// }

// methord to prototype
// Person.greet = function () {
//   console.log(`Hello , iam ${this.name}`);
// };

// const p1 = new Person("AA");
// const p2 = new Person("COB");

// console.log(p1.greet === p2.greet);






| Concept       | Description                                                       | Stored Where         |
| ------------- | ----------------------------------------------------------------- | -------------------- |
| **Class**     | Blueprint that defines constructor + prototype methods            | In memory once       |
| **Object**    | Instance with its own property values                             | In memory per object |
| **Prototype** | Shared object that holds methods/properties used by all instances | Shared among all     |
           