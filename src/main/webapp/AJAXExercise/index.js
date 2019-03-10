import 'bootstrap/dist/css/bootstrap.css'
const button = document.getElementById("btn");
const div1 = document.getElementById("div1");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const url = 'https://studypoints.dk/jokes/api/jokes/period/hour';
const urlOwn = 'http://localhost:8084/AJAXDay2/api/quote/random';

function test(){setInterval(function(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
    div3.innerHTML = data.joke});
}, 3600000) //Opdatere hver time - se dette under "Network"-tab i "Development tools" - hvor "hour" indlæses
};

button.onclick = function(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
    div1.innerHTML = data.joke});
};

test();

function testOwn(){setInterval(function(){
    fetch(urlOwn)
    .then(res => res.json())
    .then(data => {
    div4.innerHTML = data.name});
}, 5000) //Opdatere hver time - se dette under "Network"-tab i "Development tools" - hvor "random" indlæses
};

testOwn();

const north = document.getElementById('north');
const east = document.getElementById('east');
const south = document.getElementById('south');
const west = document.getElementById('west');
const pTag = document.getElementById('pTag');

north.onclick = function nClick(e){
    console.log("you have clicked on " + this.id);
    pTag.innerText = "You clicked on: " + this.id;
}
east.onclick = function eClick(e){
    console.log("you have clicked on " + this.id);
    pTag.innerText = "You clicked on: " + this.id;
}
south.onclick = function sClick(e){
    console.log("you have clicked on " + this.id);
    pTag.innerText = "You clicked on: " + this.id;
}
west.onclick = function wClick(e){
    console.log("you have clicked on " + this.id);
    pTag.innerText = "You clicked on: " + this.id;
}

