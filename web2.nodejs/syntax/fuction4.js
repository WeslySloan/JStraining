console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
 
function sum(first, second){ // parameter
  return first+second; // return 이후에는 어떤 명령어도 받지않음. return 에서 종료되기때문
  console.log("this is not work");
}
 
console.log(sum(2,4)); // argument