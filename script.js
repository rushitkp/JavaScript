console.log(console)
console.info("Hey How are you")
console.warn("Warning")
console.error(2>34)
obj={a:3,b:3,c:7,d:9}
console.table(obj)
console.assert()

console.table(console)
console.time("forloop")
for(let i=0;i<5;i++)
{
    console.log("10")
}
console.timeEnd("forloop")

console.time("WhileLoop")
let i=0
while(i<5)
{
    i=i+1
    console.log("1")
}
console.timeEnd("WhileLoop")