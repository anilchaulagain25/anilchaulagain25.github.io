const logContainer = document.getElementById("log");

//Log to HTML UI
const logMessage = function (message, isSuccess) {
  console.log(message);
  logContainer.innerHTML += `<br><span style="background-color: ${
    isSuccess ? "green" : "red"
  }">${message}</span>`;
};

//Method to test actual and expected value assertion
const test = function (expected, actual, fnDescription) {
  if (actual === expected) {
    logMessage(fnDescription + ` TEST SUCCEEDED`, true);
  } else {
    logMessage(
      fnDescription +
        ` TEST FAILED - Actual :  ${actual}, Expected : ${expected}`,
      false
    );
  }
};

/*
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/
const sum = (arr) => arr.reduce((item, acm) => acm + item, 0);
test(
  15,
  sum([1, 2, 3, 4, 5]),
  "Expected output of sum([1, 2, 3, 4, 5]) is 15. "
);
test(
  -5,
  sum([-1, -2, -3, -4, 5]),
  "Expected output of sum([-1, -2, -3, -4, 5]) is -5. "
);

/*
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/
const multiply = (arr) => arr.reduce((item, acm) => acm * item, 1);
test(
  60,
  multiply([10, 2, 3]),
  "Expected output of multiply([10, 2, 3]) is 60. "
);
test(
  120,
  multiply([-1, -2, -3, -4, 5]),
  "Expected output of multiply([-1, -2, -3, -4, 5]) is 120. "
);

/*
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 */
const reverse = (input) => input.split("").reverse().join("");
test("lina", reverse("anil"), 'Expected output of reverse("anil") is lina. ');
test("eoj", reverse("joe"), 'Expected output of reverse("joe") is eoj. ');

/*
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/
const filterLongWords = (input, i) => {
  return input
    .split(" ")
    .map((w) => ({ word: w, length: w.length }))
    .filter((o) => o.length > i)
    .map((o) => o.word);
};
test(
  JSON.stringify(["Anil", "Chaulagain"]),
  JSON.stringify(filterLongWords("I am Anil Chaulagain", 3)),
  'Expected output of filterLongWords("I am Anil Chaulagain", 3) is ["Anil", "Chaulagain"]. '
);
test(
  JSON.stringify(["Congratulations", "selected"]),
  JSON.stringify(filterLongWords("Congratulations you are selected", 5)),
  'Expected output of filterLongWords("Congratulations you are selected", 5) is ["Congratulations", "selected"]. '
);
