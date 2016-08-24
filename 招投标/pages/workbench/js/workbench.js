$(function(){
	/*推荐服务左右滑动按钮得显示和隐藏*/
	$(".left_btn , .right_btn").hover(function(){
		$(this).children('label').show();
	},function(){
		$(this).children('label').hide();
	});
	/* 推荐服务左右滑动按钮的点击功能*/
	var blw=$("#myscrollbox li").width();
  	/*获取单个子元素所需宽度*/
  	var liArr = $("#myscrollbox ul").children("li");
  	/*获取子元素数量*/
  	var mysw = $(".operate_items").width();
  	/*获取子元素所在区域宽*/
 	var mus = parseInt(mysw/blw);
 	/*计算出需要显示的子元素的数量*/
 	var length = parseInt(liArr.length/mus);
  	/*计算子元素可移动次数（被隐藏的子元素数量）*/
 	var i=0;
  	$(".right_btn").click(function(){
	 	i++;
	 	//点击i加1
	 		if(i<length){
		    	$("#myscrollbox").css("left",-(4*blw*i));
			  	//子元素集合向左移动，距离为子元素的宽度乘以i。
		  	}else{
			  	i=length;
			  	$("#myscrollbox").css("left",-(4*blw*length));
			  	//超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
	      	}
  	});
  	$(".left_btn").click(function(){
	  	i--;
	  	//点击i减1
	  	if(i>=0){
	     	$("#myscrollbox").css("left",-(4*blw*i));
		 	//子元素集合向右移动，距离为子元素的宽度乘以i。
	  	}else{
		 	i=0;
		 	$("#myscrollbox").css("left",0);
		 	//超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
     	 }
  	});
  	/*
  	tab页切换
  	 */
  	var $tab_li = $(".tab_title ul li");
  	$tab_li.click(function(){
  		$(this).addClass('tab_selected').siblings().removeClass('tab_selected');
  		var index = $tab_li.index(this);
  		$('div.tab_content > div').eq(index).show().siblings().hide();
  	});
});
