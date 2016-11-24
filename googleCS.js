var s = document.createElement("script");
s.src = chrome.extension.getURL("googleFearch.js");
(document.head || document.documentElement).appendChild(s);

// After loading and execution, the node disappears so no one can trace code.
s.onload = function () {
    s.parentNode.removeChild(s);
};
