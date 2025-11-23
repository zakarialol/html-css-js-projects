const navToggleButton = document.querySelector('.nav-bar-button')
const navMenuLi = document.querySelectorAll('header .nav-menu a')
const HeaderDiv = document.querySelector('.home header')
const navLink = document.querySelectorAll('.nav-menu a')
// get the btn scroll top
const BtnScrollTop = document.querySelector('.btnScrollTop')

function toggleNav(){
    navMenuLi.forEach(itm => itm.classList.toggle('toggle-nav-menu-li'))

}
navToggleButton.addEventListener('click',toggleNav)
// scroling skills

window.addEventListener('scroll',function(){
    if(window.scrollY >= 10){
        HeaderDiv.classList.add('header-position-fixed')
        navLink.forEach(itm => itm.style.color='black' )
    }else{
        HeaderDiv.classList.remove('header-position-fixed')
        navLink.forEach(itm => itm.style.color='white' )
    }
        if(window.scrollY >=200){
        // console.log('hello zakaria')
        BtnScrollTop.style.display= 'block'
    }else{
        BtnScrollTop.style.display= 'none'
    }
})
// working on links
navLink.forEach(function(link){
    link.addEventListener('click',function(li){
        li.preventDefault()
        const HeaderNav = document.getElementById('nav-bar-div')
        const linkchoose = link.getAttribute('href').substring(1)
        const sectionId = document.getElementById(linkchoose)
        const navHeight = HeaderNav.offsetHeight
        const FarFromTop = sectionId.offsetTop
        let realScroll = HeaderNav.classList.contains('header-position-fixed') ? FarFromTop - navHeight: FarFromTop - (navHeight * 2)
        scrollTo({
            top: realScroll ,
        })
    })
})
// scrolling top 
window.addEventListener('DOMContentLoaded',function(){
    history.replaceState(null,null,'')
    scrollTo({
        top:0,
        right: 0,
    })
})

const logoIcon= document.querySelector('.logo')
logoIcon.addEventListener('click',function(){
    history.replaceState('','','')
    scrollTo(0,0)
})
const scrolToTop = document.querySelector('.btnScrollTop')
scrolToTop.addEventListener('click',function(){
    window.scrollTo(0,0)
})