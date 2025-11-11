// fetch (url , options)
// .then (response => response.json())
// .then( data => console.log(data))
// .catch(error => console.log('Error : ' , error))

// async  await

// Response.ok

fetch("https://api.github.com/users/arun-cloud-dev/followers")
  .then((res) => {
    if (!res.ok) throw new Error("Network error : " + res.status);
    return res.json();
  })

  .then((data) => console.log(data))

  .catch((err) => console.log("failed fetch :", err));





// let res = await fetch("https://api.github.com/users/arun-cloud-dev/followers");
// let data = await res.json()


// const text = '["ford", "bmw" , "audi"]';


// console.log(text);


// const arr = JSON.parse(text)



// console.log(arr);





// const text = '{"name" : "john" , "birth": "1988-12-14" }';




// const obj = JSON(text)


// console.log(obj);



// const myjs = JSON.stringify(obj)

// console.log(myjs);


