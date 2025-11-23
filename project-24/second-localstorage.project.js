let arr=new Array()
let obj=new Object()
let task_text= document.querySelector("[name='input-text']")
let btn_add= document.querySelector('[name="btn-add"]')
let task_div=document.querySelector('.tasks')

//function to add task in the dom
function addToDom(text_task,text_id){
    let obj={title:text_task, id:text_id}
    arr.push(obj) 

    //dom
    let div_small=document.createElement('div')
    let p_holder=document.createElement('p')
    let delete_text=document.createTextNode('delete')
    let btn_delete=document.createElement('button')
    //appending childs
    delete_text.textContent='delete'
    p_holder.textContent=text_task
    btn_delete.appendChild(delete_text)
    div_small.append(p_holder,btn_delete)
    task_div.append(div_small)
    //styling
    div_small.style.cssText= "display:flex; align-items:center; justify-content:space-between;background:white;padding:5px; margin-bottom:10px;border-radius:5px"
    btn_delete.style.cssText="background:orangered; padding:5px 15px;border:none;color:white; font-weight:bold;border-radius:5px"
    p_holder.style.cssText="padding:0px 10px"
    //
    addTaskToStorage(arr)
    btn_delete.addEventListener('click',function(){
        task_div.removeChild(div_small)
        arr=arr.filter(function(el){
            return el.id!==text_id 
        })
        addTaskToStorage(arr)
    })

    task_text.value=''
    task_text.setAttribute('placeholder',"")
}

//
function addTaskToStorage(arrh){
    localStorage.setItem('tasks',JSON.stringify(arrh))
}


//
btn_add.addEventListener( 'click',function(){
    let text_add= task_text.value
    let new_id= 'task'+ new Date().getTime()
    if(task_text.value===''){
        task_text.setAttribute('placeholder',"type something")
    }else{
        addToDom(text_add,new_id)
    }
})
//onlocad functionq
function onloadL(){
   let localS=JSON.parse(localStorage.getItem('tasks'))
   if(localS===null){
    return
   }else{
    localS.forEach(function(element){
        let tit=element.title
        let idd=element.id
        addToDom(tit,idd)
   })
   }
}

//window onload
window.onload=onloadL




