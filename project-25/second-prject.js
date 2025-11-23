let todos=['yello','world','red']
let save=document.getElementById('save')
let typeT=document.getElementById('type')
let colorsList=document.getElementById('colors-list')

render()
function sav(){
    let vle=typeT.value
    todos.push(vle)
    render()
}
function render(){
    colorsList.innerText=""
    todos.forEach(function(arrayElement) {
        let divt=document.createElement('div')
        divt.innerText=arrayElement
        colorsList.appendChild(divt)
    });
}