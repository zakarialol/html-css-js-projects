let text=document.getElementById("text-box-one")
text.onclick=function(){
    console.log("yellow world")
}

window.onload=function(){
    console.log('just some onload events that might help you')
}
document.body.style.height="5000px"

text.onfocus=function(){
    console.log("this your mement time to prove you self")
}
window.onscroll=function(){
    console.log('menu on scrolling')
}
window.onresize=function(){
    console.log('resizing to this people who lost there mind trying to protect other')
}

//button testing
let btn=document.getElementById('click')
btn.onmouseenter=function(){
    console.log('you just past by you mouse in front of me')
}
btn.onmouseleave=function(){
    console.log('you just leaved am sorry for it brother ')
}
window.onload=function(){
    text.focus()
}
