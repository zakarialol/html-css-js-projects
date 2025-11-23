/*
funtion arrow challenge
*/

let names=function(...nameList){

    return `string ${nameList}=> done!`
}
console.log(names('[osama]','[mohamed]','[ali]','[ibrahim]'))
// let names=(...nameList)=>`${nameList} => done!`
// console.log(names('osama','mohaed','ali','ibrahim'))

// let nums=[20,50,10,60]
// let calc=(one,two,...numbers)=>one+two+numbers[0]
// console.log(calc(10,nums[0],nums[1]))

let num=[20,50,10,60]
function calc(one,two,...numbers){
    return one + two + numbers[2]
}
console.log(calc(10,num[0],num[1],num[3],90))
