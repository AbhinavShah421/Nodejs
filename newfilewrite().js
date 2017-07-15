var fs = require('fs');
fs.writeFile('newfiletxt1.txt',"hello world",function(err,data){
  if (err) throw err;
  console.log('created');
});
fs.appendFile('newfiletxt1.txt',"this is node js",function(err,data){
  if (err) throw err;
  console.log("updated");
});
