//array of images
let ArrayOfImages = ['img/cat-01.jpg','img/cat-02.jpg','img/cat-03.jpg','img/cat-04.jpg','img/cat-05.jpg','img/cat-06.jpg','img/cat-07.jpg','img/cat-08.jpg']

// selectors
const imageDiv = document.querySelector('.nav .ImageHolder')
const BtnPrevious = document.querySelector('.nav .BtnPrevious')
const BtnNext = document.querySelector('.nav .BtnNext')
const imageDivHolder = document.querySelector('.image-holder .img')
const slideText = document.querySelector('.slide-text')
let count = parseInt(localStorage.getItem('imagePosition'))  || 1
//
let ImagePositionHolder;
//rendring visible buttons as we want
function renderingindexes(count){
    imageDiv.innerHTML = ''
    let maxvisible = 5
    let totalimages = ArrayOfImages.length
    let start =Math.floor(count - (maxvisible/2)) 
    let end = start + maxvisible
    if(start < 0){
        start = 0
        end = Math.min(totalimages , (start + maxvisible))
    }else if(end > totalimages){
        start = Math.max((totalimages - maxvisible),0)
        end = totalimages
    }
    for(i = start ; i < end ; i++){
     imageDiv.innerHTML += `<li data-nbr=${i+1} class = 'ImagePosition'>${i + 1}</li>`
     ImagePositionHolder = document.querySelectorAll('.ImageHolder li')
    }
}
renderingindexes(count)
// function to apply styles on active position of image
function activePositionFunc(count){
    ImagePositionHolder.forEach((itm,index)=>{
        let dataindex = parseInt(itm.dataset.nbr)
        itm.addEventListener('click',function(){
            DisableOrActiveBtns(dataindex)
            slideTextfunc(dataindex)
            imageHolderfunc(dataindex)
            localStoargeSaveFunc(dataindex)
            renderingindexes(dataindex)
            activePositionFunc(dataindex)
        })
        //active position
        itm.classList.remove('active')
        if(count === dataindex){
            itm.classList.add('active')
        }
    })
}
activePositionFunc(count)

// function to add class active
function DisableOrActiveBtns(count){
    if(count <= 1){
        BtnPrevious.setAttribute('disabled','')
        BtnPrevious.style.border = 'none'
    }
    else if(count > 1){
        BtnPrevious.removeAttribute('disabled')
        BtnPrevious.style.border = 'solid 1px purple'
    }
    if(count == ArrayOfImages.length){
        BtnNext.setAttribute('disabled','')
        BtnNext.style.border = 'none'
    }
    if(count < ArrayOfImages.length){
        BtnNext.removeAttribute('disabled')
        BtnNext.style.border = 'solid 1px purple'
    }

}
// function to call when we click on button next
function BtnNextfunc(count){
    count++
    DisableOrActiveBtns(count)
    imageHolderfunc(count)
    slideTextfunc(count)
    renderingindexes(count)
    activePositionFunc(count)
    localStoargeSaveFunc(count)

}
//adding eventlistner to button next
BtnNext.addEventListener('click',()=>{
    count = parseInt(localStorage.getItem('imagePosition'))  || 1
    BtnNextfunc(count)
})

// function to call when we click on btn previous
function BtnPreviousfunc(count){
    count--
    DisableOrActiveBtns(count)
    imageHolderfunc(count)
    slideTextfunc(count)
    renderingindexes(count)
    activePositionFunc(count)
    localStoargeSaveFunc(count)
}
//adding event listner on BtnPrevious

BtnPrevious.addEventListener('click',()=>{
    count = parseInt(localStorage.getItem('imagePosition'))  || 1
    BtnPreviousfunc(count)
})
//function to append image to div
function imageHolderfunc(count){
    imageDivHolder.innerHTML = `<img src="${ArrayOfImages[count - 1]}" alt="">
`
}
//onload window
window.onload = ()=>{
    let nbr =parseInt(localStorage.getItem('imagePosition') || 1) 
    imageHolderfunc(nbr)
    DisableOrActiveBtns(nbr)
    slideTextfunc(nbr)
    activePositionFunc(nbr)
    slideText.style.top = -slideText.scrollHeight +'px'
}
// slide to show current picture
function slideTextfunc(count){
    const ArrayLengthNbr = ArrayOfImages.length
    slideText.innerHTML = `slide #${count} of ${ArrayLengthNbr}`
}

//save to local storage
function localStoargeSaveFunc(count){
    localStorage.setItem('imagePosition',count)
}
