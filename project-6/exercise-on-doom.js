for(let i=1 ; i<=100 ;i++){
    let div_main=document.createElement("div")
    let header_main=document.createElement("h1")
    let paragraph=document.createElement("p")
    let cla=document.createAttribute("class")
    div_main.setAttributeNode(cla)
    div_main.setAttribute("class","product")
    let product_text=document.createTextNode(`product one ${i}`)
    let paragraph_text=document.createTextNode("$ the best product we got this go head $")
    header_main.appendChild(product_text)
    paragraph.appendChild(paragraph_text)
    div_main.appendChild(header_main)
    div_main.appendChild(paragraph)
    document.body.appendChild(div_main)
    header_main.style.margin="0px"
    paragraph.style.margin="0px 0px"
    div_main.style.marginBottom="20px"
    // console.log(div_main)
}