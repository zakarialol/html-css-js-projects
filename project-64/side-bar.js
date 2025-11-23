const btnNavIcon = document.getElementById('toggle-bar')
const headerDiv = document.getElementById('header')
const XmarkBtn = document.getElementById('Xmark')

//fucntion to handle the nav icon
function NavIcon(){
    clcTheWidth()
    headerDiv.classList.toggle('increase_width')
}
//function to calucl the with
function clcTheWidth(){
    const WidthC = headerDiv.scrollWidth
    if(headerDiv.classList.contains('increase_width')){
        headerDiv.style.transform = `translateX(-${WidthC}px)`
        // headerDiv.style.width = `${WidthC}px`
    }else{
        headerDiv.style.transform = `translateX(0px)`
    }
}

//event
btnNavIcon.addEventListener('click',NavIcon)
XmarkBtn.addEventListener('click',NavIcon)
// function to add animatino on the xmark
function animation_one(){
    XmarkBtn.style.transform=`rotate(360deg)`
}
function animation_two(){
    XmarkBtn.style.transform=`rotate(0deg)`
}

XmarkBtn.addEventListener('mouseover',animation_one)
XmarkBtn.addEventListener('mouseout',animation_two)