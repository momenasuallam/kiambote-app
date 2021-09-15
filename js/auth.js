$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(document).ready(function () {
  $(".sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(".diswhenhidesb button").toggleClass("hellosidebtn");
    $("#content").toggleClass("bgactive");
  });
});
