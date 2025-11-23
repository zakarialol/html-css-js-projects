//first lesson in the promise
// console.log('first project on the promise series')
// let firstpromiseTest = new Promise((resolved,rejected)=>{
//     let iftrue = false
//     if(iftrue){
//         setTimeout(()=>{
//             resolved('hello from promise')
//         },3000)
//     }else{
//         rejected('hello from another world')
//     }
// })

// firstpromiseTest.then(re=>(console.log('done',re))).catch(rej=>(console.log('error',rej)))

// console.log('second project on the promise series')

// let flipcoin = new Promise((resolve,reject)=>{
//     console.log(' fliping the coind wait 2 second')
//     setTimeout(() => {
//         coin = Math.random() < 0.5 ? 'head' : 'tail'
//             if(coin==='head'){
//             resolve('you won')
//     }else{
//             reject('you lose')
//     }
//     }, 2000);
// })

// flipcoin.then(res=>(console.log(res))).catch(rej=>(console.log(rej)))
// console.log('this is the third project about the promises')

// let testingpromise = new Promise((reso)=>{
//     reso(2)
// })
// testingpromise.then(ress=>{console.log(ress); return ress * 2 }).then(res => {console.log(res);return res * 3}).then(ekko=>{console.log(ekko)})

function newpromiseFunc(){
    let head = 'head'
    return newpromise = new Promise((resolve,reject)=>{
        if(head === 'tail') {
            resolve('you won bro')
        }else{
            reject('you lost the game')
        }
    })
}

newpromiseFunc().then(solv=>console.log(solv), rej=> console.log(rej))