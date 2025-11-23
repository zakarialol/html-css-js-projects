let main_div=document.createElement('div')
let head_main=document.createElement('p')
let head_nav=document.createElement('nav')
// let nav_ul=document.createElement('ul')
let li_one=document.createElement('li')
let li_two=document.createElement('li')
let li_three=document.createElement('li')
let li_four=document.createElement('li')

//add text to header
let head_main_text=document.createTextNode('elzero')

//add text to li
let li_text_one=document.createTextNode('home')
let li_text_two=document.createTextNode('about')
let li_text_three=document.createTextNode('service')
let li_text_four=document.createTextNode('contact')

//adding the text to elements
head_main.appendChild(head_main_text)
main_div.appendChild(head_main)

//adding text to the li
li_one.appendChild(li_text_one)
li_two.appendChild(li_text_two)
li_three.appendChild(li_text_three)
li_four.appendChild(li_text_four)

//adding li to nav place
head_nav.appendChild(li_one)
head_nav.appendChild(li_two)
head_nav.appendChild(li_three)
head_nav.appendChild(li_four)

//adding the mainNav to mainDiv
main_div.appendChild(head_nav)

//appending the main_div to body
document.body.appendChild(main_div)

// adding some class
main_div.setAttribute('class','main-div')
head_nav.setAttribute('class','main_nav')

//adding styling
main_div.style.cssText="display: flex ; justify-content: space-between; align-items: center; padding:0px 5% ;  text-transform:capitalize " //this for main-div
head_nav.style.cssText="display: flex ; column-gap: 20px ; list-style-type:none;"
head_main.style.cssText="font-weight: bold ; color: green ; font-size: 22px; margin: 0px ; padding: 5px 0px"

//begin of creating element in body
let div_body=document.createElement('div')
for(let i=1 ; i <=15 ; i++){

    let smal_div=document.createElement('div')
    let span_text=document.createElement("span")
    let product_paragraph=document.createElement('p')
    //making product text
    let product_text=document.createTextNode('product')
    product_paragraph.appendChild(product_text)
    //loop for the div_body
    let span_nbr=document.createTextNode(`${i}`)
    span_text.appendChild(span_nbr)
    smal_div.appendChild(span_text)
    smal_div.appendChild(product_paragraph)
    div_body.appendChild(smal_div)
    smal_div.setAttribute('class','styling')
    smal_div.style.cssText="background:white ; display:flex; flex-direction: column; align-items:center ; justify-content: center ; height:80px"
    product_paragraph.style.cssText="margin: 3px 0px; font-size:11px ;color:gray"
    span_text.style.cssText="font-weight:bold ; font-size:20px"
}
//appending the div-body to the body
document.body.appendChild(div_body)
//begin of styling the div center
div_body.style.cssText="display: grid ; grid-template-columns: 1fr 1fr 1fr ; column-gap: 20px ;row-gap:20px; padding: 3% 5% 0px; background: #f5f3f3;"

//finaly the footer design
let footer=document.createElement('footer')
let footer_text=document.createTextNode('copyright 2021')
footer.appendChild(footer_text)
document.body.appendChild(footer)
//footer css styling
footer.style.cssText='text-align:center; padding:10px 0px ;background-color:green; text-transform:capitalize; color:white'






