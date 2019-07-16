// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.


$( document ).ready(function() {


  $(".header-right > a").click(function() {

      $(".hamburger-menu").show(1000);
    });



    $(".hamburger-menu > .close").click(function() {

        $(".hamburger-menu").hide(200);
      });

});
