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

// 3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

var array= [3,6,5,9,2];

function make_avg(array){

  let sum=0;

for (var i=0; i<array.length; i++) {

   sum=sum+array[i];

}

const avg=sum/(array.length);
  console.log(avg);

}
make_avg(array);

// 4.write a function called odd_event() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// Has return + has parameter
// no return + has parameter

function odd_event(num) {
  if (num % 2 === 1) 
  return "Even";
  else return "odd";
}
const sum = odd_event(5);

console.log(sum);

// 5. red ,yellow and green signal

function signal(signal)
{
 switch (signal){

  case "red":
    console.log("danger");
    break;
    case "yellow":
      console.log("wait");
      break;
      default:
        console.log("go");
        break;
 }
  
}
signal("green")


