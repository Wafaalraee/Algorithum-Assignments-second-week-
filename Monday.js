
//Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array.
 //For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].

//1.We define a function called largestOfFour
//2.We initialize an empty array called result. //This array will store the largest numbers from each sub-array.
//3.We start a for loop with i
//4.Inside the loop, we initialize a variable called largest with the first element of the current sub-array. //We assume that it's the largest element initially.
//5.We start another nested for loop with x to iterate through the elements within the current sub-array.
//6.Inside the nested loop, we compare the current element (arr[i][x]) with the largest value. If the current element is greater than largest, we update largest to be the value of the current element.
//7.After processing all elements in the current sub-array, we push the largest value into the result array.
//8.Finally, we return the result array, which holds the largest numbers from the input array of arrays.

function largestOfFour(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
  
      for (let x = 1; x < arr[i].length; x++) {
        if (arr[i][x] > largest) {
          largest = arr[i][x];
        }
      }
  
      result.push(largest);
    }
  
    return result;
  }
  
  // Test case
  const output = largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]);
  console.log(output);

  