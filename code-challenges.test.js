// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe('multipliedByThree', () => {
    it('takes in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
      // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
      // Expected output: [72, 81, 90, 99, 108]
      expect(multipliedByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multipliedByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

// ReferenceError: multipliedByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

// input: array of numbers
// output: array with all the numbers multiplied by three
const multipliedByThree = (arr) => {
    // iterate through the array using .map HOF
    return arr.map(num => {
      // each iteration multiplies the current value by 3
      // the product is returned in the new array made by .map
      return num * 3
    })
  }

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe('divisibleByThree', () => {
  it('that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.', () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"
    expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })
})
//ReferenceError: divisibleByThree is not defined- good failure

// b) Create the function that makes the test pass.

// Pseudo code:

//input: objects
//output: divisible by three or not
const divisibleByThree = (obj) => {
//use dot notation to to access the value of the key in the object
  const number = obj.number
//use modulo to check number
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe('capFirstLetter', () => {
  it('takes in an array of words and returns an array with all the words capitalized.', () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(capFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})  

//ReferenceError: capFirstLetter is not defined - good failure 
// b) Create the function that makes the test pass.

// Pseudo code:
// created a function capFirstLetter that takes an array
const capFirstLetter = (arr) => {
//use map action to return array output
  return arr.map((value) => {
//use [0] to access first index and capitalize and concatenate the remainder
    return value[0].toUpperCase() + value.substring(1)
  })
}

// multipliedByThree
// ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (3 ms)
// divisibleByThree
// ✓ that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// capFirstLetter
// ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.361 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.97s.