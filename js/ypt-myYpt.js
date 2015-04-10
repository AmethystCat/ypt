/**
 * Created by admin on 2015/4/1.
 */
(function ($) {
    /*tab*/
    $(".section-info-item__w").on("click","li", function (e) {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        $(".section-info-content__w").children().hide();
        $("."+$(this).children("a").data("content")).show();
    });
})(jQuery);