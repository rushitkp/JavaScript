let num=[2,4,6,8,10]
let b=num.toString()
console.log(b)
console.log(typeof b)

let c=num.join("_")
console.log(c)
let r=num.pop() //return poped element
console.log(num)
console.log(r)

let j=num.push(100) //push return new array lenght
console.log(num,j)

let r1=num.shift() //remove element start of array
console.log(r1,num)

let num1=[1,2,3,4,5,6,7,8,9,10]
let num2=[11,12,13,14,15,16,17,18,19,20]
let num3=[21,22,23,24,25,26,27,28]
// delete num1[0]
console.log(num1,num2)
let rk=num1.concat(num2,num3)
console.log(rk)

let num4=[231,242,623,624,532,263,827,928]
num4.sort()
num1.reverse()
console.log(num4)

let compare=(a,b)=>
{
    return b-a
}

//Spilece and Slice
let a=[63,44,14,34,44]
a.splice(4,2,3,4,5,6,10,45)
console.log(a)
// console.log(deletedvalues)

// let x=[34,44,23,2,3,23,2]
// let newr1=let x.slice(3)
// console.log(newr1)


