$(document).ready(function(){
	/*福利点击部分*/
	$("#fuli-picture1").mouseover(function () {
		$("#mask1").slideDown(300);
	})

	$("#fuli-picture1").mouseleave(function () {
		$("#mask1").hide();
	})
	
	$("#fuli-picture2").mouseover(function () {
		$("#mask2").slideDown(300);
	})
	$("#fuli-picture2").mouseleave(function () {
		$("#mask2").hide();
	})
	
	$("#fuli-picture3").mouseover(function () {
		$("#mask3").slideDown(300);
	})
	$("#fuli-picture3").mouseleave(function () {
		$("#mask3").hide();
	})
	
	/*部门介绍*/
	$("#fuli-picture1").click(function(){
		$(".fuli-box").fadeIn(500);
		$(".fuli-box").hide(500);
		$("#fili-content1").fadeOut(500);
		$("#fili-content1").show(500);
		$(".back").css("display","block");
	})
	$("#more").click(function(){
		$("#fili-content1").hide(500);
		$("#fili-content2").fadeOut(500);
		$("#fili-content2").show(500);
		$(".back").css("display","block");
	})
	
	/*技术组介绍*/
	$("#fuli-picture2").click(function(){
		$(".fuli-box").fadeIn(500);
		$(".fuli-box").hide(500);
		$("#fili-content2").fadeOut(500);
		$("#fili-content2").show(500);
		$(".back").css("display","block");
	})
	
	/*福利介绍*/
	$("#fuli-picture3").click(function(){
		$(".fuli-box").fadeIn(500);
		$(".fuli-box").hide(500);
		$("#fili-content3").fadeOut(500);
		$("#fili-content3").show(500);
		$(".back").css("display","block");
	})
	
	/*返回键*/
	$(".back").click(function(){
		$(".fuli-content").css({"display":"none"},500);
		$(".fuli-box").show(500);
		$(".back").css("display","none");
	})
	
	/*回到顶部键*/
	$('#returnTop').click(function(){
	$('html,body').animate({scrollTop: 0},400);
	});
	
	/*薯薯*/
	var shushu = setInterval(function(){
		$(".join-us-shushu").animate(
		{"bottom":"30px"},500).animate({
		"bottom":"20px"},500);
	},1000);
	
	/*肥老板*/
	$("#fat-boss").mouseover(function () {
		$(".mask_yellow").css("display","block");
	})

	$("#fat-boss").mouseleave(function () {
		$(".mask_yellow").css("display","none");
	})
	
	/*林建明*/
	$("#linJianMin").mouseover(function () {
		$(".mask_green").css("display","block");
	})

	$("#linJianMin").mouseleave(function () {
		$(".mask_green").css("display","none");
	})
	
})
