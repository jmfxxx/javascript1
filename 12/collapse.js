//取得頁面中所有折疊項目標題
var collapse = document.getElementById('collapse');
var title = collapse.getElementsByTagName('h3');
var content = collapse.getElementsByTagName('div');

//透過迴圈綁定click事件
for (var i=0;i<title.length;i++){
    title[i].addEventListener('click',function(){
        //取得當前折疊項目的內容窗口元素        
        var current = this.nextElementSibling;
        //透過切換當前的display屬性值為block來隱藏
        if(current.style.display=="block") {
            current.style.display='none';
            this.className='';
        } else {
            //重置所有折疊項目
            for (var i=0;i<content.length;i++ ) {
                content[i].style.display='none';
                content[i].previousElementSibling.className='';
            }
            current.style.display='block';
            this.className='active';
        }
    })
}