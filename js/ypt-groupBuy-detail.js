/**
 * Created by admin on 2015/3/31.
 */
(function ($) {
    var gbDetail = {};

    /*悬浮菜单*/
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 747) {
            $(".deal-tab-w").addClass("fixw");
        }else {
            $(".deal-tab-w").removeClass("fixw");
        }
    });

    /*tab切换*/
    $(".deal-tab-w").on("click","li",function(){
        var dc = $(this).children("a").data("content");
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        $(".deal-tab-content__w").children().hide();
        $("."+dc).show();
    });

    /*轮播*/
    $(".image-thumb").on("click","img", function () {
        //left:108
        var i = $(this).index();
        clearInterval(gbDetail.timer);
        $(".image-thumb a").stop();
        gbDetail.index = $(this).index();
        move(gbDetail.index,500);
        gbDetail.timer=setInterval(stimer,3000);
    });
    $(".image-slider").hover(function(){
        clearInterval(gbDetail.timer);
    },function(){
        gbDetail.timer = setInterval(stimer,3000);
    });

    gbDetail.index = 0;
    gbDetail.imgThumbNum = $(".image-thumb img").length;
    gbDetail.timer = setInterval(stimer,3000);
    function stimer(){

        gbDetail.index++;
        if( gbDetail.index > gbDetail.imgThumbNum-1 ){
            gbDetail.index = 0;
        }
        move(gbDetail.index);
    }
    function move(index,time){
        var interval = time || 1000;
        var left = index * 108 + "px";
        var a = $(".image-thumb a").stop().animate({"left":left},interval,function(){
            var img_scr = $(".image-thumb img").eq(index).attr("src");
            $(".image-slider img").attr("src",img_scr);
        });
    }

    /*倒计时*/
    //timeCountDown.countDown(1428945598);
})(jQuery);