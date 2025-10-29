// syntax

// for loop syntax

// for (intialization; condition; increment / decrement) {
//   // code block
// }

// for (let i = 1 ; i <= 0; i++ ){
//     console.log(i);

// }

// while(condition){
//     // code
// }

// let i = 1;

// while (i <= 12 ){
//     console.log(i);
//     i++
// };

// do while

// do {
//     // code
// }while (condition)

// let oi = 0;
// do {
//   oi++;
// } while (oi <= 0);



// for (let i = 1; i <= 10 ; i++){
//     if(i === 8 ) break;
//     console.log(i);
    
// }

// for (let i = 1; i <= 10 ; i++){
//     if(i === 6  ) continue;
//     console.log(i);
    
// }

// const person = {
//     firstName : "Arunraj",
//     lastName : "Raj",
// }


// for(let key in person){
//     console.log(`${key}:${person[key]}`);
// }


// for(let i = 1; i<= 10 ; i ++){
// if (i % 2 === 0 ){
//     console.log(i);
// }
// // }

// for in 




for (let key in object ){
    // code block 
}


 let student = {
    name : "aditi",
    age : 21,
    course : "B.tech",
 }

//  console.log(student);

for (let key in student){
  
    console.log(key  +" :"+ student[key]);
    
}
 


for (of)


for (let value of itaratables ){

}


let fruit = "apple ";

for (let ar of fruit){
    console.log(ar);
    
}



let numbers = [12, 23, 34, 45, 56];



numbers.forEach(function (num) {
    console.log(num);

})