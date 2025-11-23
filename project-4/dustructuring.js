/*distracturing mixed contencte */

//  const obj ={
//     theName:"zakaria",
//     theAge: 23,
//     skills:["html","css","js"],
//     address:{
//         egypt:"cario",
//         sauodi:"ryad"
//     }
// }
// console.log(obj)

// const { theName:na,theAge:age,skills:[a,b,c],address:{egypt:e}} = obj

// console.log(`hello ${na}`)

//distructuring challenge
let chosen=1;

let myfreinds=[
    {title:"osama",age:39,available:true,skills:['html','css']},
    {title:"zakaria",age:39,available:false,skills:['pythone','django']},
    {title:"lol",age:39,available:true,skills:[{name:'hello'}]}
];
if(chosen===1){
    ({title,age,available,skills:[html,css]}=myfreinds[0])
    if(available===true){
        available='available'
    }else(
        available='not avaialbe at this moment'
    )
    console.log(`${title}`)
    console.log(`${age}`)
    console.log(`${available}`)
    console.log(`${css}`)
}
if(chosen===2){
    ({title,age,available,skills:[html,css]}=myfreinds[1])
    if(available===true){
        available='available'
    }else(
        available='not avaialbe at this moment'
    )
    console.log(`${title}`)
    console.log(`${age}`)
    console.log(`${available}`)
    console.log(`${css}`)
}
if(chosen===3){
    ({title,age,available,skills:[html,css]}=myfreinds[2])
    if(available===true){
        available='available'
    }else(
        available='not avaialbe at this moment'
    )
    console.log(`${title}`)
    console.log(`${age}`)
    console.log(`${available}`)
    console.log(`${css}`)
}
// myfreinds.forEach(function({title,age,available,skills}){
//     ({title,age,available,skills:[html,css]}=myfreinds[1])
//     if(available===true){
//         available='available'
//     }else(
//         available='not avaialbe at this moment'
//     )
//     console.log(title)
//     console.log(age)
//     console.log(available)
//     skills.forEach(function({html,css}){
//         console.log(html)
//         console.log(css)
//     })
// })

