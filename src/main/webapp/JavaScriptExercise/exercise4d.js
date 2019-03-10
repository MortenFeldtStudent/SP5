//Array declaration
const names = ["Peter", "Lars", "Jan", "Bo", "Morten", "Frederik", "Rene", "Nikolai", "Rasmus"];

//4) Getting really comfortable with filter and map
//b) Use map() to create to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
var href = names.map(name => "<a href=\"test.html\">" + name + "</a>");
href.unshift("<nav>");
href.push("</nav>");

//c) Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below:
var namesPhones = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" }
];
var resNamesPhones = namesPhones.map(name =>
    "Name: " + name.name + " , " + "Phone: " + name.phone);

//d) Create a single html-file and test the two examples given above.
document.getElementById("nav").innerHTML = href;
document.getElementById("names").innerText = resNamesPhones;

//d) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’.
//Update the nav and the table to represent the filtered data.
function getHrefWithA() {
    var newNames = names.filter(name => name.includes("a"));
    var newHref = newNames.map(name => "<a href=\"test.html\">" + name + "</a>");
    newHref.unshift("<nav>");
    newHref.push("</nav>");
    document.getElementById("nav").innerHTML = newHref;
}

function getNameAndPhoneWithA() {
    var newNamesPhones = namesPhones.filter(name => name.name.includes("a"));

    var newResNamesPhones = newNamesPhones.map(name =>
        "Name: " + name.name + " , " + "Phone: " + name.phone);

        document.getElementById("names").innerText = newResNamesPhones;
}

function todo(){
    getHrefWithA();
    getNameAndPhoneWithA();
}

document.getElementById("filterNames").onclick = todo;

