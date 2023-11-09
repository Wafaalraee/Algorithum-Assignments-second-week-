 //Thursday: Sum All Numbers in a Range
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
    return 1;
  }
  sumAll([1, 4]);
  
  //The lowest number will not always come first.
  
  //sumAll([1, 4]) should return a number.
  //sumAll([1, 4]) should return 10.
  //sumAll([4, 1]) should return 10.
  //sumAll([5, 10]) should return 45.

  //Psuedocode
 //1-This line uses destructuring assignment to assign the first and second elements of the array arr to the variables a and b.
//3-the min and max variables are determined using a ternary operator
//4-or loop is used to iterate through all numbers from min to max
//5-Return Statement
//log it
  
  function sumAll(arr) {
    let [a, b] = arr;
    let min = a < b ? a : b;
    let max = a > b ? a : b;
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  console.log(sumAll([1, 4]));  
  console.log(sumAll([4, 1]));   
  console.log(sumAll([5, 10]));  