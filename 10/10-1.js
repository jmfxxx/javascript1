//  取得數字鍵
var getbtn = document.querySelectorAll('.btn_number');
//取得運算子
var getoper = document.querySelectorAll('.btn_oper');
var getsum = document.querySelector('.btn_sum');
var display = document.querySelector('input');
var num1 = 0 ; //第1個
var num2 = 0; //第2個輸入
var temp1 =''; //暫存
var sum =0; //總計
var flag='F';

getoper.forEach(function(item){
  item.addEventListener('click', function (){
      console.log(item.innerHTML);
    if (flag=='F') {
    num1 = parseFloat(temp1);
    flag='T';
    temp1=''; 
    // console.log(`num1=${num1}`)
   }
    else {
        num2 = parseFloat(temp1);
        flag ='F'
    // console.log(`num2=${num2}`)
        temp1='';
    }
var op= item.innerHTML;
function calc(num1,num2,op) {
if (op=='+') { return num1+num2}
if (op=='-')  { return num1-num2}
if (op=='*')  { return num1*num2}
if (op=='/')  { return num1/num2}


}

    sum=calc(num1,num2,op);
    
    console.log(sum);
    console.log(display.value=sum.toString());
  })
   
})
//取得數字
getbtn.forEach(function(item){
   item.addEventListener('click', function (){
       temp1 = temp1+item.innerHTML;
        console.log(temp1);
        display.value=temp1;
  })
   
})