var collapse = document.querySelector('#collapse');
var title = document.querySelectorAll('h3');
var content = document.querySelectorAll('#collapse div');



for (var i=0 ;i<title.length;i++) {
    title[i].addEventListener('click',function(){
         var current = this.nextElementSibling;
         if (current.style.display=='block') {
             current.style.display ='none';
             this.className='';
         } else {
             for (var i =0 ; i<content.length;i++)
             content[i].style.display='none';
             content[i].previousElementSibling.className='';
            //  content[i].previousElementSibling.className='';
         }
         current.style.display='block';
         this.classList='active';
    })
}