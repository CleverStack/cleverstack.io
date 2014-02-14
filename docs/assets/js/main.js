//Load jQuery script in desktop browser, but not mobile
//http://stackoverflow.com/questions/15732847/load-jquery-script-in-desktop-browser-but-not-mobile

jQuery(document).ready(function() {
 var isDesktop = (function() {
  return !('ontouchstart' in window) // works on most browsers
  || !('onmsgesturechange' in window); // works on ie10
})();
 //edit, if you want to use this variable outside of this closure, or later use this:
 window.isDesktop = isDesktop;

 jQuery(document).ready(function() {
if ($('#player').length > 0) {
var player;  function onYouTubePlayerAPIReady() {  player = new YT.Player('player', {  height: '420',  width: '640',  videoId: 'h2-kSRrHHGo',  events: {  'onReady': onPlayerReady,  'onStateChange': onPlayerStateChange  }  });  }
function onPlayerReady(event) {
// event.target.playVideo();
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING)  {
    ga('send', 'event', 'Introduction Video', 'click', 'Play');
  }

  if (event.data == YT.PlayerState.ENDED)  {
    ga('send', 'event', 'Introduction Video', 'click', 'Watch to End');
  }
}
}

  $('#knows-npm').bind('click', function () {
    ga('send', 'event', 'Frontpage Navigation', 'click', 'Developer');
  });
  $('#knows-business').bind('click', function() {
    ga('send', 'event', 'Frontpage Navigation', 'click', 'Business');
  });
  $('#fork-github').bind('click', function() {
    ga('send', 'event', 'Developer Page', 'click', 'Fork it on GitHub');
  });
  $('.get-started').bind('click', function() {
    ga('send', 'event', 'Developer Page', 'click', 'Get Started - ' + $(this).data('name'));
  });
  $('.get-started-biz').bind('click', function() {
    ga('send', 'event', 'Business Page', 'click', 'Get Started - ' + $(this).data('name'));
  });
  $('.biz-nav').bind('click', function() {
    ga('send', 'event', 'Business Page', 'click', 'Business Navigation - ' + $(this).data('name'));
  });
  $('.biz-nav-top').bind('click', function() {
    ga('send', 'event', 'Business Page', 'click', 'Business Top Navigation - ' + $(this).data('name'));
  });
  $('#contact-ct-biz').bind('click', function() {
    ga('send', 'event', 'Business Page', 'click', 'Contact Clevertech');
  });
  $('#why-video').bind('click', function() {
    ga('send', 'event', 'Developer Page', 'click', 'Why Cleverstack Video Link');
  });
 });

 if( isDesktop ){
   /* desktop things */


   jQuery(document).ready(function() {
    var stickyNavTop = jQuery('.sub-nav-wrapper');
    if (stickyNavTop.length > 0) {
      stickyNavTop = stickyNavTop.offset().top;

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
     var stickyNavTop = jQuery('.sub-nav-wrapper');
         //calculate destination place
         var dest=0;
         if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
          dest=jQuery(document).height()-jQuery(window).height();
        }else{
          dest=jQuery(this.hash).offset().top - (stickyNavTop.length > 0 ? 120 : 0);
        }
         //go to destination
         jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
       });




   jQuery( ".navbar-toggle" ).click(function() {
    jQuery(".navbar-collapse").toggleClass( "nav-highlight" );
  });

 }
});




