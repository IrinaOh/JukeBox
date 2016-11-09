function JukeBox(){
	this.audio = new Audio();
	this.audio.src = "john_mayer_-_perfectly_lonely.mp3";
	this.play = function(){
		this.audio.play();
	}
	this.pause = function(){
		this.audio.pause();
	}
	this.load = function(url){
		this.audio.src = url;
	}
}
var jukeBox = new JukeBox();
document.getElementById("jukeBox").addEventListener("mouseover", function(){
	jukeBox.play();
});
document.getElementById("jukeBox").addEventListener("click", function(){
	jukeBox.pause();
});

document.getElementById('myFile').addEventListener("change", function (){
	var songPath = this.value.replace("C:\\fakepath\\", "");
	jukeBox.load(songPath);
});
