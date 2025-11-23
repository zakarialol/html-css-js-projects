let inputText=document.querySelector("[name='input-text']")
let task_div=document.querySelector(".tasks")
let btn_add=document.querySelector("[name='btn-add']")



// 1
function createElement(text_value,key) {
    let p=document.createElement('p')
    let btn=document.createElement('button')
    let btn_text=document.createTextNode('delete')
    let small_div=document.createElement('div')
    
    p.appendChild(document.createTextNode(text_value))
    btn.appendChild(btn_text)
    task_div.appendChild(small_div)
    small_div.append(p,btn)

    //styling
    small_div.style.cssText='background:white; display:flex ;align-items:center ;justify-content:space-between;padding:10px; border-radius:10px;margin-bottom:10px'
    btn.style.cssText='background:orangered; border:none ; padding:5px 15px; border-radius:10px ; margin-left: 10px'  

    btn.addEventListener('click',function(){
        task_div.removeChild(small_div)
        localStorage.removeItem(key)  
    })
}
// 2
function addToTaskDiv(){
     let text_holder=inputText.value.trim()
     if(inputText.value===""){
        inputText.setAttribute('placeholder',"type something")
        return
    }
    let taskkey='task'+new Date().getTime()
    createElement(text_holder ,taskkey)
    localStorage.setItem(taskkey,text_holder)
    inputText.value=''
    inputText.setAttribute('placeholder',"")
}
//3
btn_add.addEventListener('click',addToTaskDiv)

window.onload=loadTasks
//4
function loadTasks(){
    for(let i=0; i<localStorage.length ;i++){
        let key=localStorage.key(i)
        if(key!==null && key.startsWith('task')){
            createElement(localStorage.getItem(key),key)
        }
    }
}
