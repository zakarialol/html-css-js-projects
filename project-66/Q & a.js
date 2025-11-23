let answerOne= document.getElementById('answer-one')
let answerTwo= document.getElementById('answer-two')
let answerTree= document.getElementById('answer-tree')

let btnPlusOne= document.getElementById('btn-plus-one')
let btnPlusTwo= document.getElementById('btn-plus-two')
let btnPlusTree= document.getElementById('btn-plus-tree')

// remove class
function removeClass(){
    if(!answerOne.classList.contains('display')){
        answerOne.classList.add('display')
    }
    if(!answerTwo.classList.contains('display')){
        answerTwo.classList.add('display')
    }
    if(!answerTree.classList.contains('display')){
        answerTree.classList.add('display')
    }
    // answerOne.classList.remove('display')
    // answerTwo.classList.remove('display')
    // answerTree.classList.remove('display')
}
//
function btnOne(){
    removeClass()
    answerOne.classList.toggle('display')
}
function btnTwo(){
    removeClass()
    answerTwo.classList.toggle('display')
}
function btntree(){
    removeClass()
    answerTree.classList.toggle('display')
}
//
btnPlusOne.addEventListener('click',btnOne)
btnPlusTwo.addEventListener('click',btnTwo)
btnPlusTree.addEventListener('click',btntree)