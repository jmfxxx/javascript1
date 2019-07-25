var price=300; //票價
for (var i =1;i<=8; i++){
    for (var j =1;j<=8 ; j++){
        var one=document.createElement('div');
        document.getElementById('seat-row').appendChild(one);
        one.setAttribute('class','oneDiv');
        //定義變數num,建立一個span標箋
        var num = document.createElement('a');
        //為變數增加文字
        num.innerText=i+'-'+j;
        //為每個div增加id
        one.setAttribute('id','seat'+i+j);
        //為座標增加click事件
        one.addEventListener('click',function(){
            this.style.backgroundColor='#DE3239';
            //定義變數select通過獲得當點點擊的div的id
            var select=this.id;
            //截取id第5個字元給row
            var row = select.slice(4,5);
            //取id第6個給col
            var col=select.slice(5,6);
            //定義變數newUL,透過id取後列表
            var newUL= document.getElementById('selected-seats');
            var lists = document.createElement('li');
            //增加li到結點
            newUL.appendChild(lists);
            lists.innerText=row+'排'+col+'座'
            //增加數量和總數
            var amount=document.getElementById('selected-seats').getElementsByTagName('li').length;
            var counter = document.getElementById('counter');
            var total = document.getElementById('total') 
            counter.innerText=amount;
            total.innerText=amount * price;
        })
        one.appendChild(num);
    }
}