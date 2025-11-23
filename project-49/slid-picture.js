pictures = ['img/cat-01.jpg','img/cat-02.jpg','img/cat-03.jpg','img/cat-04.jpg','img/cat-05.jpg','img/cat-06.jpg','img/cat-07.jpg','img/cat-08.jpg']

//selcting elements
const PicturesHolder = document.querySelector('main .pictures-container')
const testdiv = document.querySelector('.test-div')
const BtnNext = document.querySelector('main .btn-holder .nextBtn')
const BtnPrev = document.querySelector('main .btn-holder .prevBtn')
const indexHolder = document.querySelector('.index-container')
let nbr=1;


// add event listner
BtnNext.addEventListener('click',()=>{
    if(nbr === pictures.length){
        nbr = 0
    }
    nextImg()
    indexHolder.innerHTML = `${nbr}`
})
BtnPrev.addEventListener('click',()=>{
    prevImg()
})

function nextImg(){
    PicturesHolder.innerHTML = `<img src="${pictures[nbr]}" alt="img">`
    //
    nbr++
    //
}
function prevImg(){
    if(nbr === 1){
        nbr = pictures.length + 1
    }
    nbr--
    indexHolder.innerHTML = `${nbr}`
    PicturesHolder.innerHTML = `<img src="${pictures[nbr-1]}" alt="img">`
}

window.addEventListener('load',()=>{
    indexHolder.innerHTML = nbr
    PicturesHolder.innerHTML =`<img src='${pictures[0]}' alt='img'>`
})

// function conditionForNbr(){
//     // if(nbr > 0 && nbr < pictures.length - 1){
//     //     BtnPrev.classList.remove('hidden')
//     //     BtnNext.classList.remove('hidden')
//     // }else if(nbr === pictures.length-1){
//     //     BtnNext.classList.add('hidden')
//     // }else{
//     //     BtnPrev.classList.add('hidden')
//     // }
//     console.log(nbr)
//     // console.log(pictures.length - 1)

// }

