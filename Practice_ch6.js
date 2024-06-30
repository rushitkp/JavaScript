const canDrive=(age)=>{
        return age>=18?true:false
    }
let runagain=true
while(runagain)
{
let age=prompt("Enter Your Age")
age=Number.parseInt(age)
if(age<0)
{
    alert("Yes You Can Drive")
}
else
{
    alert("You Cannot Drive")
    console.error("Plaese enter Valid number");
}
}
let color=prompt("Enter The Page Background Color")
document.body.style.background=color




