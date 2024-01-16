//declaration

// const myArr = [1,2,3,4,5,6];
// const hero = ["shaktiman"]
// const my = new Array(1,2,3,4)


//methods

// myArr.push(7)           //to add element at the beginning
// myArr.pop()             //to remove element from the end
// myArr.unshift(8)            //to add the element at the beginning
// myArr.shift()               //to remove the element from the beginning

// console.log(myArr.includes(9));     //return true if that element is present otherwise false
// console.log(myArr.indexOf(9));          //if element present return it's index otherwise -1


//slice and splice
// console.log("A ",myArr)

// const arr = myArr.slice(2,4)        //first parameter includes second excludes
// console.log("B ", myArr)
// console.log(arr);

// const arr2 = myArr.splice(2,4)      //first parameter is index no and second is length
// console.log("C ", myArr)
// console.log(arr2)



// const marvel_heros= ["spiderman", "thor", "ironman"]
// const dc_heros = ["superman", "flashman", "batman"];
// marvel_heros.push(dc_heros)                        take input as complete arary and change in existing array
// let heros = marvel_heros.concat(dc_heros)            return a new array
// const all_new_heros= [...marvel_heros,...dc_heros]        spread operator  spread all elements



// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];         convert any depth array into a 1D array 
// const real_array = another_array.flat(Infinity)              parameter - depth in numbers


// console.log(Array.isArray("fsdfs"))            return true or false      wheather a input is array or not
// console.log(Array.from("fsdfs"))                convert into array

// let score1=100;
// let score2 = 200;
// let score3= 300;
// console.log(Array.of(score1,score2,score3))