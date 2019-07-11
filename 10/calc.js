//計算機控制面板
var calcPanel = document.getElementById('calc-panel');
//記錄計算器顯示屏上字符數
var count=0;
//判斷顯示螢幕中是否包含小數點
var hasDec = false;
//事件委托綁定click事件
calcPanel.addEventListener('click',function(e){
var event =e || window.event;
var target = event.target;
//只能做物件節點名稱為button時才執行，排除了div的click事件
if (target.nodeName ==='button'){
    //獲取當前click的字元做為操作的伊據
    var btnValue = target.innerText;
    //獲取計算器顯示屏
    var reslut = document.getElementById('reslut');
    //如果上次計算結果送出了，計算錯誤顯示，用戶未按除AC鍵就放棄處理，直接返回
    if (reslut.innerText == '計算錯誤' && btnValue !='AC') {return};
    //如果click AC鍵重置顯示螢幕為0
    if (btnValue =='AC')
    //字串中小數點位數重置為無
    hasDec = false;
    reslut.value=0;
    count=1;
} else if (btnValue == 'CE');
})