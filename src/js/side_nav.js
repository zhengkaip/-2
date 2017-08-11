 var onoff=true;
 var close=false;
$(".header .head_nav").on("touchend",function(e){
    if(onoff){
        $(".wrap").css({
            "transform":"translateX(-7.1rem)",
            "-webkit-transform":"translateX(-7.1rem)"
        })
        $(".sidebar_nav").css({
            "transform":"translateX(-7.1rem)",
            "-webkit-transform":"translateX(-7.1rem)"
        })
        close=!close;
    }else{
        $(".wrap").css({
            "transform":"translateX(0)",
            "-webkit-transform":"translateX(0)"
        })
    	$(".sidebar_nav").css({
            "transform":"translateX(0)",
            "-webkit-transform":"translateX(0)"
        })
    	$(".btm_nav").addClass("fixed");
    }
    onoff=!onoff;
    e.stopPropagation()
})
$(".wrap").on("tap",function(e){
    if(close){
    	$(".wrap").css({
            "transform":"translateX(0)",
            "-webkit-transform":"translateX(0)"
        })
        $(".sidebar_nav").css({
            "transform":"translateX(0)",
            "-webkit-transform":"translateX(0)"
        })
        onoff=!onoff;
        close=!close;
        $(".btm_nav").addClass("fixed");        
    }
})
$(".sidebar_nav p").attr("onoff","false")
$(".sidebar_nav p").on("tap",function(){
	if($(this).attr("onoff")=="false"){
		$(this).addClass("active").parents("dd").siblings().find("p").removeClass('active');
		$(this).attr("onoff","true");
	}else{
		$(this).removeClass("active");
		$(this).attr("onoff","false");
	}
	
})
$(".sidebar_nav li").on("tap",function(){
	$(this).addClass("active").siblings("li").removeClass("active");
})