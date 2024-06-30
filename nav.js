const rk=()=>
{
    document.body.firstElementChild.style.background="yellow"
}
let b=document.body
console.log("First Child Of b is:",b.firstChild)
console.log("First Element Child Of b is:",b.firstElementChild)

document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background="pink";
});