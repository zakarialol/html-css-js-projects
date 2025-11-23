let textBox=document.getElementById('first-t-box')
let saveBtn=document.getElementById('saveBtn')
let addValue=document.getElementById('add-value')
let planDiv=document.getElementById('omer')
let deletebtn=document.getElementById('deleteBtn')
let save=document.getElementById('save')
let savedtodo= JSON.parse(localStorage.getItem('todos'))
let todo
if(Array.isArray(savedtodo)){
    todo=savedtodo
}
else{
    todo=[{
        city:"alnif",
        date:"11/05/2018",
        id:"ad1"
    },
    {
        city:"tazarin",
        date:"11/05/2018",
        id:"ad2"
    
    },
    {
        city:"khemisset",
        date:"11/05/2018",
        id:"ad3"
    }
    ]
}
render()
deletebtn.addEventListener('click',function(){
    todo.pop()
    render()
})
function addTodo(kalma,datepickerr){
    let newid=''+new Date().getTime()
    todo.push({
        id :newid, 
        city:kalma,
        date:datepickerr
    })
    local()
}
function local(){
    localStorage.setItem('todos',JSON.stringify(todo))
}
addValue.addEventListener('click',function(){
    let kalma=textBox.value
    let datepick=document.getElementById('date-picker')
    let datepickerr=datepick.value
    addTodo(kalma,datepickerr)
    render()
})
function deleteTodo(idtodelete){
    todo = todo.filter(function(todoo){
        if(todoo.id===idtodelete){
            return false
        }
        else{
            return true
        }
    })
    local()
}
function deletetodo(event){
    let deleBtn=event.target
    let idtodelete=deleBtn.id;
    //if todo.id muches the id todelete return false otherwise return other
    deleteTodo(idtodelete)
    render()
}
saveBtn.addEventListener('click',function(){
    render()
})
function render(){
    planDiv.innerText=''
    todo.forEach(function(todo) {
        let divv=document.createElement('div')
        divv.innerText=todo.city+' '+todo.date
        planDiv.appendChild(divv)
        let deleBtn=document.createElement('button')
        deleBtn.innerText="delete"
        deleBtn.style='margin-left:20px'
        deleBtn.id=todo.id
        deleBtn.onclick=deletetodo
        divv.appendChild(deleBtn)
    });
}
