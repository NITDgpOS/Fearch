var recentSearchQueries=[];
var recentSearchQueryUrls=[];
var toggle = document.getElementById('theme');

if(!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'light');

if(localStorage.getItem('theme') == 'light')
{
    console.log("light");
    toggle.checked = false;
}
else
{
    console.log("dark");
    toggle.checked = true;
}

function handleThemeChange(event) {
    if (toggle.checked==false)
        localStorage.setItem('theme', 'light');
    else
        localStorage.setItem('theme', 'dark');
}

document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById('theme');
    toggle.addEventListener('click', handleThemeChange);
});

var historyListElement = document.getElementById("historyList");
var clearHistory = document.querySelector("#clearButton");

recentSearchQueries=(JSON.parse(localStorage.getItem('search')));
recentSearchQueryUrls=(JSON.parse(localStorage.getItem('link')));

historyListElement.textContent="";
var count=0;
recentSearchQueries.forEach(function(entr)
{

    
    var aTag = document.createElement('a');
    aTag.setAttribute('target','_blank')
    aTag.setAttribute('href',recentSearchQueryUrls[count]);
    aTag.innerHTML = entr;
    historyListElement.appendChild(aTag);
    var mybr = document.createElement('br');
    historyListElement.appendChild(mybr);
    var myhr = document.createElement('hr');
    historyListElement.appendChild(myhr);
    count++;

})




clearHistory.addEventListener("click",function()
{
    localStorage.clear();
    location.reload();

});