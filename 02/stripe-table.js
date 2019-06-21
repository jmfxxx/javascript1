// 定義班馬線交替周期,2表示2行設置一次
var ntr = 2;
//選取table class='stripe'
var table = document.querySelector('.stripe');
//查找頁面中所有帶有stripe類樣式表格行
var trs = table.querySelectorAll('tr');
rowcolor();

// var table = document.getElementsByClassName('.stripe')[0];
// var trs = table.getElementsByTagName('tr');

//使用事件委托直接在tr祖先元素table綁定事件
table.addEventListener('mouseover', function (e) {
    //獲取目前觸發事件的td的父元素tr作為DOM操作對象
    var current_row = e.target.parentNode;

    // 當mouseover 事件不是由td觸發、父元素標籤不是TR時停止處理
    if (current_row.nodeName !== 'TR') {
        return;
    }
    //當前觸發事件的單元格所在tr文字加粗，行背景以#8ac007色高亮顯示
    current_row.className = 'active';
    // mouseout時tr內的文字取消加粗,取消行背景高亮度
    current_row.addEventListener('mouseout',function(){
        this.className = '';
        rowcolor();
    })
})

//顯示班馬線
function rowcolor(){
    //按ntr值確定當前tr的背景色
    for (var j = 0; j < trs.length; j++) {
        if (j % ntr == 0) {
            // trs[j].className = 'stripe-row';
            trs[j].classList.add('stripe-row');
        } else {
            // trs[j].className = '';
            trs[j].classList.remove =('stripe-row');
        }
    
    }
}
// -------------------