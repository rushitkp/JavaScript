function my(x,y)
{
    console.log("Dene")
    return Math.round(1+(x+y)/2)
}
let a=23
let b=34
let c=20
console.log("A of B is:",my(a,b))
console.log("A of B is:",my(b,c))
console.log("A of B is:",my(a,c))

const sum=(p,q)=>
{
    return p+q
} 
console.log(sum(20,30))
const Hello=()=>
{
    console.log("Hello How Are You")
}
Hello()