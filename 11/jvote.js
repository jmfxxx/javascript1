var btns = document.getElementsByTagName('input')



for (i=0;i<btns.length;i++){
    btns[i].onclick=votecount()
  }

function votecount(){
    var count = 0;
    function fn(){
        ++count;
        this.value=`投票${count}`;
    }
    return fn;
}
