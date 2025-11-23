// selectors
const CategoryHolder = document.querySelector('header .category')
const QuationNbrHolder = document.querySelector('header .quationsNumber')
const Quation = document.querySelector('article .quation')
const AnswerHolder = document.querySelector('article .answer-holder')
const submitBtn = document.querySelector('.SubmitAnswer')
const CirclesHolder = document.querySelector('.footer nav')
const TimeHolder = document.querySelector('.footer .time-holder')
const mainHolder = document.querySelector('.main-holder')
let index = 0 ;
let CircleNumber;
//count Time To skip the Quation
let TimeDownNumber = 3;
let timeDown;
let numberofQuation = 1

//caetegory array 
const CategoryArr = ['HTML']
const QuationArr = [{quastion:'Q1',answers:['Answer one','Answer Two','Answer tree','Answer four']},
{quastion:'Q2',answers:['Answer one','Answer two','Answer tree','Answer four']},
{quastion:'Q3',answers:['Answer one','Answer two','Answer tree','Answer four']},
{quastion:'Q4',answers:['Answer one','Answer two','Answer tree','Answer four']},
{quastion:'Q5',answers:['Answer one','Answer two','Answer tree','Answer four']},
{quastion:'Q6',answers:['Answer one','Answer two','Answer tree','Answer four']},
] 

//functino to append 
function appendItmFunc(){
    CategoryHolder.innerHTML = `category:${CategoryArr[0]}`
}
appendItmFunc()
function appenNbrOfQuationFunc(){
    QuationNbrHolder.innerHTML = `questions count: ${QuationArr.length}`
}
appenNbrOfQuationFunc()
function appendQuastionAnwserFunc(index){
    if(index < 0 || index > QuationArr.length-1){
        return
    }else{
        let nbr = 1
        AnswerHolder.innerHTML = ''
        Quation.innerHTML = `${QuationArr[index].quastion}`
        QuationArr[index].answers.forEach((itm,position)=>{
            AnswerHolder.innerHTML +=`<div class='OneQDiv'>
                    <input type="radio" name="Q-${index}" value ="${QuationArr[index].answers[position]}" id="${position+nbr}">
                    <label for="${position+nbr}">${itm}</label>
            </div>`
        })
    }
}
appendQuastionAnwserFunc(index)

function appendingTheCircles(){
    QuationArr.forEach(()=>{
        CirclesHolder.innerHTML +=`<li class="Qcircle"></li>`
    })
    CircleNumber = document.querySelectorAll('nav .Qcircle')
}
appendingTheCircles()
//
let result=0;
function checkedFunc(Qnumber){
    
    let selected = document.querySelectorAll('.answer-holder input')
    selected.forEach((itm)=>{
        if(itm.checked){
            selected = itm
        }
    })

    switch(Qnumber){
        case 1: 
            if(selected.value === QuationArr[Qnumber-1].answers[1]) {
                        result++
                }
            break;
        case 2:
            if(selected.value === QuationArr[Qnumber-1].answers[3]) {
                        result++
                }
            break;
        case 3:
            if(selected.value === QuationArr[Qnumber-1].answers[1]) {
                            result++
                    }
            break;
        case 4:
            if(selected.value === QuationArr[Qnumber-1].answers[2]) {
                            result++
                    }
            break;
        case 5:
            if(selected.value === QuationArr[Qnumber-1].answers[0]) {
                                result++
                        }
            break;
        case 6:
            if(selected.value === QuationArr[Qnumber-1].answers[3]) {
                                result++
                        }
            break;
        default : return
            
    }
    // if(Qnumber === 1){

    // }
}
// checked()

//
let nbr = 1;
submitBtn.addEventListener('click',()=>{
    numberofQuation++
    clearInterval(timeDown)
    TimeDown(TimeDownNumber)
    SetIntevalFunc(TimeDownNumber,numberofQuation)
    index++
    if(index+1>QuationArr.length){
        resultFunc()
    }
    checkedFunc(nbr)
    nbr++
    appendQuastionAnwserFunc(index)
    AddActiveClass(index)
})
// function result
function resultFunc(){

        if(result === QuationArr.length / 2){
            resultMessage(result,'medium','blue')
        }else if(result < QuationArr.length / 2){
            resultMessage(result,'low','red')
        }else{
            resultMessage(result,'exellent','green')
        }
}
function resultMessage(result,lmiza,colr){
    mainHolder.innerHTML = `<div class='finalMessage'><span>${lmiza}</span> ${result} from ${QuationArr.length}</div>`
    let finalMessage = document.querySelector(".finalMessage span")
    finalMessage.style.color = colr
}
// function to add active Quation
window.addEventListener('load',()=>{
    AddActiveClass(index)
    TimeDown(TimeDownNumber,numberofQuation)
    SetIntevalFunc(TimeDownNumber,numberofQuation)
})
function AddActiveClass(index){
    if(index > QuationArr.length-1){
        return
    }
    for(let i = 0 ; i <=index ; i++){
        CircleNumber[i].classList.add('active-quation')
    }
}

// meking he time count to 0
function TimeDown(number){
    TimeHolder.innerHTML =`00:${String(number).padStart(2,0)}`
    if(number <= 0 ){
        submitBtn.click()
        return
    }
}
function SetIntevalFunc(TimeDownNumber,numberofQuation){
    timeDown = setInterval(()=>{
        if(numberofQuation > QuationArr.length){
            clearInterval(timeDown)
            return
        }
        TimeDownNumber--
        TimeDown(TimeDownNumber)
    },1000)
}
