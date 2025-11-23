let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_S,c,o,o,l,2,0,z"
//log Elzero Web Scool
let sulition=myString.split("").map(function(el){
    return !isNaN(el)===true ||el=== "," ? "" : el
}).reduce(function(el,ac){
    return `${el}${ac}`
}).slice(true,-true)
console.log(sulition.split("_").join(" "))