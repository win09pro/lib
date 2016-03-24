$("document").ready(function($){
    var nav = $("#menu-container");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            nav.addClass("f-nav");
        } else {
         nav.removeClass("f-nav");
        }
    });
});
$(function() {
    $("#fb")
        .mouseover(function() { 
            var src = $(this).attr("src").replace("fb1.png", "fb2.png");
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("fb2.png", "fb1.png");
            $(this).attr("src", src);
        });
});
$(function() {
    $("#phoneimg")
        .mouseover(function() { 
            var src =   $("#phoneimg").attr("src").replace("phone1.png", "phone2.png");
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src =  $("#phoneimg").attr("src").replace("phone2.png", "phone1.png");
            $(this).attr("src", src);
        });
});