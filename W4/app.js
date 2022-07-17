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

// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"
String.prototype.filter = function (bannedWord) {
  return this.replace(new RegExp(bannedWord, "g"), "");
};
test(
  "This house is  nice!",
  "This house is not nice!".filter("not"),
  'Expected output of  "This house is not nice!".filter("not") is "This house is  nice!"'
);
test(
  "I am a good  person.",
  "I am a good very person.".filter("very"),
  'Expected output of  "I am a good person".filter("very") is "I am a good  person."'
);

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]
Array.prototype.bubbleSort = function () {
  const arr = this;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
test(
  JSON.stringify([-2, 0, 1, 3, 4, 6]),
  JSON.stringify([6, 4, 0, 3, -2, 1].bubbleSort()),
  'Expected output of  "[6, 4, 0, 3, -2, 1]".bubbleSort() is [-2, 0, 1, 3, 4, 6]'
);
test(
  JSON.stringify([-4, -3, -2, -1, 1, 2, 3, 4]),
  JSON.stringify([4, 3, 2, 1, -1, -2, -3, -4].bubbleSort()),
  "Expected output of  [4, 3, 2, 1, -1, -2, -3, -4].bubbleSort() is [-4, -3, -2, -1, 1, 2, 3, 4]"
);

// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.

//Function constructor approach
(function () {
  const Person = function (name) {
    this.name = name;
  };
  const Teacher = function (name) {
    Person.call(this, name);
    this.teach = function (subject) {
      console.log(`${this.name} is now teaching ${subject}`);
    };
  };
  var teacher = new Teacher("John");
  teacher.teach("JavaScript");
})();

//Object prototype approach
(function () {
  //Person class
  const Person = function (name) {
    this.name = name;
  };

  //Student class
  const Teacher = function (name) {
    Person.call(this, name);
  };
  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  };

  var teacher = new Teacher("Robert");
  teacher.teach("React");
})();

// //Exercise 4:
// Write code that will create person, student, and professor objects.
// • Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
// [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
// good afternoon, good evening and good night!”
// • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
// [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
// my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.

//Function constructor approach
(function () {
  //Person class
  const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
      console.log(
        `Greetings, my name is ${this.name} and I am ${this.age} years old.`
      );
    };
    this.salute = function () {
      console.log(
        "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
      );
    };
  };

  //Student class
  const Student = function (name, age, major) {
    Person.call(this, name, age);
    this.major = major;
    this.greeting = function () {
      console.log(
        `Hey, my name is ${this.name} and I am studying ${this.major}.`
      );
    };
  };

  //Professor class
  const Professor = function (name, age, department) {
    Person.call(this, name, age);
    this.department = department;
    this.greeting = function () {
      console.log(
        `Good day, my name is ${this.name} and I am in the ${this.department} department.`
      );
    };
  };

  var student = new Student("Anil Chaulagain", 20, "Cryptography");
  student.greeting();
  var professor = new Professor("Anthony Sandar", 30, "Computer Science");
  professor.greeting();
})();

//Object prototype approach
(function () {
  //Person class
  const Person = function (name, age) {
    this.name = name;
    this.age = age;
  };
  Person.prototype.greeting = function () {
    console.log(
      `Greetings, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
  Person.prototype.salute = function () {
    console.log(
      "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
    );
  };

  //Student class
  const Student = function (name, age, major) {
    Person.call(this, name, age);
    this.major = major;
  };
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.greeting = function () {
    console.log(
      `Hey, my name is ${this.name} and I am studying ${this.major}.`
    );
  };

  //Professor class
  const Professor = function (name, age, department) {
    Person.call(this, name, age);
    this.department = department;
  };
  Professor.prototype = Object.create(Person.prototype);
  Professor.prototype.greeting = function () {
    console.log(
      `Good day, my name is ${this.name} and I am in the ${this.department} department.`
    );
  };

  var student = new Student("Anil Chaulagain", 20, "Cryptography");
  student.greeting();
  var professor = new Professor("Anthony Sandar", 30, "Computer Science");
  professor.greeting();
})();

logMessage("------", true);
logMessage(
  "For other exercises results, please open web developer console. Thanks!",
  true
);
logMessage("------", true);
