// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
// console.log(cohort.split(" "))

// a) Your answer: G o l f 2 0 2 3
// b) Verify and explain: [ 'Golf', '2023' ]
//i forgot .split turns it into an array and .split("") adds a coma


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: the function greeter takes name as a parameter but missing the return 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [ 11, 13, 15 ] we have a function onlyOdds and using .filter to sort out the odd numbers with a modulo operator

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: i got that answer by looking at the console.log and seeing they invoked the function myCodingSkills and added .languages to get that list and [0] was used to access the first item in the list.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George Golf 2023
// b) Verify and explain: { student: 'George', cohort: 'Golf', year: 2023 }  i completly guessed but once i looked over my notes i remebered that when using methods this. to store the objects. and when invoked it would include the object title.
