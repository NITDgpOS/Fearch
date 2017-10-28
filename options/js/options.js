
var radios = document.getElementsByName('theme');

if(!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'light');

if(localStorage.getItem('theme') == 'light')
{
    console.log("light");
    radios[0].checked = true;
}
else
{
    console.log("dark");
    radios[1].checked = true;
}

function handleThemeChange(event) {
    if(event.target.value == 'light')
        localStorage.setItem('theme', 'light');
    else
        localStorage.setItem('theme', 'dark');
}

document.addEventListener("DOMContentLoaded", function () {
    var radios = document.getElementsByName('theme');
    radios[0].addEventListener('click', handleThemeChange);
    radios[1].addEventListener('click', handleThemeChange);
});
