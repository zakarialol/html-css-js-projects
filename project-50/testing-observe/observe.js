// const  elemetent = document.querySelector('.skills-details #percent')
// const another = document.querySelector('.python-div')
const htmlLine = document.querySelector('.html-line')
const listOfLine = document.querySelectorAll('.line-info')
const listofPercent = document.querySelectorAll('.percent')

//observe
let observe = new IntersectionObserver(function(entries,obs){
    entries.forEach(function(entry){
        //
        if(entry.isIntersecting){
            let target = entry.target.classList
            let entrydata = entry.target.dataset.width
            let item = entry.target 
            if(target.contains('line-info')){

                entryf(item,entrydata,obs)
                obs.unobserve(item)

            }else if(target.contains('percent')){
                //****working with setinterval****
                // updateEl(item,entrydata)
                // obs.unobserve(item)
                //** working width animation frame*/
                updateWidthAnimationFram(item,entrydata)
                obs.unobserve(item)
            }
        }
        //
    })
})

function entryf(entry,entrydata,obs){
    increasehtml(entry,entrydata)
    obs.unobserve(entry)
}

[...listOfLine,...listofPercent].forEach((itm) => observe.observe(itm))
// working width setIntervalL
// function updateEl(entry,data){
//     let condition = false;
//     let nbr =1
//     if(!condition && nbr <= data){
//         condition = true
//         let count = setInterval(()=>{
//             entry.textContent = nbr + '%'
//             nbr++
//             if( nbr > data){
//                 clearInterval(count)
//                 condition = true
//             }
//         },20)
//     }
// }

//working width animationFrame

function updateWidthAnimationFram(entry,data){
    if(entry.dataset.isrunning==='true') return
    entry.dataset.isrunning = 'true'
    let nbr = 1
    let lastTime = performance.now()

    function animeUpdate(time){

        if(time - lastTime >= 15){
            entry.textContent = nbr + '%'
            nbr++
            lastTime = time
        } 

        if(nbr <= data){
                requestAnimationFrame(animeUpdate)
        }else{
            delete entry.dataset.isrunning
            console.log('conpleted',entry)
        }
        
    }
        requestAnimationFrame(animeUpdate)

}

function increasehtml(entry,dataWidth){
        entry.style.setProperty('--line-width',dataWidth + '%')
}

