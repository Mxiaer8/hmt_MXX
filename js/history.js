/*实现图片自动播放动画效果*/
var i = -1;
window.onload = function runPicturess(){
	/*console.log(i);*/
	var w = document.body.offsetWidth;
	i++;
	if(i == 4) {
		i = 0;
	}
	
	var d = i * (-w);
	$('.runPictures').animate({marginLeft:d});
	t=setTimeout(function(){runPicturess()},6000);	

}
/*实现按钮效果*/
var runPictures = document.getElementById("runPictures");
/*实现左按钮图片移动效果*/
var pree = document.getElementById("pre");
pree.onclick = function(){
	console.log(i);
	var w = document.body.offsetWidth;
	i--;
	if(i <= 0) {
		i = 0;
	}
	var d = i * (-w);
	$('.runPictures').animate({marginLeft:d});
}

/*实现you按钮图片移动效果*/	
var nextt = document.getElementById("next");
nextt.onclick = function(){
	console.log(i);
	var w = document.body.offsetWidth;
	i++;
	if(i >= 4) {
		i = 3;
	}
	var d = i * (-w);
	$('.runPictures').animate({marginLeft:d});
}
