const MyVideo = document.getElementById('myvideo')
const PlayPause = document.getElementById('play-pause')
const videoFilter = document.querySelector('.video-filter')

function playAndPause(){
    PlayPause.classList.toggle('move-after')
    if(MyVideo.paused || MyVideo.ended){
        MyVideo.play()
    }else{
        MyVideo.pause()
    }
}
MyVideo.addEventListener('ended',function(e){
    PlayPause.classList.remove('move-after')
})
PlayPause.addEventListener('click', playAndPause)