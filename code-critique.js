// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
// Critique the code output. 

// created the function findFistVowelIndex
function findFirstVowelIndex(inputString) {
    const vowels = "aeiouAEIOU"; // Define a string containing all vowels
  //a loop to go through each character in the inputString
    for (let i = 0; i < inputString.length; i++) {
        //check with if letter is a vowel
      if (vowels.includes(inputString[i])) {
        console.log(`The first vowel '${inputString[i]}' is at index ${i}`); // console.log to find and stop looking
        return i;   // return the index 
      }
    }
  // console log in case they dont get any vowels
    console.log("No vowels found in the input string.");
    return -1;
  }
  // using the function with a string to find the first vowel. 
  // Example usage:
  const inputString = "Hello, World!";
  findFirstVowelIndex(inputString);
  
// Things to consider in your critique: Were you surprised by the output? 
// yes it gave me a code in Python first and had to ask for it in JavaScript, but also alot of small noticables differences like no arrow syntax. 

//  Was the output what you expected?
// sort of its looks simple to understand other than the small differnces we been taught

//  Is the correct output being rendered? 
//yes it is //The first vowel 'e' is at index 1

//  What do you like about the code? 
// i liked how it showed me a different way to code

// What do you dislike? 
//not using the anonymous function 

// Are there best practices that are not being followed? 
// yeah to make sure to use the anonymous function
//but also running a return in case they didnt get any vowels 

// Would you take a different approach? What did you learn? 
// i would have had the same code but with a anonymous function and propbably not adding the line of code to return -1 to show no vowels. 
