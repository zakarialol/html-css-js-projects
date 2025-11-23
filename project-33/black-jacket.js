

let telegram=document.getElementById("message-el")
let message=""
let sum=0
let habit=[]
let isalive=false
let hasblackjack=false
let i=0
let sumN=document.getElementById("sumN")
let card=document.getElementById("card")
let testol=document.getElementById("player-el")
let player={
    name:"per",
    chips:"50"
}
testol.textContent=player.name+": $"+player.chips
console.log(telegram)
function startgame(){
    let nbr1=getRandomCard()
    let nbr2=getRandomCard()
    habit=[nbr1,nbr2]
    sum=nbr1+nbr2
    isalive=true
    rendergame()
}
function getRandomCard(){
   let d= Math.floor(Math.random()*13)+1
   return d
}
function rendergame(){
    if(sum===21){
        message="you've got blackjack card"
        hasblackjack = true
    }
    else if (sum < 21){
        message="do you want to draw new card"
    }
    else{
        message="game over"
        isalive=false
    }
    telegram.textContent=message
    for(i;i<habit.length;i++){
        card.textContent+=habit[i]+" "
    }
    sumN.textContent="sum: " + sum
}
function newcard(){
    if (isalive===true && hasblackjack === false){
        let soccer=getRandomCard()
        habit.push(soccer)
        sum+=soccer
        rendergame()
    }
}



