// Filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num>4
// })

// const newNums=[];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

//use in objects specially


//map method

// myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.map((num)=>{
//     return num+10
// })
// console.log(newNums)

// const newNums= myNums.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>40)
// console.log(newNums)




//reduce

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.reduce((acc,currVal)=> acc+currVal,2)
console.log(newNums)