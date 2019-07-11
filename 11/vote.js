var vote = document.getElementById('vote');
var btns = document.getElementsByTagName('input');
//遍歷投票按紐註冊mouse click事件 
for (var i =0;i <btns.length; i++) {
    //按下投票後，呼叫計算函數
    btns[i].onclick = addCount();
} 
function addCount(){
    var count = 0;
    //定義閉包
    function fn(){
        //閉包內變量需要增加，所以函數外的count不會被刪除
        ++count;
        //this在function中被調用時才能確定
        this.value = `投票(${count})` 
    }
    return fn
}