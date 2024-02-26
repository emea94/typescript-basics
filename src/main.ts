//Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
const age: number = 29;
const age2: number = 20;

// Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
for(let i = 0; i < age; i++) {
  console.log(i);
}

// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18. Display appropriate messages depending on whether the condition is met or not.
if (age2 > 18) {
    console.log("You are an adult");
} else {
    console.log("You are a child");
}
// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
let score: number = 0;

//Step 5: Use an 'if' statement to check if 'score' has a value. Display 'Score is available.' if 'score' has a value other than 0
if (score > 0 || score <0) {
    console.log("Score is available!")
}

//Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value. Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.
score = 50;
if (score) {
    console.log("Score is available!") // true Statement
} else {
    console.log("Score is not available!") // false Statement
}
//Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
let username: string = "";

//Step 8: Use an 'if' statement to check if 'username' has a value. Display 'Username is available.' if 'username' has a value.
if (username) {
    console.log("Username is available!")
} else {
    console.log("Username is not available!")
}
//Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value. Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.

// username = "John";
if (!username) {
    console.log("Username is considered Falsy."); //false Statement
} else {
    console.log("Username is considered Truthy."); //true Statement
}
// Wenn username Falsy ist, wird das Ergebnis true sein, was bedeutet, dass username als Falsy erkannt wird.

//Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
const isAdmin: boolean = false;

//Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value. Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy")
} else {
    console.log("isAdmin is evaluated as falsy")
}

//Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'. Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
// (isAdmin === false) = (!isAdmin)
if (!isAdmin) {
    console.log("isAdmin is false.")
} else {
    console.log("isAdmin is true.")
}

console.log("\n")
console.log("!--- Functions ---!")
// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubledNumbers: number[] = numbers.map((number: number) => number * 2)
console.log(doubledNumbers)

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.

const words: string[] = ["Bulldogge", "Mops", "Pudel", "Beagle", "Boxer", "Dackel", "Chihuahua"]
const longerThan5: string[] = words.filter((word: string) => word.length > 5)
console.log(longerThan5)

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.

const numbers2: number[] = [3, 4, 8, 2, 7, 9, 1, 5, 6]
const reduce: number = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reduce)

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.

const numbers3: number[] = [11, 3, 9]
const numbers4: number[] = [3, 4, 8]

const greaterThan10: boolean = numbers3.some((element) => element > 10)
console.log(greaterThan10)

const isAnyGreaterThan10: boolean = numbers4.some((element) => element > 10)
console.log(isAnyGreaterThan10)