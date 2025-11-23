// function saveInput(){
//     console.log("hello this is ain't me")
// }
let MyLeads=[]
let inputEl=document.getElementById("input-el")
let btnSave=document.getElementById("input-btn")
const ulEl=document.getElementById("ulvar")
btnSave.addEventListener("click",function(){
    // console.log("hi this is ani't me")
    MyLeads.push(inputEl.value)
    console.log(MyLeads)
    renderleads()
    inputEl.value=""
})

// for(let i=0;i<MyLeads.length;i++){
//     // ulEl.innerHTML+="<li>" + MyLeads[i] +"</li>"
//     // const li=document.createElement("li")
//     // li.textContent = MyLeads[i]
//     // ulEl.append(li)
//     // listItem+="<li>" + MyLeads[i] +"</li>"
// }
// ulEl.innerHTML+=listItem
function renderleads(){
        let listItem=""
        for(let i=0;i<MyLeads.length;i++){
            // listItem+="<li><a target='_blanc' href=''>"+ MyLeads[i] + +"</a></li>"
            listItem+= `<li>
                            <a target='_blanc' href=''>${MyLeads[i]}</a>
                        </li>`
        }
        // console.log(i)
        // ulEl.innerHTML+="<li>" + MyLeads[i] +"</li>"
        // const li=document.createElement("li")
        // li.textContent = MyLeads[i]
        // ulEl.append(li)
    
    ulEl.innerHTML=listItem
}
// let messageEl=document.getElementById("message")
let full=document.getElementById("htmlfull")
full.innerHTML="<button onclick='buy()'>buy !</button>"
function buy(){
    full.innerHTML+="<p>thanks for buying this product</p>"
}






// console.log(MyLeads)
