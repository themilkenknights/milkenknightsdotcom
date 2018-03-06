/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  skel.breakpoints({
    wide: '(max-width: 1680px)',
    normal: '(max-width: 1280px)',
    narrow: '(max-width: 980px)',
    narrower: '(max-width: 840px)',
    mobile: '(max-width: 736px)',
    mobilep: '(max-width: 480px)',
  });

  $(function() {

    var $window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on narrower.
    skel.on('+narrower -narrower', function() {
      $.prioritize(
          '.important\\28 narrower\\29',
          skel.breakpoint('narrower').active
      );
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
      offsetY: -15,
      hoverDelay: 0,
      alignment: 'center',
    });

    // Off-Canvas Navigation.

    // Title Bar.
    $(
        '<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '<span class="title">' + 'Team 1836: The MilkenKnights' + '</span>' +
        '</div>'
    ).appendTo($body);

    // Navigation Panel.
    $(
        '<div id="navPanel">' +
        '<nav>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
    ).appendTo($body).panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'navPanel-visible',
    });

    // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
    if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
      $('#titleBar, #navPanel, #page-wrapper').css('transition', 'none');

  });

})(jQuery);

'use strict';

if ('serviceWorker' in navigator) {
  // Delay registration until after the page has loaded, to ensure that our
  // precaching requests don't degrade the first visit experience.
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // Your service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
    // See https://github.com/slightlyoff/ServiceWorker/issues/468
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = function() {
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a "New content is available; please refresh."
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });
}

function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    if (navigator.serviceWorker.controller) {
      var messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function (event) {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("This page isn't currently controlled by a service worker. Please reload and try again.");
    }
  });
}
document.querySelector('#clear-cache').addEventListener('click', function() {
  sendMessage({command: 'delete_all'}).then(function() {
    console.log('All caches deleted.');
  }).catch(function(error) {
    console.error('Caches not deleted:', error);
  });
});