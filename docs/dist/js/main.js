/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }

//Load jQuery script in desktop browser, but not mobile
//http://stackoverflow.com/questions/15732847/load-jquery-script-in-desktop-browser-but-not-mobile

jQuery(document).ready(function() {
 var isDesktop = (function() {
  return !('ontouchstart' in window) // works on most browsers
  || !('onmsgesturechange' in window); // works on ie10
})();
 //edit, if you want to use this variable outside of this closure, or later use this:
 window.isDesktop = isDesktop;
 if( isDesktop ){
   /* desktop things */


   jQuery(document).ready(function() {
    var stickyNavTop = jQuery('.sub-nav-wrapper');
    if (stickyNavTop.length > 0) {
      stickyNavTop = stickyNav.offset().top;

      var stickyNav = function(){
        var scrollTop = jQuery(window).scrollTop();

        if (scrollTop > stickyNavTop) {
          jQuery('.sub-nav-wrapper').addClass('sticky');
        } else {
          jQuery('.sub-nav-wrapper').removeClass('sticky');
        }
      };

      stickyNav();
      jQuery(window).scroll(function() {
       stickyNav();
     });
    }
  });


   jQuery(".scroll").click(function(event){
     event.preventDefault();
         //calculate destination place
         var dest=0;
         if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
          dest=jQuery(document).height()-jQuery(window).height();
        }else{
          dest=jQuery(this.hash).offset().top-150;
        }
         //go to destination
         jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
       });




   jQuery( ".navbar-toggle" ).click(function() {
    jQuery(".navbar-collapse").toggleClass( "nav-highlight" );
  });

 }
});




