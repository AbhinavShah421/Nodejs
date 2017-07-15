var fs= require('fs');
var Path=require('path');
var dir= process.argv[2];
var ext="."+process.argv[3];
fs.readdir(dir,function(err,data){
  if(err){
    console.log(err);
  }
  data.forEach(function(file){
    if(Path.extname(file)==ext){
      console.log(file);
    }
  })
});
