//selectors
const navButton = document.querySelector('.toggle-bar-button')
const headerNav = document.querySelector('header .nav')
const closeButton = document.querySelector('.closeButton')
//
navButton.addEventListener('click',navButtonFunc)
function navButtonFunc(){
    headerNav.classList.toggle('display')
    closeButtonFunc()
}
// appending the close button
function closeButtonFunc(){
    closeButton.innerHTML = ''
    buttonClose = document.createElement('button')
    buttonClose.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`
    closeButton.append(buttonClose)
}
headerNav.addEventListener('click',(itm)=>{
  let targt = itm.target.parentElement.parentElement.classList
  if(targt.contains('closeButton')||itm.target.classList.contains('closeButton')){
    console.log(targt)
    headerNav.classList.toggle('display')
  }else{
    return
  }
})