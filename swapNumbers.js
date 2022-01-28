function swap(num1,num2){
  console.log("num1 is " + num1 + " num2 is " + num2)

  var temp = num1;
  num1 = num2;
  num2 = temp;

  console.log("num1 is " + num1 + " num2 is " + num2);
}

swap(2.34,3.45)