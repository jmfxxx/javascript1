var input = document.getElementById('bankName');
var message = document.getElementById('message');
input.addEventListener('change',function(){

var q = input.value;
if (q=='') {
    return;
}

if(window.XMLHttpRequest) {
//ie7+ , chrome ,Firefox , Opera ,Safari
var xhr = new XMLHttpRequest();
} else {
    // ie5 
var xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
xhr.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200) {
        var jsonDoc=eval(xhr.responseText);
        var table = '<tr><th>銀行名稱</th><th>客戶電話</th></tr>';
        for (var i in jsonDoc) {
            if(jsonDoc[i].bankName.indexOf(q)>=0) {
                table+='<tr><td>'+jsonDoc[i].bankName+'</td><td>'+jsonDoc[i].bankTel+'</td></tr>';
            }
        }
        console.log(table);
        message.innerHTML=table;
        
    }
}
xhr.open('GET','tel.json',true)
xhr.send();

})

