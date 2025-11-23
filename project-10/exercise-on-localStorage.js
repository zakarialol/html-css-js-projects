let click_div=document.querySelectorAll(".small-div")
let color_back=document.querySelectorAll('.present-the-color')

// click_div.forEach((li)=>{
//     li.addEventListener('click',(e)=>{
//         click_div.forEach((del)=>{
//             del.classList.remove('active')
//         })
//     })
// })
// localStorage.clear()
if(window.localStorage.getItem('color')){
     //remove the active class from the div
     click_div.forEach(function(li){
        li.classList.remove('active')
    })
    color_back[0].style.background=localStorage.getItem('color')
    //
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active')
}else{
    console.log('hello world')
}

click_div.forEach(function(li){
    li.addEventListener('click',function(e){
        //remove the active class from the div
        click_div.forEach(function(li){
            li.classList.remove('active')
        })
        //
        e.currentTarget.classList.add('active')
        //adding color to the local storage
        localStorage.setItem('color',e.currentTarget.dataset.color)
        //adding back ground to the div
        let colorr=localStorage.getItem('color')
        color_back[0].style.background=colorr
        
    })
})