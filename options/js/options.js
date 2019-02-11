var histo=[];
var histLink=[];
var radios = document.getElementById('them');

if(!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'light');

if(localStorage.getItem('theme') == 'light')
{
    console.log("light");
    radios.checked = false;
}
else
{
    console.log("dark");
    radios.checked = true;
}

function handleThemeChange(event) {
    if(radios.checked == false)
        localStorage.setItem('theme', 'light');
    else
        localStorage.setItem('theme', 'dark');
}

document.addEventListener("DOMContentLoaded", function () {
    var radios = document.getElementById('them');
    radios.addEventListener('click', handleThemeChange);
});

var mydiv = document.getElementById("hList");
var histButton = document.querySelector("#histClear");

histo=(JSON.parse(localStorage.getItem('search')));
histLink=(JSON.parse(localStorage.getItem('link')));

mydiv.textContent="";
var count=0;
histo.forEach(function(entr)
{

    
    var aTag = document.createElement('a');
    aTag.setAttribute('target','_blank')
    aTag.setAttribute('href',histLink[count]);
    aTag.innerHTML = entr;
    mydiv.appendChild(aTag);
    var mybr = document.createElement('br');
    mydiv.appendChild(mybr);
    var myhr = document.createElement('hr');
    mydiv.appendChild(myhr);
    count++;

})


histButton.addEventListener("mouseover",function()
{
    document.getElementById("xadd").innerHTML="X";

});

histButton.addEventListener("mouseout",function()
{
    document.getElementById("xadd").innerHTML="";

});

histButton.addEventListener("click",function()
{
    localStorage.clear();
    location.reload();

});