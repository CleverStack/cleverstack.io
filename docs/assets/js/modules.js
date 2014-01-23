/*global jQuery, _, List */
(function ($) {
  'use strict';

  var API_URL = 'http://cleverstack-modules-list.herokuapp.com/';
  // var API_URL = 'http://localhost:8011/';
  // var API_URL = '/dist/data/modules.json';

  //render HTML template
  function render(data) {
      var listInit = true;

      var modulesTpl = _.template($('#modules-template').html(), {
          modules: _.sortBy(data, function (el) {
              return -el.stars;
          })
      });

      $('#loading').hide();
      $('#modules').append(modulesTpl).find('.search').show();

      var list = new List('modules', {
          valueNames: [
              'name',
              'description',
              'owner',
              'created',
              'updated',
              'forks',
              'stars',
              'keywords'
          ],
          page: 8,
          indexAsync: true,
          plugins: [[
              'paging', {
                  outerWindow: 1
              }
          ]]
      });

      list.on('updated', function () {
          console.log('updated...');
          $('#modules').find('.created time, .updated time').timeago();

          if (listInit) {
              listInit = false;
              var query = decodeURIComponent(window.location.hash.replace('#!/search/', ''));

              if (query) {
                  $('.search').val(query);
                  list.search(query);
              }

              // back/forward in the list with arrow-keys
              $(window).on('keyup', function (e) {
                  // ugly hack to prevent pagination when search is focused
                  // easiest way, since I don't control this logic
                  if ($(document.activeElement).is('.search')) {
                      return;
                  }

                  var pageBtns = $('#modules').find('.paging li');

                  if (e.which === 37) {
                      pageBtns.filter('.prev').click();
                  }

                  if (e.which === 39) {
                      pageBtns.filter('.next').click();
                  }
              });
          } else {
              // update hash on search
              var query = $.trim($('.search').val());
              window.location.hash = query === '' ? '' : '#!/search/' + query;
          }

          $('.table thead').toggle(list.matchingItems.length !== 0);
          $('#search-notfound').toggle(list.matchingItems.length === 0);
      });

    }

    $(function () {
        $.getJSON(API_URL).then(render).done(function () {
            $('#modules').find('.created time, .updated time').timeago();
        }).fail(function () {
            $('#loading p').text('Failed to load modules list :(');
        });
    });

})(jQuery);
