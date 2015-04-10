/**
 * Created by admin on 2015/3/31.
 */
(function ($) {
    /*分页切换*/
    $(".section-pagination-w").on("click","li", function () {
        console.log($(this).next());
        if ($(this).attr("class") === "section-pagination--next"){
            $(".section-pagination-w li").each(function (index) {
                if ($(this).attr("class") === "on") {
                    $(this).removeClass("on");
                    $(this).next().addClass("on");
                    return false;
                }
            });
            return false;
        }else {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            console.log($(this).index());
            return false;
        }
    });
})(jQuery);