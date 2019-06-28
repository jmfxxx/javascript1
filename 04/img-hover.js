//取得所以img
var imgs = document.getElementsByTagName("img");
// 利用for綁定mouse事件
for (var i=0 ; i< imgs.length; i++) {
    imgs[i].onmouseover = function(){
        startMov(this,{width:200,height:200,top:0,left:0});
        // 設定圖像計時器為空值
        // imgs[i].timer = null;
        console.log('滑進來了!' );
    }
    imgs[i].onmouseout = function(){
        startMov(this,{width:200,height:500,top:-66,left:-150});
        // 設定圖像計時器為空值
        // imgs[i].timer = null;
        console.log('滑出去了!')
    }
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
            speed = (styles[attr]-icur)/30
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
}