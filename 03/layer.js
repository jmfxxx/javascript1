// var btn = document.getElementsByTagName('button')[0];
// var layer = document.getElementById('layer');
// var as = layer.getElementsByTagName('a');
var btn1 = document.querySelector('button');
var layer= document.querySelector('#layer');
var as = document.querySelectorAll('.layer-btn > a')
console.log(`as共有 ${as.length}`);
btn1.addEventListener('click',function(){
    console.log('you got it btn');
    layer.style.display='block';
});

// click cancle
as[0].addEventListener('click',function(){
    layer.style.display='none';
    alert ('按了第1個');
});

//click open 
as[1].addEventListener('click',function(){
    layer.style.display='none';
    alert ('按了第2個');
})