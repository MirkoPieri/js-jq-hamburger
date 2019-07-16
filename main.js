// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.

// Disposizione generale file js
$( document ).ready(function() {

  // comando per far comparire menu dopo click su tasto hamburger
  // selezione contenitore
  $(".header-right > a").click(function() {
    // selezione di cosa mostrare dopo il click
      $(".hamburger-menu").show(500);
    });


    // comando per far sparire menu dopo click su tasto hamburger
    // selezione del contenitore
    $(".hamburger-menu > .close").click(function() {
      // selezione di cosa far scomparire
        $(".hamburger-menu").hide(200);
      });

});
