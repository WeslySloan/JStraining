var f = function(){
    console.log(1+1);
    console.log(1+2);
  }
  var a = [f];   
  a[0]();

// a 배열 0번째에 var f(함수) 를 내포중

  var o = {
    func:f  
  }
  o.func();

  // js 에서는 function이 값으로 형성될 수 있다 . '변수()' 는 function() 을 내포 할 수 있다. 
