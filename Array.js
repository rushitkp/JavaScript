let marks=[50,45.56,"RR","#$%^&&","",true,false]

console.log(marks[0])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
marks[8]=56    //Add new value in array
marks[0]=89    //Change value in array 
// console.log(marks.push())
console.log(typeof marks[4])
function main(ctime){
    window.requestAnimationFrame(main)
    if((ctime-lastpainttime)/1000<1/speed)
    {
        return;
    }
    lastpainttime=ctime;
    GameEngine();
}
