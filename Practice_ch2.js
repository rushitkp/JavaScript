// Chepter 2
// Q.1
let age=20
if(age>10 && age<100)
{
    console.log("Your Age lies Between 10 and 100")
}
else{
    console.log("your age not access")
}

// Q.2
let age1=2
switch (age1) {
    case 1:
        console.log("Age 10")
        break;
    case 1:
        console.log("Age 18")
        break;
    case 2:
        console.log("Age 30")
        break;
    case 3:
        console.log("Age 100")
        break;

    default:
        console.log("Invalid Age")
        break;
}

// Q.3
// let num=prompt("Whta is Your Number")
// num=Number.parseInt(num)
let num=0
if(num%2==0 && num%3==0)
{
    console.log("Your Number Is Devided By Zero")
}
else
{
    console.log("it Not Devide")
}

// Q.4
let a=20
let r=a>18? "You Can Drive" : "you Cannot Drive"
console.log(r)
