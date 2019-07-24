var a=[11,22,1,5,8,1999,4,333,999];
console.log(a.sort(function(s,t)
{
  var a =parseInt(s);  
  var b =parseInt(t);
 
   if (a>b) return 1;
  
})
           )