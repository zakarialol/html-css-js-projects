let btnToggle=document.getElementById('toggle-bar')
let navToHide=document.getElementById('navToHide')
function HiddenNav(){
    navToHide.classList.toggle('display')
}
btnToggle.addEventListener('click',HiddenNav)
btnToggle.addEventListener('click',handleTheHeight)
window.addEventListener('resize',resetTheHeight)

function handleTheHeight(){
    if(window.innerWidth <= 600){
        if(navToHide.style.height=== '0px'|| !navToHide.style.height){
            const NavHeight=navToHide.scrollHeight
            navToHide.style.height=`${NavHeight}px`
        }else{
            navToHide.style.height='0px'
        }
    }else if(window.innerWidth > 600){
        if(window.innerWidth > 600){
            navToHide.style.height=''
        }
    }
}
function resetTheHeight(){
    if(window.innerWidth > 600){
        navToHide.style.height=''
    }
}

