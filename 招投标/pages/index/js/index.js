$(function(){
	/*侧边悬浮窗显示和隐藏*/
	$(".shouqi").click(function() {
		$(".side_menu ul").slideUp();
		$(".shouqi").slideUp();
		$(".hide_icon").slideDown();
	});
	$(".hide_icon").click(function() {
		$(".side_menu ul").slideDown();
		$(".shouqi").slideDown();
		$(".hide_icon").slideUp();
	});
});