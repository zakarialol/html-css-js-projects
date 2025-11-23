//if challenge
let a=10

if (a<10){
    console.log(10)
}else if (a>=10 && a<=40){
    console.log("10 to 40")
}else if (a>40){
    console.log(">40")
}else{
    console.log("unknown")
}
//write with ternary santax
a<10?console.log("10"):(a>=10 && a<=40)?console.log('10 to 40'):(a>40)?console.log('>40'):console.log('unknown')

let st="Elzero Web School"
if(typeof (st)===typeof('34')){
    console.log('good')
}

