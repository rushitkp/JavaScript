let marks={
    Rk:87,
    km:67,
    Ak:56
}
for(let i=0;i<Object.keys(marks).length;i++)
{
console.log("The Marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
}
console.log("\n")
// for(i in marks)
// {
//     // console.log("The Marks of "+ key +" is "+ marks[key])
//     console.log("The Marks of "+ i +" is "+ (marks)[i])
// }
// console.log("\n")

// let cn=46
// let i
// while(i !=cn)
// {   
//     i=prompt("Enter A Number:")
// }
// console.log("You Have Correct Number")
const mean=(a,b,c,d)=>
{
    return(a+b+c+d)/4
}
console.log(mean(30,40,50,80))