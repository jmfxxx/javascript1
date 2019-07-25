function get_num(){
var result = document.getElementById('result');
var num=document.getElementById('num').value;
var start = document.getElementById('start').value;
console.log('num:'+num);
console.log('start value:'+start)
var personal = [];
//取得抽奬總人數，並產生至personal[]中
for (var i=0;i<num;i++)
personal[i] =i+1; 
console.log(personal[i])
//取得排除名單，並從陣列中刪除
var exclude = document.getElementById('exclude').value;

console.log('exclude：'+exclude)
var arr_exclude = [];
var aa =0;
arr_exclude=exclude.split(',')  //分割字串轉為陣列  例如:原本為 12,3,4  ===> ["12","3","4"]
console.log('排除的號碼：'+arr_exclude)
//刪除排除的號碼，依序尋找並刪除
for (var j =0;j<arr_exclude.length;j++){
  aa=personal.indexOf(parseInt(arr_exclude[j]));
  personal.splice(aa,1);
}
console.log(personal)

//按指定人數，取出中獎人員
var gen_num = parseInt(document.getElementById('lottery_num').value);

var result_num = [];
for (i = 0 ;i<gen_num;i++){
    result_num[i]=personal[Math.floor(Math.random()*personal.length)];
    //從人數中拿掉已抽出的號碼
    personal.splice(personal.indexOf(result_num[i]),1)
}

//排序 
result_num.sort(function(a,b){
    return a-b;
});

//輸出到畫面上，將陣列轉成字串並顯示在畫面上
result.innerHTML=result_num.join('、')
 
}