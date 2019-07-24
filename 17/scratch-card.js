//定義canvas存放id為canvas的物件
var canvas=document.getElementById('canvas');
// 定義畫筆變數
var context = canvas.getContext('2d');
// 為照片加上布（上層多一個背景）
context.beginPath();
context.fillStyle='gray';
context.fillRect(0,0,600,379);
//mouse event 
canvas.onmousedown = function(){
    //mouse move function
    canvas.onmouseover =function(){
   
        var x = event.clientX - (window.screen.availWidth-canvas.width) /2 ;
        var y =event.clientY - (window.screen.availHeight-canvas.height) /2 ;
        console.log('Screen坐標：'+event.clientX+','+event.clientY);
        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x,y,30,0,Math.PI*2);
        context.fill()

    }
}

//mouse抬起不刮開
canvas.onmouseup = function(){
canvas.onmousemove = function(){};
}