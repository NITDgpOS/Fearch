
// Styling content

// Place suggestion in query box
function suggestionAsValue() {
    var sLabel;
    sLabel = document.getElementById("suggest-label");
    sLabel.addEventListener("click", function () {
        document.getElementById("query").value = sLabel.innerHTML;
    });
}

function register() {
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
	  var index;

    query = document.getElementById("query").value;
    check1 = document.getElementById("music").checked;
    check2 = document.getElementById("video").checked;
    check3 = document.getElementById("books").checked;
	index = document.getElementById("index").value;

    // Warning messages
    if (query === "") {
        document.getElementById("searchWarning").style.display = "block";
        document.getElementById("checkboxWarning").style.display = "none";
        event.preventDefault();
    } else if (check1 || check2 || check3) {
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
        querySplit = query.split(".");
        suggestedFormat = querySplit[1];
        query = querySplit[0];
        formats = formats + "|" + suggestedFormat;

        /* eslint-disable */
        window.open("http://www.google.com/search?q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+formats+")");
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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", register);
	document.getElementById('index').addEventListener("click", showIndex);
    suggestion();
    suggestionAsValue();
});

function showIndex() {
       var index_url = "https://www.google.com/doodles";
       chrome.tabs.create({
       url: index_url
    });
 }



