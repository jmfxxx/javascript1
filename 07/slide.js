//獲取所有圖片
var innerItems = document.getElementsByClassName("item");
//獲取所有指示器
var indicatorsLists = document.getElementsByTagName('li');
//獲取導航控制左鍵
var controlLeft = document.getElementsByClassName('left')[0];
//獲取導航控制右鍵
var controlRight = document.getElementsByClassName('right')[0];

//初始化圖片
var current = 0;

//添加active 樣式，實現初始化圖片的顯示
innerItems[current].className = "active";

//添加active樣式，實現初始化圖片的對應的指示器填充白色
indicatorsLists[current].className = "active";

//輪播函數
function slide() {
    for (var i = 0; i < indicatorsLists.length; i++) {
        //設定所有圖片不可見
        innerItems[i].className = "item";
        //設定所有指示不高亮
        indicatorsLists[i].className = "";
        indicatorsLists[i].index = i;
        //給所有指示器增加click事件
        //畫本使用onclik方式，可以另外使用addEventListener 方式來做
        indicatorsLists[i].onclick = function () {
            if ((this.index) === current) {
                return false;
            } else {
                current = this.index;
                slide();
            }
        }
    }
    innerItems[current].className = "item active";

    indicatorsLists[current].className = 'active';
    console.log(current);
}

//對道航控制左鍵，綁定click事件,實現後退
controlLeft.onclick = function () {
    current--;
    if (current == -1) {
        current = indicatorsLists.length - 1;
    }
    slide();
}

//對道航控制右鍵，綁定click事件,實現向前
controlRight.onclick = function () {

    current++;
    if (current == indicatorsLists.length) {
        current = 0;
    }
    slide();
}


//開始輪播 (每3秒換1張圖從右邊開始)
var timer = setInterval(controlRight.onclick, 3000);

//mouse移入到導航控制鍵上時停止輪播
controlLeft.onmouseover = controlRight.onmouseover = function () {
    clearInterval(timer);
    controlLeft.style.opacity = 0;
    controlRight.style.opacity = 0;
}
//mouse移出到導航控制鍵上時繼續輪播
controlLeft.onmouseout = controlRight.onmouseover = function () {
    timer = setInterval(controlRight.onclick, 3000);
    controlLeft.style.opacity = 0;
    controlRight.style.opacity = 0;
}