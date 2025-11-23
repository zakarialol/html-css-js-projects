const openModal =document.getElementById('open-modal')
const btnXmark = document.getElementById('Xmark')
const modalDiv = document.getElementById('modal-div')

function open(){
    modalDiv.classList.toggle('display')
}

openModal.addEventListener('click',open)
btnXmark.addEventListener('click',open)
