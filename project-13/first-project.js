let array=["yello","brown","red"]
let double=["bark","todo"]
let number=[1,3,4]
function toUpper(){
    for(let i=0;i<array.length;i++){
        console.log(array[i].toUpperCase())
    }
}
toUpper()
function toDouble(){
    console.log(double[0],double[0],double[1],double[1])
}
function toNumber(){
    // for(let i=0;i<number.length;i++){
    //     let d=0
    //     d+=number[i]
    //     console.log(d)
    // }
    let d=number[0]+number[1]+number[2]
    console.log(d)
}
toNumber()
