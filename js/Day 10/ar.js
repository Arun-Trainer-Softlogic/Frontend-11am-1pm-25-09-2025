// function show() {
//   let y = 5; // local sope
//   console.log(y);

// }

// show();

// function outer (){
//     let counter = 0 ;
//     return function inner(){
//         counter++;
//         console.log("counter: " , counter);

//     };
// }

// let count = outer();

// count();
// count();
// count();
// count();
// count();
// count();
// count();

// function greet(name, callback) {
//   console.log("hello ," + name);
//   callback();
// }

// function bye() {
//   console.log("G0odbye !");
// }

// greet("additii", bye);

// let myPromise = new Promise ((resolve , reject )=> {
//     let success = false ;
//     setTimeout (()=> {
//         if(success) resolve("task completed")
//             else reject('task failed ')
//     },3000)
// })

// myPromise

// .then((msg)=> console.log(msg))
// .catch((err)=> console.log(err))

// async function fetchData() {
//   try {
//     let response = await new Promise((resolve) => {
//       setTimeout(()=> resolve("data fetched successfully "), 2000);
//     });

//     console.log(response);
//   } catch (err){
//     console.log("error :", err);
//   }finally{
//     console.log("operation Complete ");

//   }
// }


// fetchData()




