// 1.Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

function foo(){
  console.log("foo");
  bar()
}
 function bar(){
  console.log("bar");
 }
 foo()

// 2. Write a function called make_avg() which will take an three integers and return the average of those values.
function make_avg(a,b,c){
  const sum=a+b+c;
  const result=sum/3;
  console.log(result);
  return result;
 

}
make_avg(1,2,3)