//selectors
const TabButtons = document.querySelectorAll('.tabs-btns button')
//
const textHolder = document.querySelector('.paragraph .text-holder')
const arrayOfparagraphs= ['first world','second world','third world']
textHolder.textContent = `${arrayOfparagraphs[0]}`
TabButtons.forEach((butn,index)=>{
    butn.addEventListener('click',(e)=>{
        textHolder.innerHTML =`${arrayOfparagraphs[index]}`
        TabButtons.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })
})
