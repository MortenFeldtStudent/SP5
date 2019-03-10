const test = document.getElementById("countryInfo");
var countryLast;

var countryCode = document.getElementById('svg2').onclick = function (e) {
    if (countryLast != null) {
        countryLast.fill = "#c0c0c0";
    }
    fetchCountry(e.target.id);
    e.target.style.fill = "#ff0000";
    countryLast = e.target.style;
};

function fetchCountry(countryCode) {
    if (countryCode === "ru-main" || countryCode === "ru-kgd") {
        countryCode = "ru";
    }
    fetch('http://restcountries.eu/rest/v1/alpha?codes=' + countryCode)
        .then(res => res.json())
        .then(data => {
            var all = "";
            data.forEach(function (key) {
                all += "<p>" + "Country: " + key.name + "</p>";
                all += "<p>" + "Population: " + key.capital + "</p>";
                all += "<p>" + "Area: " + key.region + "</p>";
            });
            test.innerHTML = all;
        })
};

