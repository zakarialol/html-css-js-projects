const btn = document.querySelectorAll('.btn-plus')
const loremP = document.querySelectorAll('.lorem')
const btnNegative = document.querySelectorAll('.btn-negative')

function addDisplay(){

    loremP.forEach(function(p){
        p.classList.add('display')
    })
    
    btnNegative.forEach(function(check){
        if(!check.classList.contains('display')){
            check.classList.add('display')
        }
    })

    btn.forEach(function(btnpl){
        if(btnpl.classList.contains('display')){
            btnpl.classList.remove('display')
        }
    })

}

btn.forEach(function(btnPlus,index){

    btnPlus.addEventListener('click',function(){
        addDisplay()
        btnPlus.classList.toggle('display')
        btnNegative[index].classList.toggle('display') 
        loremP[index].classList.toggle('display')
    })

})

btnNegative.forEach(function(btnN,index){

    btnN.addEventListener('click',function(){
        // addDisplay()
        btnN.classList.toggle('display')
        btn[index].classList.toggle('display') 
        loremP[index].classList.toggle('display')
    })

})