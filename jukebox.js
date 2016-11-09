
//jukebox object constructor
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
//instance of jukebox object
var jukeBox = new JukeBox();
//makes it play
document.getElementById("jukeBox").addEventListener("mouseover", function(){
	jukeBox.play();
});
//makes it pause
document.getElementById("jukeBox").addEventListener("click", function(){
	jukeBox.pause();
});

//helps to solve fakepath problem
document.getElementById('myFile').addEventListener("change", function (){
	var songPath = this.value.replace("C:\\fakepath\\", "");
	jukeBox.load(songPath);
});
