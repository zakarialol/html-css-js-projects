function showdetail(a,b,c){
    let name,age,isactive,text;
    [a,b,c].forEach(function(para){
        if(typeof para==='string'){
            name=para
        }else if(typeof para==='number'){
            age=para
        }else if(typeof para==='boolean'){
            isactive=para
        }
    })
    if(isactive===true){
        text="you're available for this hire"
    }else(
        text="you're not available for hire"
    )

    return `hello ${name} ,your age is ${age} ${text}`
}
console.log(showdetail('zakaria',35,true))
console.log(showdetail(false,'zakaria',15))
console.log(showdetail('osama',33,true))