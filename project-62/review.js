let imglogo=document.getElementById('img-logo')
let Name=document.getElementById('name')
let domain=document.getElementById('domain')
let reviewP=document.getElementById('review-paragraph')
let chovenLeft=document.getElementById('choven-left')
let chovenRight=document.getElementById('choven-right')
let btnSurprise=document.getElementById('surpriseMeBtn')
let NextReview=0

let reviewObject=[
    {
        image:"./img/avatar-01.png",
        name:'susan smith',
        domain:'web devloper',
        paragraph:"hello my name is susan smith i do really like the web devloper and i really like this "
    },

    {
        image:"./img/avatar-02.png",
        name:'bill anderson',
        domain:'the addss',
        paragraph:"hello my name is bill anderson i do really like the web devloper and i really like this "
    },

    {
        image:"./img/avatar-03.png",
        name:'anna johnson',
        domain:'web desinger',
        paragraph:"hello my name is anna johson i do really like the web designer and i really like this "
    },
    {
        image:"./img/avatar-04.png",
        name:'peter jones',
        domain:'intern',
        paragraph:"hello my name is peter jones i do really like intern and i really like this and the is the practice i did"
    }
  
]

function FchovenRight(){
    NextReview=(NextReview+1) % reviewObject.length
    fillTheDoom(NextReview)
}
function FchovenLeft(){
    NextReview--
    if(NextReview < 0){
        NextReview=reviewObject.length-1
    }
    fillTheDoom(NextReview)
}

function fillTheDoom(NextReview){
    imglogo.src = reviewObject[NextReview].image
    Name.textContent = reviewObject[NextReview].name
    domain.textContent = reviewObject[NextReview].domain
    reviewP.textContent = reviewObject[NextReview].paragraph
}
fillTheDoom(NextReview)
chovenRight.addEventListener('click',FchovenRight)
chovenLeft.addEventListener('click',FchovenLeft)

function ChoseRandomN(){
    NextReview = Math.floor(Math.random()*reviewObject.length)
    fillTheDoom(NextReview)  
}
btnSurprise.addEventListener('click',ChoseRandomN)


