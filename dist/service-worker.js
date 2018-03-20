/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","ee0f67de8096965b9fac4ae2fb467cef"],["about.html","eb3e989ab45950c9689878df7b44c1f4"],["achievements.html","e203ff0e508fa6ec880e429365f45e60"],["assets/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["assets/css/ie8.css","be4c8e8d6e19a29479ca0250e917203b"],["assets/css/ie9.css","2bc31e67edfdff22bb6f24ac304d1cf0"],["assets/css/main.css","15b5ba9fa4a73c3815a18677de37c9ec"],["assets/css/main1.css","15b5ba9fa4a73c3815a18677de37c9ec"],["assets/css/sourcesanspro.css","da1811c83db09689b44f0acda3cf6ab7"],["assets/js/jquery.dropotron.min.js","19a18a4d6c0f6d063e932a316f18c626"],["assets/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["assets/js/main.js","1f7f748c26237f3af76408a24df9b4b2"],["assets/js/skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["assets/js/util.js","e620d8b66b577cd585b8d2ad84afb34c"],["azscout.html","d15eae5ced7c86566b78d82ce1dde616"],["banner/banner.html","1991e133b437fdae77692e87d5225d70"],["banner/banners.css","ca8fecde3bea2047761e5046848ca3bf"],["banner/example.css","f29a6d05a3071c091620b5343225006a"],["banner/images/mklive.png","e98e2fe0317f86955a1b01febe5686e8"],["calendar.html","f32c90a08625595ba802df40d7c03381"],["downloads.html","4c6fa01ed3381d80c12fe947ed689c14"],["icons/android-chrome-192x192.png","0ed2bc9e332735ae79aa87621a446dd6"],["icons/android-chrome-512x512.png","0833313723840e9122a00a5b1f68deaf"],["icons/apple-touch-icon.png","0425b5e974cde5e0097e0c769c258b4b"],["icons/favicon-16x16.png","b0ee21790682ead838161236765784f1"],["icons/favicon-32x32.png","dfa9ea38892069f0e3f776761de6df13"],["icons/mstile-144x144.png","55373e1ed00e36ae3a3e076cc0963d00"],["icons/mstile-150x150.png","23895283e42981ca4c168d36229d9e31"],["icons/mstile-310x150.png","84cdbe7242cf4a624bfdd1d8176c896c"],["icons/mstile-310x310.png","6fddfbe6a5fd018baa75aaa59dfaa94d"],["icons/mstile-70x70.png","205536df0edb8789c81818edc397e99d"],["images/1836gifv3.gif","0bb6d6b188a20671dc4fe7fb72eabdfb"],["images/a01.jpg","99c24ece3514041f9fb9431fa1f05f42"],["images/a02.jpg","282379255fd387a4d482e557e3c4ed73"],["images/a03.jpg","0f7c3008790d00c6792b1901fe046d5e"],["images/a04.jpg","5e6b4d94c8c09caceabab07e8b25e711"],["images/a05.jpg","757b6b08dd95bb850bdbaeedded3ce2b"],["images/a06.jpg","d8c054903c6a313fd6e9286203ec7081"],["images/banner.jpg","029c8d7adf2486a216986647e581ec45"],["images/banner.png","61a7edc1995b86471d990649a9592339"],["images/frc.png","be1955b7540ac33509853e98f84a0e82"],["images/header.png","8559cfc5ae7b0203facfe37c3f815486"],["images/hubshot.png","c21f7274e83b797a5ef850ef4cad9891"],["images/logo.png","b23e293c35b1403156cc2bce35bf5491"],["images/mcs.jpg","447f0561509cb985c0a269d683290303"],["images/oldlogoprofile.gif","89c91934ca45bdf83a975a45ab04909f"],["images/pic01.jpg","e89247132b124c223e760f087cd94adb"],["images/pic02.jpg","5d89cd489d9ddd2cdeb4de1cdbf273b0"],["images/pic03.jpg","d8d0b18bf693c079b6aef78201ffadf9"],["images/pic04.jpg","72ab1f881d09bade807d24f5ff8d4b1d"],["images/sponsors/1.png","79ebe42094dfe4e3a96de95a3dfb075b"],["images/sponsors/10.png","928956e905746dc59cb41a79b35eeacd"],["images/sponsors/11.jpg","bf9c619349d1c6ecb84953a942e289c9"],["images/sponsors/12.png","2b669c01cb7e7bf0c631cefd92a0c7aa"],["images/sponsors/13.png","f3a6d035838d83ce8f2f97743655a4c9"],["images/sponsors/14.png","e3a41751c23ecc98748df1b5e573783b"],["images/sponsors/15.png","6a808933d07fa40c610e7b59f019e1e2"],["images/sponsors/16.gif","933f3533d99aeea2d8158fe4b2f30b9e"],["images/sponsors/17.gif","b283b3a16608834bafcd731466d6e74a"],["images/sponsors/18.png","77f2a7d1709260b4978d580b2004a968"],["images/sponsors/19.png","0a3b621ee1e6a12abb7fc9c4bd8cccc7"],["images/sponsors/2.png","e32ce74eb7078da02619d592e696a609"],["images/sponsors/3.gif","3b807e325a6bdf63db67cecb06f5fd60"],["images/sponsors/4.png","aa35d358ed6f39233440c85c85510af4"],["images/sponsors/5.png","d75f3fdf88fb4a9adfd1685811d4c381"],["images/sponsors/6.png","3ec08c4ae0843d9e6069d06ee602d5ef"],["images/sponsors/7.png","516ad3bd2a688a1ee66bc223b5fcf947"],["images/sponsors/8.png","f4440a8bfc1b77d6e86e70512f0001ad"],["images/sponsors/9.png","95e89c586bafa3f8430561e1c69c3843"],["images/stream.png","ea8983d10f784531439a1d7bb5201830"],["index.html","89cb60aafda01f7a1abc8fbc6904d284"],["join.html","920c19f168067ea43f7904b5664b27a0"],["left-sidebar.html","5de0c8a800afd119ae0439c854b3b909"],["live.html","530b3a0fbda64da9a893b4b7e98ce28e"],["media.html","e8e0d15976db8b81e0bcaed195b0d2bd"],["password_template.html","0d71a2a8606dd259132557f40332f1c0"],["protected.html","d95bce22803bb3238cf88acf570a1bc9"],["resources.html","b439cfb14ba608b11a5083605f30929c"],["sw.js","3c43ad2352f963f99050a84b5daa2b42"],["template.html","2f7f6480a24058ca0135fdaf6237c2b8"],["thanks.html","ccfa2fca411680e353c1126a536d45b5"],["two-sidebar.html","081fb35a3802123d9084ba066bd4652d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







