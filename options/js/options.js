/* eslint-disable vars-on-top */
var recentSearchQueries = [];
var recentSearchQueryUrls = [];
var historyListElement;
var clearHistory;
var count;
var themeToggle = document.getElementById("theme");

if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

if (localStorage.getItem("theme") === "light") {
    themeToggle.checked = false;
} else {
    themeToggle.checked = true;
}

function handleThemeChange(event) {
    if (themeToggle.checked === false) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
}

document.addEventListener("DOMContentLoaded", function () {
    themeToggle = document.getElementById("theme");
    themeToggle.addEventListener("click", handleThemeChange);
});

historyListElement = document.getElementById("historyList");
clearHistory = document.querySelector("#clearButton");

recentSearchQueries = (JSON.parse(localStorage.getItem("search")));
recentSearchQueryUrls = (JSON.parse(localStorage.getItem("link")));

historyListElement.textContent = "";
count = 0;
recentSearchQueries.forEach(function (entr) {
    var aTag = document.createElement("a");
    aTag.setAttribute("target", "_blank");
    aTag.setAttribute("href", recentSearchQueryUrls[count]);
    aTag.innerHTML = entr;
    historyListElement.appendChild(aTag);
    var br = document.createElement("br");
    historyListElement.appendChild(br);
    var hr = document.createElement("hr");
    historyListElement.appendChild(hr);
    count += 1;
});


clearHistory.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
