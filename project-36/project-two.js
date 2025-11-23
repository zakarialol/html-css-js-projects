let count=0
const btns= document.querySelectorAll('.btn')
const countPlace=document.getElementsByClassName('count-nbr')

// const countB=document.getElementById('count-nbr')
console.log(countPlace)

btns.forEach(function(el){
    el.addEventListener('click',function(e){

        const btnTarget= e.currentTarget.classList
        if(btnTarget.contains('decrease')){
            count--
        }else if(btnTarget.contains('increase')){
            count++
        }else if(btnTarget.contains('reset')){
            count=0
        }
        countPlace[0].textContent = count
        if(count > 0){
            countPlace[0].style.color='green'
        }else if(count < 0){
            countPlace[0].style.color='red'
        }else if(count===0){
            countPlace[0].style.color='black'
        }
    })
})



// const count_nbr = document.querySelector('.count-nbr')
// const DcreaseBtn = document.querySelector('.decrease')
// const IncreaseBtn = document.querySelector('.increase')
// const ResetBtn = document.querySelector('.reset')


// function increase(){
//     let nb=parseInt(count_nbr.textContent) 
//     nb=nb + 1
//     count_nbr.textContent=nb
//     colorCount(nb)
// }
// //
// function decrease(){
//     let nb=parseInt(count_nbr.textContent) 
//     nb=nb - 1
//     count_nbr.textContent=nb
//     colorCount(nb)
// }

// function reset(){
//     count_nbr.textContent = 0
//     colorCount(0)
// }

// function colorCount(nbr){
//     if(nbr<0){
//         count_nbr.style.color='red'
//     }else if(nbr>0){
//         count_nbr.style.color='green'
//     }else{
//         count_nbr.style.color='black'
//     }
// }
// IncreaseBtn.addEventListener('click',increase)
// DcreaseBtn.addEventListener('click',decrease)
// ResetBtn.addEventListener('click',reset)
