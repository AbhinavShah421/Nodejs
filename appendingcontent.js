var fs = require('fs');
fs.appendFile('file_system.js',"console.log('appended content ');",function(err){
  if(err)
  throw err;
  console.log('saved!');
});
