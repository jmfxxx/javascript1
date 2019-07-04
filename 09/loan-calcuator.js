

//計算貸款回款費用（每月/總期數/總利息)
// 本金平均攤還法(即本金定額攤還法)
// 條件：
// 計算基礎為全部貸款本金每月平均分攤，利息則按貸款餘額逐期計算。
// 特點：
// 計算較本息平均攤還法簡易。
// 每月攤還之本金金額固定，但每月償付之利息金額則逐月遞減。
// 計算方式：
// 試算公式：
// 平均每月應攤付本金金額＝貸款本金÷還款總月數
// (公式中：還款總月數＝貸款年期×12)
// 每月應攤還本金與利息試算：
// 每月應付本息金額＝每月應還本金＋每月應付利息
// 每月應付利息金額＝本金餘額×月利率
// (公式中：月利率＝年利率÷12)
function calc() {
    console.log('hello')
//取得貸款金額amount
var amount = document.querySelector('#amount');
//貸款年利率
var interest = document.querySelector('#interest');
//還款期數
var years = document.querySelector('#years');
// 每月還款金額
var monthly_payment =document.querySelector('.monthly_payment');
// 還款總額
var total_payment = document.querySelector('.total_payment');
//總利息
var total_interest =document.querySelector('.total_interest');

//轉換數值
var amount_val= parseFloat(amount.value);
var interest_val = parseFloat(interest.value)/100/12;
var years_val = parseFloat(years.value)*12;    

//每月還款金額
var x = Math.pow(1+interest_val,years_val);
var monthly =(amount_val*x*interest_val)/(x-1);

//isFinite會判斷傳入的值是否為有限數
if (isFinite(monthly)) {
    monthly_payment.innerHTML=monthly.toFixed(2);
    total_interest.innerHTML=(monthly*years_val).toFixed(2);
    total_payment.innerHTML=((monthly*years_val)-amount_val).toFixed(2)
    }else {
        monthly_payment.innerHTML='';
        total_interest.innerHTML='';
        total_payment.innerHTML='';
    }


console.log(monthly);
}


var btn = document.querySelector('.btn');
btn.addEventListener('click',calc);
//每月還款金額


// 每月應付本息金額之平均攤還率＝{[(1＋月利率)^月數]×月利率}÷{[(1＋月利率)^月數]－1}
// (公式中：月利率 ＝ 年利率／12 ； 月數=貸款年限 ｘ 12)
// 平均每月應攤付本息金額＝貸款本金×每月應付本息金額之平均攤還率