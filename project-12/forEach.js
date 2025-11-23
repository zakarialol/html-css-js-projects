let element=document.querySelectorAll("ul li")
let dust=document.querySelectorAll(".content div")
element.forEach(function(el){
    el.onclick=function(){

        element.forEach(function(el){
            el.classList.remove("active")
        })
        this.classList.add("active")
        dust.forEach(function(ele){
            ele.style.display="none"
        })
    }
})
