/*
동기적 

//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result); 
console.log('C');
*/
 
/*
비동기적 
*/ 
/*
var fs = require('fs');
console.log('A'); 
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){ 
    console.log(result);
});
console.log('C'); 
*/

var fs = require('fs');

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');