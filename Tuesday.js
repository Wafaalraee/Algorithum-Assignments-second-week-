//Tuesday:
  //Find the longest Word in a String
//Return the length of the longest word in the provided sentence.

//Your response should be a number. For these algorithms you are allowed to use the split() method.

//findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
//findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
//findLongestWord("May the force be with you") should return 5.


//1- use function  which takes one parameter' str'
//2- use split(' ') to split 'str' to individual words
//3- Initialize a variable to store the length of the longest word.start from 0
//4-use for loop to  Iterate through the words and update the longestWordLength if a longer word is found



function findLongestWord(str) {
  // Split the sentence into words using the split() method
  const words = str.split(' ');


  // Initialize a variable to store the length of the longest word,start from 0
  let longestWordLength = 0;

  //use for loop to Iterate through the words and update the longestWordLength if a longer word is found
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
    }
  }

  return longestWordLength;
}

// Test cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you")); 
  

  




