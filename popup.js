
function register(){
	var set1,set2,set3;
	
	var query = document.getElementById("query").value;
	if(document.getElementById("music").checked == true) {
		set1 = 'mp3';
		var value = document.getElementById("music-options").value;
		if (value != '') {
			set1 = "";
			value = value.trim();
			var music_options = value.split(",");
			for (var i=0;i<music_options.length;i++) {
				set1 += music_options[i].trim() + "|"
			}
			set1 = set1.substring(0, set1.length - 1);
		}
	}
	else
		set1 = '';
	if(document.getElementById("video").checked == true) {
		set2='|mkv|mp4|avi';
		var value = document.getElementById("video-options").value;
		if (value != '') {
			set2 = "";
			value = value.trim();
			var video_options = value.split(",");
			for (var i=0;i<video_options.length;i++) {
				set2 += video_options[i].trim() + "|";
			}
			set2 = "|" + set2.substring(0, set2.length - 1);
		}
	}
	else
		set2 = '';
	if(document.getElementById("books").checked == true) {
		set3='|epub|pdf';
		var value = document.getElementById("books-options").value;
		if (value != '') {
			set3 = "";
			value = value.trim();
			var books_options = value.split(",");
			for (var i=0;i<books_options.length;i++) {
				set3 += books_options[i].trim() + "|";
			}
			set3 = "|" + set3.substring(0, set3.length - 1);
		}
	}
	else
		set3 = '';
	window.open("http://www.google.com/webhp?#q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ("+set1+set2+set3+")&btnI=I");
}

document.addEventListener('DOMContentLoaded', function () {document.querySelector('button').addEventListener('click', register); });
