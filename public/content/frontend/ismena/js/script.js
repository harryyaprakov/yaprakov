$(function(){

	
	$(".tabs [data-tab]").on("click", function () {
		var forWhich = $(this).attr("data-tab");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
	});
	$(".tab-days li").on("click", function () {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

	});
	
	
});