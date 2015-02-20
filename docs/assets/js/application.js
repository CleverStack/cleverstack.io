


!function ($) {

  //bootstrap scrolling fix
  //https://github.com/twbs/bootstrap/issues/3316
  $(function () {

    var offset = 80;
    $('.bs-sidenav li a, .permalink').click(function(event) {
      var hash    = $(this).attr('href')
        , isLocal = /^[^\/]/.test(hash);

      if (isLocal && (sidenav = $(hash)) && sidenav.length) {
        // event.preventDefault();
        setTimeout(function() {
          $('html body').animate({
            scrollTop: $(sidenav[0]).position().top + 245
          });
        }, 10);
      }
    });
  });

  // Code snippet for showing technologies for seeds
  $(function () {

    var $techs = $('.technologies'),
        $seedEls = $('.seeds-list a'),
        i = 1,
        inv = 3000;

    function startLoop(i, inv) {
      window.tsInv = setInterval(function() {
          $seedEls.removeClass('active').eq(i-1).addClass('active');
          $techs.removeClass('seed1 seed2 seed3').addClass('seed'+i);
          i = (i == 3) ? 1 : i+1;
      }, inv);
    }
    // startLoop();

    function showSeedTechs(i) {
      $seedEls.removeClass('active').eq(i-1).addClass('active');
      $techs.removeClass('seed1 seed2 seed3').addClass('seed'+i);
    }

    //on hover
    $seedEls.on('click', function(e) {
      // clearInterval(window.tsInv);
      e.preventDefault();
      var id = $(this).attr('id');
      showSeedTechs(id.replace('seed',''));
    });

  });

}(jQuery);




// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */


!function ($) {

  $(function () {

    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      );
      document.querySelector('head').
        appendChild(msViewportStyle);
    }


    var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh');
      // $('body').append('<style> .section-page { min-height: ' + ($(window).height() - 180 )+ 'px !important} </style>');
    })

    $('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // back to top
    setTimeout(function () {
      var $sideBar = $('.bs-sidebar')

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.bs-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          },
          bottom: function () {
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
      })
    }, 100)

    setTimeout(function () {
      $('.bs-top').affix()
    }, 100)

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: '[data-toggle=tooltip]',
      container: 'body'
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    $('.bs-docs-navbar').tooltip({
      selector: 'a[data-toggle=tooltip]',
      container: '.bs-docs-navbar .nav'
    })

    // popover demo
    $('[data-toggle=popover]')
      .popover()

    // button state demo
    $('#loading-example-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })
  })

}(jQuery)
