let p=new Promise((resolve,reject)=>{
    console.log("Promis Pending")
    setTimeout(() => {
        console.log("Promis Fulfill")
    }, 3000);
    resolve(true)
    reject(new Error("Error"))
})
console.log(p)
p.then((value)=>{
    console.log(value)
})