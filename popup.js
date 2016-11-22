
function register() {
    var set1;
    var set2;
    var set3;
    var formats;
    var querySplit;
    var suggestedFormat;

    var query = document.getElementById("query").value;

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
        "Tutorials",
        "Ebooks",
        "Epubs",
        "Fiction",
        "Thriller",
        "Learning",
        "Music"];

    random = Math.floor(Math.random() * suggestions.length);
    document.getElementById("suggest-label").innerHTML = suggestions[random];
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", register);
    suggestion();
});
