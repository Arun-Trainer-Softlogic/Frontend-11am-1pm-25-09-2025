// let name = "Aditi";

// let age = 22;

// console.log(`my name is  ${name} i am so and so age , my age is ${age}`);

// let person = {
//     name : 'rahul',
//     age : 200,
//     city : "mars city",
// }

// console.log(person);

// let {name , age  } = person

// console.log(city);

// console.log(person.city);

// function greet(name = "lakshu") {
//   console.log("hello " + name);
// }


// greet();
// greet("Aditii");

// spread

// let arr1 = [1,2,3]
// let arr2 = [...arr1,4,5,6]




// console.log(arr2);


// rest


// function sum (...numbers){
//     return numbers.reduce((a,b)=> a+b);
// }

// console.log(sum(1,2,3,4,));





// function counter(){
//     let count = 0 
//     return function(){
//     count++
//     console.log("clicked " , count , "times");
    
// }
// }

// let clickedCount = counter();
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()
// clickedCount()




// function download(callback) {
//   console.log("Downloading...");
//   setTimeout(() => {
//     console.log("Download Complete!");
//     callback();
//   }, 2000);
// }

// function finish() {
//   console.log("File saved successfully!");
// }

// download(finish);



// let task = new Promise((resolve, reject) => {
//   let done = false;
//   setTimeout(() => {
//     done ? resolve("Task successful!") : reject("Error: Task failed!");
//   }, 2000);
// });

// task
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));





// async function processOrder() {
//   try {
//     let order = await new Promise(resolve => setTimeout(() => resolve("Order placed!"), 2000));
//     console.log(order);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// processOrder();

// let fruits = ["apple", "banana"];
// let more = [...fruits, "mango"];
// console.log(more);

// let user = { name: "Aditi", age: 22 };
// let { name } = user;
// console.log("Hello", name);



// | Concept               | Description                        | Example                                         |
// | --------------------- | ---------------------------------- | ----------------------------------------------- |
// | **Closure**           | Function remembers outer variables | `function outer() { let x=5; return ()=>x++; }` |
// | **Callback**          | Function passed as argument        | `setTimeout(()=>{},1000)`                       |
// | **Promise**           | Handles async success/failure      | `new Promise((res,rej)=>{})`                    |
// | **async/await**       | Cleaner async syntax               | `await fetch()`                                 |
// | **Template Literals** | Dynamic strings                    | `` `Hi ${name}` ``                              |
// | **Destructuring**     | Extract values                     | `let {a,b}=obj`                                 |
// | **Default Params**    | Default function values            | `f(x=10)`                                       |
// | **Spread/Rest**       | Combine or expand                  | `...arr`                                        |

