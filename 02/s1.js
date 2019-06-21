var nth = 2;
var trs = document.querySelectorAll('tbody > tr');

for (var i=0 ; i< trs.length ;i++){
    if (i % nth  == 0 ) {
        trs[i].className='stripe-row';
    } else {
        trs[i].className='';
    }
}

var el = document.querySelector('.stripe');
var bb = document.querySelectorAll('tr');
//mouseover 移入
el.addEventListener('mouseover',function(e){
    console.log(e);
    var current_row=e.target.parentNode;
    var brow=el.parentNode
    console.log(bb); //測試用，查看bb裏面的屬性用
       //可以指出目前所移到的目標-父層為何
    // console.log(e.target.parentNode);
    //可以指出目前所移到的目標為何
    // console.log(e.target);
    // current_row.className('active');
// current_row.className('active');
    // console.log(current_row);
    console.log(brow);
   current_row.classList.add('active');
})
// mouseout 移出
el.addEventListener('mouseout',function(e){
    var current_row=e.target.parentNode;
    // current_row.className='';
    current_row.classList.remove('active');
})