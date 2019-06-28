// 移入時會移動圖片大小，並在console.log提示是第幾張圖
//移出時也一樣s
var imgs = document.querySelectorAll('img');

for (var i = 0 ; i<imgs.length;i++) {
    imgs[i].setAttribute('index',i+1);
    imgs[i].addEventListener('mouseover',function(e){
        // console.log('你移入了!!!')
        // console.log(e);
        // console.log(index);
        startMov(this,{width:200,height:200,top:0,left:0});
        // 設定圖像計時器為空值
        // imgs[i].timer = null;
        console.log(this.id);
        var a = this.getAttribute('index');
      
        console.log(`滑進來了! 是第${a}個`);
    })
    imgs[i].addEventListener('mouseout',function(e){
        // console.log('你移入了!!!')
        console.log(e);
        // console.log(index);
        
        startMov(this,{width:200,height:500,top:-66,left:-150});
        // 設定圖像計時器為空值
        // imgs[i].timer = null;
        var b = this.getAttribute('index');
        console.log(`滑出去了!  是第${b}個`)
    })
}



        // console.log(`你按到了哦)我是第${index}`);


         //定義startMov 函數
    function startMov(element,styles){
        //執行前先清除動畫
          clearInterval(element.timer);
        
        //setInterval() 給定時間間隔重複執行的一個function
        element.timer=setInterval(function(){
            //for in 循環
            for (var attr in styles) {
                var icur=0;
                if (attr == 'width') {
                    //round()把對象四捨五入為最接近的整數
                    icur = Math.round(parseFloat(getStyle(element,attr)*100));
                } else {
                    //parseInt()可以解析一個字串，並返回一個整數
                    icur= parseInt(getStyle(element,attr));

                }
            //   這定移動整度
            var speed =0 ;
            speed = (styles[attr]-icur)/8
        //celi , floor()分別為Math上的上舍入，和下捨入function
        speed = speed >0 ? Math.ceil(speed): Math.floor(speed);
        if (attr =='width'){
            element.style.width=(icur+speed)/100;

        } else {
            element.style[attr]=icur+speed+'px';
        }
            }
        },30);
        
        function getStyle(obj,attr){
            if(obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj,false)[attr]   //兼容firefox
            }
        }
    }
