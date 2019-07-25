var getseat = document.querySelectorAll('a');
var price=300; //票價
for (i=0;i<getseat.length;i++){

    //建立click事件，當按下連結時會觸發事件
    getseat[i].addEventListener('click',function(){
        var id = this.text;
        console.log(id);
       
        var row = id.slice(0,1);  //取欄
        var col = id.slice(2,3);  //取列

        console.log(`${id}-你是第${row}行,第${col}列`)
        //設定選到坐位後會變更背景色
        // this.parentNode.style.backgroundColor='#DE3239';
        this.parentNode.style.backgroundColor='#FFD300';


         //定義變數newUL,透過id取後列表
         var newUL= document.querySelector('#selected-seats');
         var lists = document.createElement('li');
         //增加li到結點
         newUL.appendChild(lists);
         lists.innerText=row+'排'+col+'座'
         //增加數量和總數
         var amount=document.querySelectorAll('#selected-seats > li').length;
         var counter = document.querySelector('#counter');
         var total = document.querySelector('#total'); 
         counter.innerText=amount;     //幾張票
         total.innerText=amount * price;  //總價格(票數*票價)
    })
}