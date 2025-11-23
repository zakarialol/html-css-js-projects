let btnClick=document.getElementById("btn-click")
let colorText=document.getElementById('color-name')
let hexColor=document.getElementById('hex')
let simple=document.getElementById('simple')
let normal=document.getElementById('normal')
let array_colors=['red','blue','yellow','gray']
let hexArray=['#ccc','#843c3c']
let smipleArray=['white']
let currentIndex=0

//clicking the event

function clickMe(){
    if(currentIndex>=array_colors.length){
        currentIndex=0
    }
    colorText.textContent=`background color: ${array_colors[currentIndex]}`;

    changeColor(array_colors[currentIndex])

    currentIndex++;
    // if(currentIndex>=array_colors.length){
    //     currentIndex=0
    // }
}

// changing the color
function changeColor(index){
    document.body.style.cssText=`background:${index}`
}

//btn click to change the color
btnClick.addEventListener('click',clickMe)

//
function changeArray(){
    array_colors=[...hexArray]
}

hexColor.addEventListener('click',changeArray)
//
function simpleColor(){
    array_colors=[...smipleArray]
}

//
simple.addEventListener('click',simpleColor)
//
function backNormal(){
    array_colors=['red','blue','yellow','gray']
}
//

normal.addEventListener('click',backNormal)




