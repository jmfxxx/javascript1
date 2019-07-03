var right = document.querySelector('.navright');
var left = document.querySelector('.navleft');
var items = document.querySelectorAll('li');
var notice = document.querySelector('ul');
//初始化項目指標
ipointer =0;
liinit();
timer=setInterval(() => {
autoplay('next');    
}, 3000);

notice.addEventListener('mouseover',function(){
    console.log('移入，會暫停輪播公告');
    clearInterval(timer);
});

notice.addEventListener('mouseout',function(){
    console.log('移出，啟動輪播公告!');
    timer=setInterval(() => {
        autoplay('next');    
        }, 1000); 
});

right.addEventListener('click',function(){
    autoplay('next');
});
left.addEventListener('click',function(){
    autoplay('prev');
})
//其實也是可以使用取得公告的第幾個再依序放入固定欄位即可
//不一定要這樣使用li來操作
function autoplay(nav){
if (nav ==  'next')
{
    if (ipointer - items.length < 0 ) {
          ipointer++;
    } 
    if (ipointer - items.length == 0 ) {
        ipointer=0 ;
    }

} else if (nav == 'prev') {

   console.log(ipointer); 
   ipointer = ipointer-1;
   if (ipointer == -1){
       ipointer = items.length-1;
   }

}
       for (var i=0 ; i<items.length;i++) {
        items[i].style.display='none';
         }
   items[ipointer].style.display='block';      
}

function liinit(){
    items.forEach(function(item){
        item.style.display='none';
    })
   
   items[0].style.display='block'; 
}