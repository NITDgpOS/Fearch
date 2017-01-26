var st;
var x;
var i;
var pos;

var s = document.createElement("script");
s.src = chrome.extension.getURL("googleFearch.js");
(document.head || document.documentElement).appendChild(s);

// removing the leading Indeex of part from search results
x = document.document.getElementsByClassName("r");
for (i = 0; i < x.length; i += 1) {
    st = x[i].innerHTML;
    pos = st.search("Index of /" || "Index of");
    if (pos !== -1) {
        x[i].innerHTML = st.replace(st.substring(pos, pos + 10), "");
    }
}

// After loading and execution, the node disappears so no one can trace code.
s.onload = function () {
    s.parentNode.removeChild(s);
};
