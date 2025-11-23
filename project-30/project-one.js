// document.getElementById("nbr-count").innerText=5
// function lognbr(){
//     console.log(42)
// }
// lognbr()
// let m=5
// let n=9
// let s=6
// function logsum(){
//     let miltiple= m + n + s
//     console.log(miltiple)
// }
// logsum()
// let laps=30
// function increment(){
//     laps= laps+1
//     console.log(laps)
// }
// increment()
// increment()
// increment()
let count = document.getElementById("nbr-count")
// let dicrease= document.getElementById("nbr-count")
let increment=0
let dicrement=0
function increase(){
    increment+=1
    count.innerText=increment
    console.log(increment)
}
function decrease(){
    increment-=1
    count.innerText=increment
    console.log(increment)
}
function savebtn(){
    console.log(increment)
}
// let username="pers"
// let message="you have tree new notification"
// let somme= message +"_"+ username
// console.log(somme)
// let begin="hi my name is "
// let nam = "zakaria"
// let mygreeting= begin +""+ nam
// console.log(mygreeting)
let hero=document.getElementById("hero-p")
let na="zakaria"
let full="ait bibote"
hero.innerText=na+" "+full
hero.innerText+=" your nothing"
let saveEl = document.getElementById("enters")
function savebtn(){
    let stor= " "+increment +" -"
    saveEl.textContent=saveEl.innerText + stor
    count.textContent=0
    increment=0
}






