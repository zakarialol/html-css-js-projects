let p1=document.getElementById("p1")
p1.onclick=function(){
    console.log("hellow world")
}

console.log(p1)
let d2=document.querySelectorAll("p")
console.log(d2[1])

let d3=document.querySelector("div")
console.log(d3)

let d4=document.getElementsByClassName("past")
console.log(d4)

d5=document.querySelector("div #last-p")
console.log(d5)

d6=document.getElementsByTagName("div")
console.log(d6)

d7=document.getElementsByTagName("form")
console.log(d7[1])

d8=document.querySelector("#hyper-form")
console.log(d8)

d9=document.getElementsByName("p")
console.log(d9)

let dand=document.links
console.log(dand)

console.log(document.body)
console.log(document.links.facebook)

console.log("//this is comment to know the new project where it start")

let linko=document.querySelectorAll("a")
linko[1].href="www.instaram.com"
linko[1].id=""
// linko[1].id='just testing'
linko[1].setAttribute('value','yello world')
console.log(linko[1])

let linko2=document.querySelector("button")
console.log(linko2)
linko2.setAttribute('value','yellow world')
linko2.setAttribute('class','button-cl')
console.log(linko2.getAttribute('value'))
console.log(linko2.getAttribute('class'))

if(linko[1].getAttribute('id')===""){
    linko[1].setAttribute('id',"for-example")
}else{
    console.log('this item has id already')
}
if(linko2.hasAttribute('class')){
    linko2.removeAttribute('class')
}else{ console.log('not found')}
