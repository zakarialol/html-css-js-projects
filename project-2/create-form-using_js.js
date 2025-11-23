let divlol=document.createElement('div')
console.log(divlol)
let attribute=document.createAttribute("href")
attribute.textContent="www-facebook.com"
divlol.className='div-test'
let myComment=document.createComment("thsi the place when i start learning js and html")
let myText=document.createTextNode("this the world you wish to be in")
let even=document.createTextNode("this is the second paragraph")
divlol.appendChild(myComment)
divlol.appendChild(myText)
divlol.setAttributeNode(attribute)
document.body.appendChild(divlol)
