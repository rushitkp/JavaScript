//Array Map Method
let arr=[34,54,53,76]
let a=arr.map((value,index,Array)=>
{
    console.log(value,index,Array)
    return value+1
})
console.log(a)
//Array Filter method
let arr2=[45,34,23,45,56,50]
let a2=arr2.filter((a)=>{
    return a<30
})
console.log(a2)

//Array Reduce Method

let arr3=[1,2,3,4,5,6]
let rk=arr3.reduce((h1,h2)=>
{
    return h1+h2
})
console.log(rk)