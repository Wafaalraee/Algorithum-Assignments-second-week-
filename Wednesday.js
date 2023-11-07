
 // Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

//For this algorithm, you can use the split() method.

//titleCase("I'm a little tea pot")should return a string.
//titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
//titleCase("sHoRt AnD sToUt") should return "Short And Stout".

//pseudocode
//1- function takes a sentence as input.
//2-uses the split(' ') method to split the sentence into words
//3-uses the map() method to iterate over each word in the array
//4- capitalizes the first letter using toUpperCase()
//5- converts the rest to lowercase using slice(1).toLowerCase().
//6-map() method transforms each word in the array.
//7-join(' ') method is used to join the transformed words back into a sentence with spaces between them.
  

function titleCase(sentence) {
    return sentence.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }
  
  // Test cases
  console.log(titleCase("I'm a little tea pot")); 
  console.log(titleCase("sHoRt AnD sToUt"));      