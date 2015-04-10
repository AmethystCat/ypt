/**
 * Created by admin on 2015/4/1.
 */
(function () {
    if (!/*@cc_on!@*/0)return;
    var e = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),
        i = e.length;
    while (i--) {
        document.createElement(e[i]);
    }
})();
