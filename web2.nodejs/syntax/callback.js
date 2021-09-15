/*
function a(){
  console.log('A');
}
*/

// a 변수가 실행되면 해당 fuction 함수가 자동실행

var a = function(){
    console.log('A');
  }
   
   
  function slowfunc(callback){
    callback();
  }
   
  slowfunc(a);