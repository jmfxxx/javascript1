function get_num(){
    var result = document.getElementById("result");
    var start = document.getElementById("start");
    var personal = [];
    //獲取抽獎人數
    var num = document.getElementById("num").value;
    for (var i =0;i<num;i++){
        personal[i]=i+1;
    }
    //生成有效描奬名單編號
    var exclude = document.getElementById("exclude").value;
    var arr_exclude = [];
    arr_exclude = exclude.split(",");
    for (var j = 0 ; j<arr_exclude.length;j++ ) {
        personal.splice(personal.indexOf(parseInt(arr_exclude[j])),1);

    }

    //按指定中獎人生成中獎號碼
    var get_num = parseInt(document.getElementById("lottery_num").value);
    var result_num = [];
    for (var i=0;i<get_num;i++) {
        result_num[i]=personal[Math.floor(Math.random()*personal.length)]
        //以抽奬名單編號中刪除已經抽中的編號
        personal.splice(personal.indexOf(result_num[i]),1);

    }

    //將抽奬結果按數字從小到大排序
    // import   sort()
    result_num.sort(function(a,b){
        return a-b;
    })

    //join()
    console.log(result_num)
   result.innerHTML=result_num.join("﹑");
  
}