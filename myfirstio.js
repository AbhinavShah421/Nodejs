var fs = require('fs')

var contents = fs.readFileSync('newfiletxt1.txt')
var lines = contents.toString().split('\n').length - 1
console.log(lines)
