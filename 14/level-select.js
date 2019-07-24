var city = document.getElementById('city');
var area = document.getElementById('area');
var community = document.getElementById('community');

var address = document.getElementById('address').getElementsByTagName('span');

var codeName = null;

   var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function(){
    if (xhr.readyState==4 && xhr.status==200 ) {
        codeName = JSON.parse(xhr.responseText);
        
        city.innerText='';
        for ( i in codeName) {
            // console.log(codeName[i].CityName);
            city.innerHTML +="<option>"+ codeName[i].CityName +"</option>"
            
            // area.innerHTML +="<option>"+ codeName[0].AreaList[i].AreaName +"</option>"
        }
    }
}
xhr.open('GET','ALLTWData.json',true);
xhr.send();

area.addEventListener('click',function(){
  console.log('onw')
// area.innerHTML="選擇區域";
community.innertext=''
//取得個數做為迴圈數量
citycode=city.selectedIndex;
areacode = area.selectedIndex;

var slens=codeName[citycode].AreaList[areacode].RoadList;
console.log("第幾個縣市:"+citycode + " 第幾個區:"+areacode+ " 共有幾條道路："+slens.length)
console.log("codeName["+citycode+"].AreaList["+ areacode +"].RoadList.length");
console.log('you got :'+area.value)
})


area.addEventListener('mouseup',function(){
community.innerText='';   
 //取得個數做為迴圈數量
citycode=city.selectedIndex;
areacode = area.selectedIndex;
if (citycode < 0) {citycode=0} 
var slens=codeName[citycode].AreaList[areacode].RoadList;   
for (p=0;p<slens.length;p++){
    community.innerHTML+="<option>"+(p+1)+"-"+codeName[citycode].AreaList[areacode].RoadList[p].RoadName+"</option>"
}
})



city.addEventListener('click',function(){
area.innerHTML="";
citycode=city.selectedIndex;
areacode = area.selectedIndex;
console.log(city.selectedIndex)
    for (var p=0;p<codeName[citycode].AreaList.length;p++){
    area.innerHTML+="<option>"+codeName[citycode].AreaList[p].AreaName+"</option>"
    }
  })

 city.addEventListener('mouseup',function(){
console.log(city.selectedIndex)
display();
 })
 area.addEventListener('mouseup',function(){
  console.log(city.selectedIndex)
  display();
   })
 community.addEventListener('mouseup',function(){
   console.log('你選了： '+community.value)
  display();
 })

 function display(){
  var outhtml = document.querySelectorAll('#address > span')
  outhtml[0].innerHTML=`你選擇的縣市是：◆${city.value}-${area.value}-${community.value}`;
 }