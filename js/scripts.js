/* Jquery code for carouselButton to toggle pause & play*/
    $ (function() {
        $ (".carousel").carousel({interval:2000});
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            }
            else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause");
            }

        })
       
    });
    /*Jquery code for ReserveButton and LoginButton */
    $(document).ready(function() {
  $("#reserveButton").click(function() {
    $("#reserveModal").modal("show");
  });

  $("#loginButton").click(function() {
    $("#loginModal").modal("show");
  });
});
