genirateText = [
    'id1 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id2 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id3 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id4 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id5 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id6 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id7 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id8 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id9 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id10 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id11 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
    'id12 ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex magnam dolor minus cupiditate beatae est? Unde molestiae eligendi libero sed, harum reprehenderit blanditiis. Expedita inventore asperiores amet voluptate culpa?',
]
const btnGenarate = document.querySelector('.first-article .btn-genirate')
const nbrP = document.getElementById('nbrTxt')
const divContainer = document.querySelector('.paragraphs-container')
const errorTxt = document.querySelector('.error-container')

btnGenarate.addEventListener('click',GenParaghNbr)

console.log(genirateText[0])

function randomNumber(){
    let count = genirateText.length
    let num = Math.floor(Math.random()*count) 
    return `<p class='txtgen'>${genirateText[num]}</p>` 
}

function GenParaghNbr(){
    errorTxt.textContent = ''
    divContainer.textContent = ''
    let nbr = nbrP.value
    if(nbr === ''){
        let result = randomNumber()
        divContainer.innerHTML = result
        return
    }else if(nbr <= 0 || nbr > genirateText.length){
        errorTxt.innerHTML = `<p class='error'>Please enter a number between 1 and ${genirateText.length}</p>`
    }else{
        for(let i=0; i <nbr ; i++){
            divContainer.innerHTML += `<p class='txtgen'>${genirateText[i]}</p>`
        }
    }
}
