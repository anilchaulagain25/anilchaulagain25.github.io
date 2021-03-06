const logContainer = document.getElementById("log");


//Log to HTML UI
const logMessage = function(message, isSuccess) {
  console.log(message);
  logContainer.innerHTML += `<br><span style="background-color: ${isSuccess ? "green" : "red"}">${message}</span>`;
};


//Method to test actual and expected value assertion
const test = function(expected, actual, fnDescription) {
  if (actual === expected) {
    logMessage(fnDescription + ` TEST SUCCEEDED`, true);
  } else {
    logMessage(fnDescription + ` TEST FAILED - Actual :  ${actual}, Expected : ${expected}`, false);
  }
};


/*
Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
 */
const max = (a, b) => a > b ? a : b;

test(3, max(2, 3), "Expected output of max(2,3) is 3. ");
test(-2, max(-2, -3), "Expected output of max(-2,-3) is -2. ");


/*
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
*/
const maxOfThree = (a, b, c) => max(max(a, b), c);

test(3, maxOfThree(1, 2, 3), "Expected output of maxOfThree(1,2,3) is 3. ");
test(-1, maxOfThree(-1, -2, -3), "Expected output of maxOfThree(-1, -2, -3) is -1. ");


/*
Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
const isVowel = (input) => ["a", "e", "i", "o", "u"].indexOf(input.toLowerCase()) > -1;
test(true, isVowel("a"), "Expected output of isVowel(\"a\") is true. ");
test(false, isVowel("x"), "Expected output of isVowel(\"x\") is false. ");


/*
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/
const sum = (arr) => arr.reduce((item, acm) => acm + item, 0);
test(15, sum([1, 2, 3, 4, 5]), "Expected output of sum([1, 2, 3, 4, 5]) is 15. ");
test(-5, sum([-1, -2, -3, -4, 5]), "Expected output of sum([-1, -2, -3, -4, 5]) is -5. ");


/*
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/
const multiply = (arr) => arr.reduce((item, acm) => acm * item, 1);
test(60, multiply([10, 2, 3]), "Expected output of multiply([10, 2, 3]) is 60. ");
test(120, multiply([-1, -2, -3, -4, 5]), "Expected output of multiply([-1, -2, -3, -4, 5]) is 120. ");


/*
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 */
const reverse = (input) => {
  let result = "";
  for (let i = input.length - 1; i >= 0; i--) {
    result += input[i];
  }
  return result;
};
test("lina", reverse("anil"), "Expected output of reverse(\"anil\") is lina. ");
test("eoj", reverse("joe"), "Expected output of reverse(\"joe\") is eoj. ");


/*
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/
const findLongestWord = (input) => {
  return Math.max(...(input.split(" ").map(w => w.length)));
};
test(10, findLongestWord("I am Anil Chaulagain"), "Expected output of findLongestWord(\"I am Anil Chaulagain\") is 10. ");
test(15, findLongestWord("Congratulations you are selected"), "Expected output of findLongestWord(\"Congratulations you are selected\") is 15. ");


/*
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/
const filterLongWords = (input, i) => {
  return input.split(" ").map(w => ({ word: w, length: w.length })).filter(o => o.length > i).map(o => o.word);
};
test(JSON.stringify(["Anil", "Chaulagain"]), JSON.stringify(filterLongWords("I am Anil Chaulagain", 3)), "Expected output of filterLongWords(\"I am Anil Chaulagain\", 3) is [\"Anil\", \"Chaulagain\"]. ");
test(JSON.stringify(["Congratulations", "selected"]), JSON.stringify(filterLongWords("Congratulations you are selected", 5)), "Expected output of filterLongWords(\"Congratulations you are selected\", 5) is [\"Congratulations\", \"selected\"]. ");


//JSFIDDLE SOLUTION
const a = [1, 3, 5, 3, 3];


// a) multiply each element by 10;
const b = a.map(function(elem, i, array) {
  return elem * 10;
});
console.log("[1, 3, 5, 3, 3] multiply each element by 10 : ", b);


//b) return array with all elements equal to 3;
const c = a.filter(function(elem, i, array) {
  return elem === 3;
});
console.log("[1, 3, 5, 3, 3] return array with all elements equal to 3 : ", c);


//c) return the product of all elements;
const d = a.reduce(function(prevValue, elem, i, array) {
  return prevValue * elem;
}, 1);
console.log("[1, 3, 5, 3, 3] return the product of all elements : ", d);
