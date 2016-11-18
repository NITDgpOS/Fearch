
function register(){
	var set1,set2,set3;
	
	var query = document.getElementById("query").value;

	if(document.getElementById("music").checked === true)
		set1='mp3|wav|m4a|ogg|wma|flac';
	else
		set1='';
	if(document.getElementById("video").checked === true)
		var set2='|mkv|mp4|avi|webm|flv|mov|mpg|mpeg';
	else
		set2='';
   	if(document.getElementById("books").checked === true)
		var set3='|epub|pdf';
	else
		set3='';

	var formats = set1 + set2 + set3;
	var query_split = query.split(".");
	var suggested_format = query_split[1];
	query = query_split[0];
	formats = formats + '|' + suggested_format;

	window.open("http://www.google.com/webhp?#q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+formats+")&btnI=I");
}

document.addEventListener('DOMContentLoaded', function () {document.querySelector('button').addEventListener('click', register); });
