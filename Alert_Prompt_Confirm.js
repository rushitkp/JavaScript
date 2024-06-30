// alert("Hello")
let a=prompt("Enter Number","530")
document.write(a)
a=Number.parseInt(a)
alert("You Enered a of type"+(typeof a))
let write=confirm("Do you want to write it to the page")
if(write)
{
    document.write(a)
}
else
{
    document.write("Please allow Me to write")
}