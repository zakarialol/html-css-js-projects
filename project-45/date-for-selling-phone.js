
// const secondd = document.createTextNode(dateSec)
const mon=['January','February','March','Apr','May','June','July','August','September','October','Novermber','December']
const dayss=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
const forDays = document.querySelector('.for-date .days')
const forHours = document.querySelector('.for-date .hours')
const forMin = document.querySelector('.for-date .minute')
const forSecs = document.querySelector('.for-date .secs ')
const forDateDiv = document.querySelector('.for-date')
const givewayText = document.querySelector('.giveway-paragraph')
const currentTime = document.querySelector('.head-title .current-time')
//
let futurDate = new Date();

let tempDays = futurDate.getDate()
    futurDate.setDate(tempDays + 10)

function startcurentime(){
    const timer = setInterval(() => {
        let now = new Date()
        const finalTime= futurDate.getTime() - now.getTime()
    
        if(finalTime <= 0){
            clearInterval(timer)
            forDateDiv.innerHTML = `<p class = 'expried'>the giveway time ended good luck next time</p>`
        }
    
        const days = Math.floor(finalTime/(1000*60*60*24)) 
        const hours = Math.floor((finalTime%(1000*60*60*24))/(1000*60*60))
        const minute = Math.floor((finalTime%(1000*60*60))/(1000*60))
        const seconds = Math.floor((finalTime%(1000*60))/(1000))
    
        forDays.textContent = days
        forHours.textContent = hours
        forMin.textContent = minute
        forSecs.textContent = seconds
    
        // update give way text dynamicly
    
        givewayText.textContent = `giveway end in ${futurDate.toDateString()} ${hours}:${minute}:${seconds}`
        currentTime.textContent = `current time ${now.toDateString()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      

    }, 1000);
}
startcurentime()
window.addEventListener('DOMContentLoaded',startcurentime())



