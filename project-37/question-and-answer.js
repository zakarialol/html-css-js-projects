const question_div= document.querySelector('.question-holder')
const questionArray=[
    {
        question:'do you do your best to master front end?',
        answer : 'yes i do and I will do my best to be come better at js and css and html',
    },

    {
        question:'witch one you will support ?',
        answer : 'i will support you brother ',
    },

    {
        question:'some ideas in your mind?',
        answer : 'tonight you will not lose your self tyring to protect people from what they do',
    },

]

//
questionArray.forEach(function(question ,index){
    question_div.innerHTML += `<div class='Question'>
                        <div class='question-header'>
                            <p class='Q1Text'>${question.question}</p>
                            <button class='btn btn-plus' data-index=${index}>+</button>
                            <button class='btn btn-negative hidden' data-index=${index}>-</button>
                        </div>
                        <p class='answer_text hide' data-index=${index}>${question.answer}</p>
                    </div>`
})

function handlingClicks(){
    question_div.addEventListener('click',function(c){
        if(c.target.classList.contains('btn-plus')){
            addHidden()
            const index=c.target.dataset.index
            toggleDisplay(index)
        }else if(c.target.classList.contains('btn-negative')){
            const index=c.target.dataset.index
            toggleDisplay(index)
        }
    })
}

function toggleDisplay(index){
    // addHidden()
    const btnPlus = document.querySelector(`.btn-plus[data-index="${index}"]`)
    const btnNegative = document.querySelector(`.btn-negative[data-index="${index}"] `)
    const lorText = document.querySelector(`.answer_text[data-index="${index}"]`)
    btnPlus.classList.toggle('hidden')
    btnNegative.classList.toggle('hidden')
    // lorText.classList.toggle('hide')
    lorText.classList.toggle('unhide')
}

// function to CHECK IF FOR HIDDEN EXIST OR NO

function addHidden(){
    const loremText= document.querySelectorAll('.answer_text')
    loremText.forEach(function(CheckClass){
        if(CheckClass.classList.contains('unhide')){
            CheckClass.classList.remove('unhide')
            CheckClass.classList.add('hide')
        }
    })
}

// toggleDisplay()
handlingClicks()







