var s = document.createElement("script");
s.src = chrome.extension.getURL("googleFearch.js");
(document.head || document.documentElement).appendChild(s);


// removing Index of portions

var x = document.getElementsByClassName("r");
var i;

for(i=0;i<x.length;i++){
	st = x[i].innerHTML;
	var pos = st.search("Index of /" || "Index of");
	if(pos!=-1){
		x[i].innerHTML = st.replace(st.substring(pos,pos+10),"");
	}
}


// After loading and execution, the node disappears so no one can trace code.

s.onload = function () {
    s.parentNode.removeChild(s);
};
