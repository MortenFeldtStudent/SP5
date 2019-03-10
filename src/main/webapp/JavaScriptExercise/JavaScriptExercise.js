//Array declaration
const names = ["Peter", "Lars", "Jan", "Bo", "Morten", "Frederik", "Rene", "Nikolai", "Rasmus"];

//1) Using existing functions that takes a callback as an argument
//Using the filter method:
//Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter
//method to create a new array with only names that contains the letter ‘a’.
var arrFilter = names.filter(name => name.includes("a"));
console.log("Result of 1) a)");
console.log(arrFilter);

//Using the map method:
//Use the names-array created above, and, using its map method, create a new array with all names reversed.
var arrMap = names.map(name => name.split("").reverse().join(""));
console.log("Result of 1) b)");
console.log(arrMap);

//------------------------------------------------------------------------------------------------------------------------------------------------------

//2) Implement user defined functions that take callbacks as an argument
//Now, assume the array did not offer these two methods . Then we would have to implement them by our self.
//a) Implement a function: myFilter(array, callback) that takes an array as the first argument,
//and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
//(this method should provide the same behaviour as the original filter method).
//Test the method with the same array and callback as in the example with the original filter method.
function myFilter(array, callback) {
    const result = [];
    array.forEach(element => {
        if (callback(element)) {
            result.push(element);
        }
    });

    return result;
}

const resFilter = myFilter(names, function (element) {
    return element.includes('a');
});
console.log("Result of 2) a)");
console.log(resFilter);

//b) Implement a function: myMap(array, callback) that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
//Test the method with the same array and callback as in the example with the original map method.
function myMap(array, callback) {
    const result = [];
    array.forEach(element => {
        result.push(callback(element))
    });
    return result;
}

const resMap = myMap(names, function (element) {
    return element.split("").reverse().join("");
});
console.log("Result of 2) b)");
console.log(resMap);

//------------------------------------------------------------------------------------------------------------------------------------------------------

//3) Using the Prototype property to add new functionality to existing objects
//----------------------RED---------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------

//4) Getting really comfortable with filter and map
//a) Given this array: var numbers = [ 1 , 3 , 5 , 10 , 11 ];
//Use map + a sufficient callback to map numbers into this array:
//var result = [ 4 , 8 , 15 , 21 , 11 ];
var numbers = [1, 3, 5, 10, 11];
var result = numbers.map(function (value, index) {
    if ((index + 1) < numbers.length) {
        var next = numbers[index + 1];
    }
    else {
        next = 0;
    }
    return next + value;
});
console.log("Result of 4) a)");
console.log(result);

//b) Use map() to create to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
var href = names.map(name => "<a href=\"test.html\">" + name + "</a>");
href.unshift("<nav>");
href.push("</nav>");
console.log("Result of 4) b)");
console.log(href.join("\n"));

//c) Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below:
var namesPhones = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" }
];
var resNamesPhones = namesPhones.map(name =>
    "Name: " + name.name + " , " + "Phone: " + name.phone);
console.log("Result of 4) c)");
console.log(resNamesPhones.join("/"));

//d) Create a single html-file and test the two examples given above.
//SEE SOLUTION IN FILE "f2w3d1_exercise4d.js"

//d) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’.
//Update the nav and the table to represent the filtered data.
//SEE SOLUTION IN FILE "f2w3d1_exercise4d.js"

//------------------------------------------------------------------------------------------------------------------------------------------------------

//REDUCE
//reduce is used to reduce an array into a single item (a number, string, object, etc). This is a very common
//problem in all languages, for specific problems, so common, that the Array actually has a specific “reduce”
//method called join , which can reduce an array into a string separated by whatever we choose.

//a) Use join to create a single string from all , with names: comma-, space. and # - separated.
var all = ["Lars", "Peter", "Jan", "Bo"];
console.log("Result of \"Reduce\" a)");
console.log("Comma:" + " " + all.join(","));
console.log("Space:" + " " + all.join(" "));
console.log("Line:" + " " + all.join("-"));

//b) Create a reducer callback that, with reduce(..), will return the sum (105) of all values in numbers
var numbers = [2, 3, 67, 33];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var countReduceB = numbers.reduce(reducer);
console.log("Result of \"Reduce\" b)");
console.log(countReduceB);

//c) Create a reducer callback that, using the Array’s reduce() method, will return the average age of all members (25 for the provided array).
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
];

var initialValue = 0;
var avg = members.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.age;
}, initialValue);

//console.log(avg / 4);

/* var countReduceC = members.reduce(function (accumulator, member, currentIndex, array) {
    var count = accumulator.age + member.age;

    if (currentIndex === (array.length - 1)) {
        return count / array.length;
    }

    return count;
}); */
console.log("Result of \"Reduce\" c)");
console.log(avg / members.length);

//d) d) Imagine you were to create a system that could count votes for the presidential election in USA.
//----------------------RED---------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------

//Hoisting
//Team up with another member of the class. Read about hoisting and implement at least two examples (individually) to illustrate that:
//a) Function declarations are completely hoisted
x = 5;
console.log("Result of \"Hoisting\" a)");
console.log(x); // = 5 because below "x" is declared "var x" both in the top x is set to 5 "x = 5" and this will be like "var x = 5" after hoisting                  
var x;

//b) var declarations are also hoisted, but not assignments made with them
var x = 5;
console.log("Result of \"Hoisting\" b)");
console.log(x); // = 5
console.log(y); // = "undefined" because "y" is both declared and initilized at same time below "var y = 7" - only "var y" is hoisting and will result in "undefined" variable       
var y = 7;

//------------------------------------------------------------------------------------------------------------------------------------------------------

//this in JavaScript
function testThis() {
    return this;
}
console.log("Result of \"this\" in function");
console.log(testThis.name);

//a) call()
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe",
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe",
  }
  console.log("Result of \"this\" and \"call\"");
  console.log(person.fullName.call(person1));  // Will return "John Doe" 


//b) apply()
//----------------------MANGLER!---------------------------

//c) bind()
//EKSEMPEL FRA W3SCHOOLS NEDENFOR OM BIND()
console.log("Result of \"this\" and \"bind\"");
function f() {
    return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g());

var h = g.bind({ a: 'yoo' });
console.log(h());
//------------------------------------------------------------------------------------------------------------------------------------------------------

//Reusable Modules with Closures
//1) Implement and test the Closure Counter Example from w3schools:
var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add();

console.log("Result of \"Closure\" 1)");
console.log(counter);

//2) Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
//setAge
//setName
//getInfo (should return a string like Peter, 45)
//----------------------MANGLER!---------------------------

