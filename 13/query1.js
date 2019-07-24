var input = document.getElementById('bankName');
var message = document.getElementById('message');

input.addEventListener('change',function(){
var q = input.value;


    var xhr = new XMLHttpRequest;
    if (q == '' ) { return; }
console.log(q);

// xhr.onreadystatechange= function(){

// }
// xhr.open('GET','tel.json',true);
// xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // var jsonDoc = eval(xhr.responseText);
        var jsonDoc = JSON.parse(xhr.responseText);
        var mapAgeThan5 = jsonDoc.map(function(item, index, array){
            return item.Name == input.value;    // 比較大於五歲的
          });
          console.log(mapAgeThan5);
        console.log(jsonDoc);
        var table = '<tr><th>銀行名稱</th><th>客戶電話</th></tr>';
        
        for (var i in jsonDoc) {
           console.log(jsonDoc)
          if(jsonDoc[i].bankName.indexOf(q)>=0) {
              table+='<tr><td>'+jsonDoc[i].bankName+'</td><td>'+jsonDoc[i].bankTel+'</td></tr>';
          }
    }
    console.log(table);
    message.innerHTML=table;
  };
 
}
 xhr.open("GET", "tel.json", true);
  xhr.send();
})
