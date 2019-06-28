var lists=document.getElementsByTagName('li');
//引入skin路徑的link標簽對象選取出來
var cssStyle = document.getElementById('skinCSS');
// 訪問本地儲存，獲取上次設置的skin css文件
var cssSaveName = getStorage('cssSaveName');
// 判斷是否設置過並儲存了css skin文件，如果是就使用設置過的，否則用預的
if(cssSaveName && cssSaveName !=null) {
    cssStyle.href=cssSaveName;
} else {
    //沒有儲存過就使用skin4.css
    cssStyle.href='css/skin4.css';
}

for (var i=0;i<lists.length;i++){
lists[i].addEventListener('click',clickHandler);
}


function clickHandler(){
    //依據點擊的列表對象的id屬性來關聯對應的樣式表css
    var cssName='css/'+this.id+'.css';
    //變換link籤中的href屬性，切式文件
    cssStyle.href= cssName ;
    setStorage('cssSaveName',cssName);

}

function setStorage(name,value){
    window.localStorage.setItem(name,value);
}
function getStorage(name) {
    var cssSaveName = window.localStorage.getItem(name)
    return cssSaveName
}