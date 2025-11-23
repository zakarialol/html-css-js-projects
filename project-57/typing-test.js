//selectors
const HeaderGameDescribe = document.querySelector('section .game-describe')
const PlayGameBtn = document.querySelector(".playButton")
const worldsDivHolder = document.querySelector('.words-container')
const showWordsText =   document.querySelector(".words-container .p-holder")
const PlayGameContainer = document.querySelector('.PlayGameContainer')
const playWord = document.querySelector('.PlayGameContainer .currentwordDiv')
const inputTxt = document.querySelector("section #inputType")
const scroreText = document.querySelector('.footer .score')
const WordsDiv = document.querySelector('.words-container .wordsHolder')
const GameOverText = document.querySelector('.GameOverText')
const footerTimeCount = document.querySelector('.footer .time')
const footer = document.querySelector('.footer')
//
const ArrayWordsToType = ['yello','world','tonight','hi','no','adea','about','this','zakaria','aitbibote','your','too','good','dahmad','ghordo','abdelali']
//
//variable used blow
let countInterval;
let gameDifuclt = 'normal'
let TimeleftNumber = 3
let count = TimeleftNumber;
let Allworld;
//
function headerDescribeFunc(level,time,colorType){
    HeaderGameDescribe.innerHTML = `you are playing on <span class='level ${colorType}'>[${level}]</span> level & you have <span class='time ${colorType}'>[${time}]</span> seconds to type the word `
}
window.onload = ()=>{
    headerDescribeFunc(gameDifuclt,count,'green')
}
//functon for play button
let CurrentIndex = 0;

PlayGameBtn.addEventListener('click',()=>{
        // footer.innerHTML = ''
        count = TimeleftNumber
        result=0
        CurrentIndex = 0;
        WordsDiv.textContent = ''
        AppendRestartBtnFunc()
        displayResultFunc(result,'blue')
        displayElementsFunc('none','block')
        startButtonFunc(CurrentIndex)
        wordsContainerFunc()
        startCounting(count)
})

//function to show the world in worlddivholder
function wordsContainerFunc(){
    ArrayWordsToType.forEach((word)=>{
        WordsDiv.innerHTML +=`<p class='word'>${word}</p>`
    })
    Allworld = document.querySelectorAll('.wordsHolder .word')
}
//function when i click on the starat button
function startButtonFunc(CurrentIndex){
    playWord.innerHTML = `<p class='CurrentWord'>${ArrayWordsToType[CurrentIndex]}</p>`
}
//
function displayResultFunc(result,color){
    scroreText.innerHTML =`score:<span class=${color}>${result}</span> from <span class='OverText ${color}'>${ArrayWordsToType.length}</span>`
}
//displaying or remoing items after clicking the play button
function displayElementsFunc(value1,value2){
    inputTxt.style.display= value2
    PlayGameBtn.style.display = value1
    showWordsText.style.display = value1
    playWord.style.display = value2
    WordsDiv.style.display = value2
    GameOverText.style.display = value1
    inputTxt.focus()
    inputTxt.value = ''
}
//function for game over Text
function GameOverTextFunc(text,color){
    GameOverText.innerHTML=`<span class=${color}>${text}</span></br>`
}
function DisplayVitcroty(text,result,color){
    playWord.innerHTML=`<p class='victory ${color}'>${text}</p><div class='score-inside-victory'>your score is:<span class=${color}>${result}</span> from <span class='OverText ${color}'>${ArrayWordsToType.length}</span></div><div class='flex-center'>
    `
    inputTxt.style.display = 'none'
    worldsDivHolder.style.display = 'none'
}
//count function 
function startCounting(count){
        footerTimeCount.innerHTML=`time left: ${String(count).padStart('2','0')}`
        countInterval = setInterval(()=>{
        count--
        footerTimeCount.innerHTML=`time left: ${String(count).padStart('2','0')}`
        if(count <= 0){
            clearInterval(countInterval)
            GameOverTextFunc('game over','red')
            displayElementsFunc('block','none')
            showWordsText.style.display = 'none'
        }
    },1000)
}
function resetCountTozero(){
    count = 0
    footerTimeCount.innerHTML = `time left:${String(count).padStart('2','0')}`
    clearInterval(countInterval)
}
function ChangeTheColorFunc(CurrentIndex){
    Allworld[CurrentIndex].style.background = 'green'
}
// restartButton.onclick = ()=>{
//     clearInterval(countInterval)
//     PlayGameBtn.click()
// }
//function to append the button restart
let BtnRestartDivHolder = document.createElement('div')
function AppendRestartBtnFunc(){
    BtnRestartDivHolder.innerHTML = ''
    let buttonRestart = document.createElement('button')
    let text = document.createTextNode('restart')
    buttonRestart.append(text)
    buttonRestart.classList.add('restart')
    BtnRestartDivHolder.append(buttonRestart)
    footer.append(BtnRestartDivHolder)
    buttonRestart.addEventListener('click',()=>{
        clearInterval(countInterval)
        PlayGameBtn.click()
    })
}
let result=0;
inputTxt.addEventListener('keydown',function(event){
    if(event.key ===' ' || event.key === 'Enter'){
        let value = inputTxt.value.trim()
        if(value === ArrayWordsToType[CurrentIndex]){
            result++
            displayResultFunc(result,'color_Green')
            clearInterval(countInterval)
            startCounting(count)
            ChangeTheColorFunc(CurrentIndex)
            CurrentIndex++
            inputTxt.value=''
            //
            if(CurrentIndex > ArrayWordsToType.length - 1){
                DisplayVitcroty('victory',result,'green')
                resetCountTozero()
                return
            }
            //
            if(CurrentIndex < ArrayWordsToType.length){
                startButtonFunc(CurrentIndex)
            }
        }else if(value !== ArrayWordsToType[CurrentIndex]){
            displayElementsFunc('block','none')
            GameOverTextFunc('game over','red')
            resetCountTozero()
            showWordsText.style.display = 'none'
            inputTxt.value = ''
            CurrentIndex=0;
        }
    }
})