var fs= require('fs');
fs.open('nnewfiletxt.txt','w',function(err,data){
  if (err) throw err;
  console.log('saved!');

})
