/*
product practice
*/
let products=['keyboard','mouse','pen','pad','monitor','iphone'];
let colors=['red','green','blue']
let count=5
document.write(`<h1>this is the ${count} product we have with the colors</h1>`)
for(let i=0 ; i<count ; i++){
    document.write(`<div>`)
    document.write(`<h1>[${i}] ${products[i]}</h1>`)
    for(let j=0 ;j<colors.length ;j++){
        document.write(`<p> #${colors[j]}</p>`)
    }
    document.write(`${colors.join(" | ")}`)
    document.write(`</div>`)
}
let k=0 ;
do{
    console.log(colors[k])
    k++
}while(k < 3)

function calc(...test){
    let result=0
    for(let i=0 ; i<test.length ;i++){
        result=result+test[i]
    }
    return `this is the result you've got ${result}`
}
console.log(calc(10,80,30,40,50))