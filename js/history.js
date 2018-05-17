$(document).ready(function(){
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
	if(i ==0) {
		$(".mask-3-1").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content1").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content4").fadeOut();
	
	}
	if(i ==1) {
		$(".mask-3-2").slideDown(800);
		$(".mask-3-1").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content2").fadeIn(3000);
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		$("#mask-content3").fadeOut();
		
	
	}
	if(i ==2) {
		$(".mask-3-3").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-1").hide();
		$(".mask-3-4").hide();
		$("#mask-content3").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		
	}
	if(i ==3) {
		$(".mask-3-4").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-1").hide();
		$("#mask-content4").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content1").fadeOut();
		
	}

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
	if(i ==0) {
		$(".mask-3-1").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content1").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content4").fadeOut();
	
	}
	if(i ==1) {
		$(".mask-3-2").slideDown(800);
		$(".mask-3-1").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content2").fadeIn(3000);
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		$("#mask-content3").fadeOut();
		
	
	}
	if(i ==2) {
		$(".mask-3-3").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-1").hide();
		$(".mask-3-4").hide();
		$("#mask-content3").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		
	}
	if(i ==3) {
		$(".mask-3-4").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-1").hide();
		$("#mask-content4").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content1").fadeOut();
		
	}
}

/*实现you按钮图片移动效果*/	
var nextt = document.getElementById("next");
	$("#pre").mouseover(function () {
		$("#pre").css("backgroundColor","rgba(0,0,0,.1)");
	})
	$("#pre").mouseout(function () {
		$("#pre").css("backgroundColor","transparent");
	})
	$("#next").mouseover(function () {
		$("#next").css("backgroundColor","rgba(0,0,0,.1)");
	})
	$("#next").mouseout(function () {
		$("#next").css("backgroundColor","transparent");
	})
nextt.onclick = function(){
	console.log(i);
	var w = document.body.offsetWidth;
	i++;
	if(i >= 4) {
		i = 3;
	}
	var d = i * (-w);
	$('.runPictures').animate({marginLeft:d});
	if(i ==0) {
		$(".mask-3-1").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content1").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content4").fadeOut();
	
	}
	if(i ==1) {
		$(".mask-3-2").slideDown(800);
		$(".mask-3-1").hide();
		$(".mask-3-3").hide();
		$(".mask-3-4").hide();
		$("#mask-content2").fadeIn(3000);
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		$("#mask-content3").fadeOut();
		
	
	}
	if(i ==2) {
		$(".mask-3-3").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-1").hide();
		$(".mask-3-4").hide();
		$("#mask-content3").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content1").fadeOut();
		$("#mask-content4").fadeOut();
		
	}
	if(i ==3) {
		$(".mask-3-4").slideDown(800);
		$(".mask-3-2").hide();
		$(".mask-3-3").hide();
		$(".mask-3-1").hide();
		$("#mask-content4").fadeIn(3000);
		$("#mask-content2").fadeOut();
		$("#mask-content3").fadeOut();
		$("#mask-content1").fadeOut();
		
	}
}



})

