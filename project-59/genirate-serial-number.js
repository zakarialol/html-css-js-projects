//selectors
const textHolder = document.querySelector(".main p")
const genirateButton = document.querySelector('.main button')
//
genirateButton.addEventListener('click',()=>{
    let length = 10
    genirateFunc(length)
})
function genirateFunc(len){
        //method 4 if we don't want to get deplacated letters
        let chars = 'abcdefghijklmnopqrstuvwxzy'
        let arraySplit = chars.split('')
        let arrayrandom = new Uint8Array(chars.length)
        console.log(arrayrandom)

        crypto.getRandomValues(arrayrandom)
        console.log(arrayrandom)

        if(len > chars.length){
            throw new Error('hello the letter are beger than the chars');
        }
        for(i = chars.length -1 ; i > 0 ; i--){
            const j = arrayrandom[i] % (i+1);
            [arraySplit[i],arraySplit[j]] = [arraySplit[j],arraySplit[i]]
        }
        textHolder.textContent = arraySplit.slice(0,len).join('')
    //methode 1
    // let result = ''
    // let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789'
    // let array = new Uint8Array(len)
    // crypto.getRandomValues(array)
    // console.log(209 % 26)
    // for(let i = 0 ; i < len ; i++){
    //     result += chars[array[i] % chars.length]
    // }
    // textHolder.textContent = result
    //methode 2***
    // let timestamp = Date.now()
    // let result = ''
    // for(let i = 0 ; i < 12 ; i++){
    //     let timestamp = Date.now()
    //     let random = Math.floor(Math.random()*26)
    //     let letterNumber = String.fromCharCode(97 + random) 
    //     result +=letterNumber
    // }
    // textHolder.textConten = result + timestamp.toString(36)
    //methode 3 ***
    // let result='';
    // let letters = "abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXZY0123456789"
    // for(let i=0; i<8 ; i++){
    //    result += letters[Math.floor(Math.random()*letters.length)]
    // }
    // textHolder.textContent = result
}
//just training a bit
/*
let array = 'banana,appele,orange'
let arrasplit = array.split(',')
console.log(array.split(','))
let arrayslice = arrasplit.slice(0,2).join(' ')
console.log(arrasplit.slice(0,2).join(' '))
console.log(typeof arrasplit)
console.log(typeof arrayslice)
*/


