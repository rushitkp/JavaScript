// let a = Prompt("Enter Your Age");
// console.log(typeof a)
// a=Number.parseInt(a)

// let a=35
// if(a>0)
// {
//     alert("this is valid age")
// }

// <script>
//     console.log(65)
// </script>


// let a1=Number.parseInt(a1)
let a=67
if(a<10)
{
    console.log("Invalid Age")
}
else if(a<10)
{
    console.log("you cannot drive it")

}
else if(a<100)
{
    console.log("you can drive it")
}
else
{
    console.log("invalid")
}

// Switch Statements

let color=9
switch (color) {
    case 1: 
    console.log("Blue color")
        break;

    case 2: 
    console.log("Red color")
        break;

    case 3: 
    console.log("Orange color")
        break;

    case 4: 
    console.log("Green color")
        break;

    default:
        console.log("Sorry You Wrong expression select",color)
        break;
}

// Ternory Operator
a=20
console.log("You Can",(a<18? "Not Drive" :"Drive"))