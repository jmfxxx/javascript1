var currentNoticeId = 0;
//取得公告項目容器
//奇怪使用getElementsByClassName無法套用addEventListener
// var notice =document.getElementsByClassName('notice');
// var notice = document.getElementById('notice');
var notice = document.querySelector('.notice');

//取得所有公告項目
var lists = document.getElementsByTagName('li');

timer = setInterval(function () {
    noticeAutoPlay('next')
}, 3000);
//給公告項綁定mouse移入事件，事件發生時暫停滾動
// notice.addEventListener('mouseover',function(){console.log('heelo!')});
// notice.addEventListener('mouseover', function (e) {
//     console.log(e);
// })
notice.addEventListener('mouseover',function(){
    console.log('移入會停住不動')
    clearInterval(timer);
});
notice.addEventListener('mouseout',function(){
    console.log('移出,會呼叫timer')
    timer = setInterval(function () {
        noticeAutoPlay('next')
    }, 3000);
});


var navright = document.querySelector('.navright');
var navleft = document.querySelector('.navleft');

// 使用getElementByClassName會無法使用addEventListener
// var right = document.getElementsByClassName('navleft');
// right.addEventListener('click',function(){
//     console.log('this is use getelementbyclassname');
//     noticeAutoPlay('prev');
// })
// document.getElementsByClassName('nav-right').addEventListener('click',noticeAutoPlay('next'));


navright.addEventListener('click', function(){
    console.log('right');
    noticeAutoPlay('next');
});
navleft.addEventListener('click', function(){
    console.log('left');
    noticeAutoPlay('prev');
});


function noticeAutoPlay(pos) {
    if (pos == 'next') {

        if (lists.length > currentNoticeId) {
            currentNoticeId++;
        } else {
            currentNoticeId = 1;
        }
        console.log(currentNoticeId);
    } else {
        if (currentNoticeId - 2 == -1) {
            currentNoticeId = lists.length;
        } else {
            currentNoticeId = currentNoticeId - 1;
        }
    }

    for (var i = 0; i < lists.length; i++) {
        lists[i].style.display = 'none';

    }
    lists[currentNoticeId - 1].style.display = 'block';
}