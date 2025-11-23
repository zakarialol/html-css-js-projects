let countHolder = document.querySelector('form .count-holder')
let inputfield = document.querySelector('form .inputfield')
let progress = document.querySelector('form .progress')
console.log(progress)
console.log(countHolder)
console.log(inputfield)
//
let maxlengt = inputfield.getAttribute('maxlength')
countHolder.textContent = maxlengt
//event listner on input
inputfield.addEventListener('input',function(){
    // console.log('hello world')
    let inputvalue = inputfield.value
    let rest = maxlengt - inputvalue.length
    progress.style.width = `${this.value.length * 100 /maxlengt}%`
    if(countHolder.textContent === '0'){
        countHolder.style.color = 'red'
    }else{
        countHolder.style.color = 'black'
    }
})
  
