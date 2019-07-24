var video = document.getElementById('video');
var player = document.getElementById('player'); 
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var bar = document.getElementById('progress-bar');
var barbg = document.getElementById('progress-bg');
var totalWidth = barbg.offsetWidth;
var videoFileNum = 0;
var playlist = ["01-生僻字mv.mp4","02-BabyShark Dance.mp4" ];

console.log(totalWidth);
play.onclick=function(){
    video.play();
}
//pause
pause.onclick=function(){
    video.pause();
}
barbg.onmousedown = function(e){
    console.log(e.clientX)
    var pos = e.clientX- barbg.offsetLeft - player.offsetLeft;
    video.currentTime = video.duration * pos/totalWidth;
    console.log('位置:'+pos+ ' 正確時間:'+ video.currentTime)
}
video.addEventListener('timeupdate',showProgress);
function showProgress(){
    var progress = video.currentTime / video.duration;
    bar.style.width=progress*totalWidth+"px";
    console.log('bar.style.width');
    if (progress >=1 ) {
        video.src='01-生僻字mv.mp4';
        video.play();
    }
}

video.addEventListener('ended',nextVideo,false);
function nextVideo(){
    videoFileNum++;
    if (videoFileNum>playlist.length) {
        videoFileNum=0;
        }
        video.src=playlist[videoFileNum];
        video.onload();
        video.play();
}

