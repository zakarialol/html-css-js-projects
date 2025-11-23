const nrb1 = document.getElementById("nbr1")
const nrb2 = document.getElementById("nbr2")
const sum = document.getElementById("sum")
const logo = document.querySelector('.logo')
// let number=0

function subtract(){
    callFunc()
    logo.textContent = '-'
    sum.textContent= `sum:  ${nbr1.textContent - nbr2.textContent}`
}
function miltiple(){
    callFunc()
    logo.textContent = '+'
    sum.textContent= `sum: ${Number(nbr1.textContent) + Number(nbr2.textContent)}`
}
function divide(){
    callFunc()
    logo.textContent = '÷'
    sum.textContent= `"sum: " ${nbr1.textContent / nbr2.textContent}`
}
function miltply(){
    callFunc()
    // result=t*d
    logo.textContent = '×'
    sum.textContent= "sum: "+ nbr1.textContent * nbr2.textContent
}
function empty(){
    nbr1.textContent = '0'
    nbr2.textContent = '0'
    sum.textContent="sum: "
}
function add(){
    let result = Number(nbr1.textContent) + 1
    nbr1.textContent = result
}
function addr(){
    let numberR = Number(nbr2.textContent) + 1
    nbr2.textContent = numberR
}

function callFunc(){
    if(nbr1.textContent === ''){
        nbr1.textContent = '0'
    }
    if(nbr2.textContent === ''){
        nbr2.textContent = '0'
    }
}
console.log(0 / 0) ;console.log(1 / 0)