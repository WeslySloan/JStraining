var testFolder = './data'; //data 디렉토리에있는 파일 가져오기
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
  
})