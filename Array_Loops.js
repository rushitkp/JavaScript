let num=[3,4,5,7,8,9]
for(let i=0;i<num.length;i++)
{
    console.log(num[i])
}
//Foreach loop in array
num.forEach((Element)=>
{
    console.log(Element*Element)
})

let n="RRR"
let arr=Array.from(n)
console.log(arr)

//for of loop
for(let i of num)
{
    console.log(num[i])
}

//for in loop
for(let i in num)
{
    console.log(i)
}