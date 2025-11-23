
function testf(){
    console.log('tonight you and i we beautiful like daimound in the sky eye to eye')
}
let test=setTimeout(testf,3000)
let btn_test=document.get('btn-save')
console.log(btn_test)
let btn_test2=document.getElementById('btn-save')
console.log(btn_test2)
btn_test.onclick=function(){
    clearTimeout(test)
}