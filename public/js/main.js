var viewportWidth = $(window).width();
$(document).ready(function() {
  viewportWidth = $(window).width();
  $('#admintoTopbutton').fadeOut();
  $('#maintoTopbutton').fadeOut();
    var nav = $("#library-header");
    var headercontainer = $("#library-header-container");
    $(window).scroll(function () {
        if (($(this).scrollTop() > 45) || (viewportWidth < 1024)) {
            headercontainer.removeClass("container");
            nav.addClass("library-small-header");
            nav.removeClass("library-header");
            console.log(viewportWidth);
        } else {
            headercontainer.addClass("container");
            nav.addClass("library-header");
            nav.removeClass("library-small-header");
        }
});

  if (viewportWidth < 1024) {
     $("#library-header-container").removeClass("container");
      $("#library-header").removeClass("library-header").addClass("library-small-header");
  }
  else {
    $("#library-header-container").addClass("container");
    $("#library-header").addClass("library-header").removeClass("library-small-header");
  }
 }
)
$(window).resize(function () {
        viewportWidth = $(window).width();
       if (viewportWidth < 1024) {
          $("#library-header-container").removeClass("container");
           $("#library-header").removeClass("library-header").addClass("library-small-header");
       }
       else {
         $("#library-header-container").addClass("container");
         $("#library-header").addClass("library-header").removeClass("library-small-header");
       }
   });
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#admintoTopbutton').fadeIn();
  } else {
    $('#admintoTopbutton').fadeOut();
}});
$(document).ready(function() {
  $('#admintoTopbutton').fadeOut();
 }
)
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('#maintoTopbutton').fadeIn();
} else {
$('#maintoTopbutton').fadeOut();
}});
