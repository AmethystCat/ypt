/**
 * Created by admin on 2015/3/31.
 */
(function($){
    var model = {};
    /*header 通用交互*/
    /*搜索框关键字切换*/
    /*$(".search-box__tabs").on("click","li",function(){
        console.log($(this)[0].outerHTML);
        $(".search-box__tab:first-child").before($(this)[0].outerHTML);
        $(this).remove();
    });*/
    /*导航切换*/
    $(".site-nav-inner").on("click","nav li",function(){
        $(this).siblings().removeClass("nav--current");
        $(this).addClass("nav--current");
    });

    /*倒计时*/
    function countDown(timestamp) {
        //当前时间戳
        var nowStamp = (new Date()).getTime();
        var time = timestamp*1000 - nowStamp;
        model.countTime = Number(time);
        model.timer = setInterval(function () {
            counter(model.countTime);
        },100);
    }
    function counter(time){
        var s = 1000,
            m = s * 60,
            h = m * 60;

        var hour = parseInt( time/h );
        var minute = parseInt( (time%h)/m) ;
        var second = parseInt( ((time%h)%m)/s ) ;
        var millisecond = parseInt( (time%s)/100 );
        $("#c-hour").text(hour);
        $("#c-minute").text(minute);
        $("#c-second").text(second+"."+millisecond);
        model.countTime -= 100;
        if (time == 0) {
            clearInterval(model.timer);
            return ;
        }
    }
    return timeCountDown ={
        countDown : countDown
    }
})(jQuery);