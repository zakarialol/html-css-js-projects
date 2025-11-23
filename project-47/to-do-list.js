// selectin items
//form
const form = document.getElementById('form')
//submit button
const SubBtn = document.querySelector('form .submit')
//clear all
const ClearItemsBtn = document.querySelector('.btn-holder .clear')
//input text 
const InputValue = document.querySelector('.inputvalue')
//items container
const itemsContainer = document.querySelector('.items-container')
// 

form.addEventListener('submit',function(e){
    e.preventDefault()
    const value = InputValue.value
    appendChilds(value)
    let id= new Date().getTime()
    addingtolocalS(id,value)
    InputValue.value=''
})

function addingtolocalS(id,value){
    //adding items to local storage
    localStorage.setItem(`task${id}`, value)
}

function appendChilds(value){
    //input value
    const InputParagraphHolder = document.createElement('p')
    const textInput = document.createTextNode(value)
    InputParagraphHolder.appendChild(textInput)

    // tasks holder 
    const holder = document.createElement('div')
    holder.classList.add('main-holder-for-tasks')

    //icon edit
    const EditBtn = document.createElement('button')
    EditBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

    //icon delete
    const DeleteBtn = document.createElement('button')
    DeleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    
    //button div
    const BtnContainer = document.createElement('div')
    BtnContainer.classList.add('btn-div-holder')
    BtnContainer.append(EditBtn,DeleteBtn)

    //appending childs to the holder 
    holder.append(InputParagraphHolder,BtnContainer)
    //
    itemsContainer.appendChild(holder)
}

function loadLocal(){
    for(i = 0 ; i < localStorage.length ; i++){
         let locallength = localStorage.key(i)
         let item = localStorage.getItem(locallength)
         appendChilds(item)
    }
}

window.addEventListener('load',loadLocal)

// localStorage.clear()