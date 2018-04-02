//Autofill Logic
var text=document.getElementById("query");
var suggestions=document.getElementsByClassName("suggestion");  
function handleData(data) {
    if(data[0]!="")
    {
        for(var i=0;i<(suggestions.length);i++)
            {   
                if(data[1].length>0)
                {
                    suggestions[i].classList.remove("off");
                    suggestions[i].innerHTML=data[1][i][0];
                }
            }
    }
};
text.addEventListener("keyup",function(req,res){
    if(text.value=="")
    {
        for(var i=0;i<(suggestions.length);i++)
            {
                suggestions[i].innerHTML="";
                suggestions[i].classList.add("off");
            }
    }
    for(var i=0;i<(suggestions.length);i++)
    {
        suggestions[i].addEventListener("click",function(req,res){
            text.value=this.textContent;
            for(var i=0;i<(suggestions.length);i++)
            {
                suggestions[i].classList.add("off");
            }
        });
    }
    var script = document.createElement('script');
    script.setAttribute('src','https://www.google.com/complete/search?client=psy-ab&hl=en-IN&gs_rn=64&gs_ri=psy-ab&tok=_vqJWTsUOepGe_q9mSti0A&cp=0&gs_id=9&q='+text.value+'&xhr=t&callback=handleData');
    document.body.appendChild(script);
    });

//To make Suggestions Disapper when user clicks outside query field
document.body.addEventListener("click", function(){
    for(var i=0;i<(suggestions.length);i++)
            {
                suggestions[i].classList.add("off");
            }
});
text.addEventListener("click",function(event){
    event.stopPropagation();
});

// Styling content
// Place suggestion in query box
function suggestionAsValue() {
    var sLabel;
    sLabel = document.getElementById("suggest-label");
    sLabel.addEventListener("click", function () {
        document.getElementById("query").value = sLabel.innerHTML;
    });
}

// Method to keyboard shortcut
function keyboardShortCutListener(e) {
    e.preventDefault();
    if (e.ctrlKey && e.altKey && e.keyCode === 77) {
        if (document.getElementById("music").checked === true) {
            document.getElementById("music").checked = false;
        } else {
            document.getElementById("music").checked = true;
        }
    } else if (e.ctrlKey && e.altKey && e.keyCode === 86) {
        if (document.getElementById("video").checked === true) {
            document.getElementById("video").checked = false;
        } else {
            document.getElementById("video").checked = true;
        }
    } else if (e.ctrlKey && e.altKey && e.keyCode === 66) {
        if (document.getElementById("books").checked === true) {
            document.getElementById("books").checked = false;
        } else {
            document.getElementById("books").checked = true;
        }
    } else if (e.ctrlKey && e.altKey && e.keyCode === 65) {
        if ((document.getElementById("music").checked === true) && (document.getElementById("video").checked === true) && (document.getElementById("books").checked === true)) {
            document.getElementById("music").checked = false;
            document.getElementById("video").checked = false;
            document.getElementById("books").checked = false;
        } else {
            document.getElementById("music").checked = true;
            document.getElementById("video").checked = true;
            document.getElementById("books").checked = true;
        }
    }
}

function register(event) {
    var set1;
    var set2;
    var set3;
    var check1;
    var check2;
    var check3;
    var query;
    var formats;
    var querySplit;
    var suggestedFormat;
    var dotCheck;
    var uuid;

    query = text.value;
    query = encodeURIComponent(query);
    // Note :- avoid hardcoded uuid.
    uuid = "8fd531a3ba79466f8a80e5c71dea9723";
    check1 = document.getElementById("music").checked;
    check2 = document.getElementById("video").checked;
    check3 = document.getElementById("books").checked;
    querySplit = query.split(".");
    dotCheck = querySplit.length > 1;

    // Warning messages
    if (query === "") {
        document.getElementById("searchWarning").style.display = "block";
        document.getElementById("checkboxWarning").style.display = "none";
        event.preventDefault();
    } else if (check1 || check2 || check3 || dotCheck) {
        // query logic
        if (document.getElementById("music").checked === true) {
            set1 = "mp3|wav|m4a|ogg|wma|flac";
        } else {
            set1 = "";
        }
        if (document.getElementById("video").checked === true) {
            set2 = "|mkv|mp4|avi|webm|flv|mov|mpg|mpeg";
        } else {
            set2 = "";
        }
        if (document.getElementById("books").checked === true) {
            set3 = "|epub|pdf";
        } else {
            set3 = "";
        }
        formats = set1 + set2 + set3;
        if (dotCheck) {
            suggestedFormat = querySplit[1];
            query = querySplit[0];
            formats = formats + "|" + suggestedFormat;
        }
        /* eslint-disable */
        window.open("http://www.google.com/search?q="+query+" -"+uuid+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+formats+")");
        /* eslint-enable */
    } else {
        document.getElementById("searchWarning").style.display = "none";
        document.getElementById("checkboxWarning").style.display = "block";
        event.preventDefault();
    }
}

function suggestion() {
    var suggestions;
    var random;
    suggestions = ["Anime",
        "Manga",
        "TV-Series",
        "Pokemon",
        "Big Bang",
        "Blues",
        "Rock",
        "Metal",
        "AC/DC",
        "Pop",
        "Soft Rock",
        "MJ",
        "Pink Floyd",
        "The Wall",
        "Shakira",
        "JeLo",
        "Hard Rock",
        "Old Blues",
        "Fiction",
        "Thriller",
        "Learning",
        "Eminem",
        "Green Day",
        "Metaliica",
        "Taylor Swift",
        "Drake"];

    random = Math.floor(Math.random() * suggestions.length);
    document.getElementById("suggest-label").innerHTML = suggestions[random];
}

var theme;

function themeChange() {

    theme = localStorage.getItem("theme");
    if(theme == 'light' )
        localStorage.setItem( "theme" , "dark" );
    else
        localStorage.setItem("theme", "light");

    var bg = document.getElementById("content");
    bg.classList.toggle("dark");

    var labels = document.getElementsByTagName('label');
    labels[0].classList.toggle("dark-label");
    labels[1].classList.toggle("dark-label");
    labels[2].classList.toggle("dark-label");

}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", register);
    document.addEventListener("keyup", keyboardShortCutListener, false);
    suggestion();
    suggestionAsValue();
    if (!localStorage.getItem('theme'))
        localStorage.setItem('theme', 'light');

    if(localStorage.getItem("theme") == 'dark')
    {
        themeChange();
        localStorage.setItem( "theme" , "dark" );
    }
});
