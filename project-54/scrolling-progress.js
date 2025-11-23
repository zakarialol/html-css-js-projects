//selectors
const ProgressPercent = document.querySelector('.progress-percent')

//
window.addEventListener('scroll',()=>{
    let scroled = window.scrollY
    let fullheight = document.documentElement.scrollHeight
    let viewport = window.innerHeight
    let calcultedView = fullheight - viewport
    let percent = (scroled/calcultedView)*100
    console.log(percent.toFixed(1))
    ProgressPercent.style.width = percent + '%'
})