// singleton =>  constructor  => object.create
// non-singleton => literals


// store only distict keys
 


//object literls

// const mySym = Symbol("key1")

// const js_user={
//     0: "Atulya",
//     [mySym] : "my key",         //define Symbol in object
//     age : 18,
//     location : "Jaipur",
//     mail : "abc@123",
//     isLoggegIn : false,
//     LastLoggedIn : ["Monday","Tuesday"],
//     "my name" : "Harsh"
// }

// console.log(js_user.0)                   give an error
// console.log(js_user."my name")           give an error
// console.log(js_user[0])                     so it's preferable
// console.log(js_user[mySym])                 to access Symbol from Object


// Object.freeze(js_user);                 ab kuchh bhi change nhi kr skte h object me



//add a function into an object

// js_user.greeting= function(){
//     console.log("Hello Everyone");
// }

// js_user.greetingTwo = function(){
//     console.log(`my name is ${"my name"} `)
// }

// console.log(js_user.greeting());
// console.log(js_user.greetingTwo());





// Singleton or create object using constructor

//declaration
// const tinder = new Object()

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1 ,obj2, obj3}                 //array wali problem
// const obj4 = Object.assign({},obj1,obj2,obj3)
// const obj4= {...obj1,...obj2,...obj3}               //using spread operator



// console.log(Object.keys(tinder))             return into an array
// console.log(Object.values(tinder))           return into an array
// console.log(Object.entries(tinder))          return into an array

// console.log(tinder.hasOwnProperty('name'))          check property exist or not return true or false





//Object destructueing 

const course ={
    coursename : "JavaScript",
    courseprice : 0,
    courseOwner: "Atulya",
}

// course.courseOwner

// const{courseOwner: owner}=course
// console.log(owner);

// const navbar = ({comapany})=>{

// }

// navbar(comapany ="atulya")