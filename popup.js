
function register(){
	var set1,set2,set3;
	
	var query = document.getElementById("query").value;

	if(document.getElementById("music").checked == true)
		set1='mp3|m4a|flac';
	else
		set1='';
	if(document.getElementById("video").checked == true)
		var set2='|mkv|mp4|avi|mpeg|mov|3gp';
	else
		set2='';
   	if(document.getElementById("books").checked == true)
		var set3='|epub|pdf|doc';
	else
		set3='';
	if(document.getElementById("software").checked == true)
		var set4='|exe|dmg|apk|ipa|msi';
	else
		set4='';

	window.open("http://www.google.com/webhp?#q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+set1+set2+set3+set4+")&btnI=I");
}

document.addEventListener('DOMContentLoaded', function () {document.querySelector('button').addEventListener('click', register); });
