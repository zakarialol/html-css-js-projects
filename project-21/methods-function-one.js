let numbers=[19,2,3,4,5]

let todo=numbers.map(function(a){
    return a+10
},10)
console.log(todo)

//some warm up
let swap='elZERo'
let test1=swap.split("").map(function(uper){
        // if(uper===uper.toUpperCase()){
        //     uper.toLowerCase()
        // }else{
        //     uper.toUpperCase()
        // }
        return uper===uper.toUpperCase()? uper.toLowerCase(): uper.toUpperCase()
    
}).join("")
console.log(test1)
let tonumber=[1,-10,-20,15,100,-30]
let summon=tonumber.map(function(possitive){
    return -possitive 
})
console.log(summon)

let isNotNumber="Elz123er4o"
let notnumber=isNotNumber.split("").map(function(ele){
    return isNaN(ele)===true ? ele : ""
}).join("")
console.log(notnumber)

let sentence="i love foood code too palaying much"
let newWord=sentence.split(" ").filter(function(el){
    return el.length<=4
}).join(" ")
console.log(newWord)
let theBeg=["bla","propaganda","Other","AAA","Battery","test","zakariaAitbibote"]
let newtheBeg=theBeg.reduce(function(element,curr){
    return element.length > curr.length ? element : curr
})
console.log(newtheBeg)

let removeChar=["E","@","@","l","z","@","@","e","R","@","o"]
let newCahr=removeChar.filter(function(el){
    return el==="@"? "": el
}).join("")
console.log(newCahr)