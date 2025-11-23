let my_name=document.getElementById('name')
let my_user_name=document.getElementById('user-name')
// let my_user=document.querySelector('[name="username"]')
let check=document.querySelector("[id='check']")
let form=document.querySelectorAll('form')

// let submit=document.getElementById('submit')
// chec.preventDefault()
form[0].onsubmit=function(event){
    let theUser=false
    let theAge=false
    if(my_name.value!=="" && my_name.value.length <=10){
        theUser=true
    }
    if(my_user_name.value !==""){
        theAge=true
    }
    if(theUser===false || theAge===false){
        event.preventDefault()
    }
    
}

//this for vising google site

let myVisiteBtn=document.getElementById('visite-google')
let visite_google=document.querySelector("[name='visite-site']")
// console.log(visite_google)
visite_google.onblur=function(){
    document.links[0].click()
}
console.log(document.links)