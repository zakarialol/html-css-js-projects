let domainArray = ['web','web','graphic','graphic','marketing','web','web','marketing','marketing','graphic']
//selectors
let navholder = document.querySelector('nav')
let divHolder = document.querySelector('.itemsHolder')
let NewFilrdDomainArr = new Set([...domainArray])

function appendToNav(){
    NewFilrdDomainArr.forEach((itm)=>{
        navholder.innerHTML +=`<li class='navChild' data-domain='${itm}'>${itm}</li>`
    })
}
appendToNav()

function appendingAllitems(passedArr){

    appendingItems(passedArr)
    let itms = document.querySelectorAll('.itemsHolder p')
    handleBackgroundColor(itms)
}
appendingAllitems(domainArray)
//
function appendingItems(passedArr){
    divHolder.innerHTML = ''
    passedArr.forEach((itm)=>{
        divHolder.innerHTML += `<p class = 'itm' data-domain='${itm}'>${itm}</p>`
    })
}
function handleBackgroundColor(Arr){
    Arr.forEach((itm)=>{
        let Dataitm = itm.dataset.domain
        if(Dataitm === 'web'){
            itm.style.background = 'red'
        }else if(Dataitm === 'graphic'){
            itm.style.background = 'blue'
        }else{
            itm.style.background = 'black'
        }
    })
}

// filtering the menu buy clicking

function filterMenu(){
    let navBtns = document.querySelectorAll('nav li')
    navholder.addEventListener('click',(Btn)=>{
        let domain = Btn.target.dataset.domain
        appendFilterdItems(domain)
        ToRemoveActiveClass(navBtns,domain)
    })
}
filterMenu()

function appendFilterdItems(domain){
    let filteredArray = domainArray.filter((itm)=> domain == 'all work'? domainArray : itm === domain)
    appendingAllitems(filteredArray)
}

function ToRemoveActiveClass(Btns,domain){
    Btns.forEach((butt)=>{
        butt.classList.remove('active')
        if(butt.dataset.domain === domain){
            butt.classList.add('active')
        }
    })
}