var retrieveQuery=[];
var retrieveURL=[];
var toggle = document.getElementById('them');

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
    var toggle = document.getElementById('them');
    toggle.addEventListener('click', handleThemeChange);
});

var mydiv = document.getElementById("historyList");
var clearHistory = document.querySelector("#clearButton");

retrieveQuery=(JSON.parse(localStorage.getItem('search')));
retrieveURL=(JSON.parse(localStorage.getItem('link')));

mydiv.textContent="";
var count=0;
retrieveQuery.forEach(function(entr)
{

    
    var aTag = document.createElement('a');
    aTag.setAttribute('target','_blank')
    aTag.setAttribute('href',retrieveURL[count]);
    aTag.innerHTML = entr;
    mydiv.appendChild(aTag);
    var mybr = document.createElement('br');
    mydiv.appendChild(mybr);
    var myhr = document.createElement('hr');
    mydiv.appendChild(myhr);
    count++;

})




clearHistory.addEventListener("click",function()
{
    localStorage.clear();
    location.reload();

});