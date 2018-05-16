var video = document.getElementById("video");
var button = document.getElementById("button")

video.style.visibility="hidden";
video.controls = false;
button.onclick = function(){
	video.style.visibility="visible";
	video.controls = true;
	button.style.display = "none";
	video.play();
}
video.onended = function(){
	video.controls = false;
	video.style.visibility="hidden";
	button.style.display = "inline-block";
}
$('#returnTop').click(function(){
	$('html,body').animate({scrollTop: 0},400);
});
