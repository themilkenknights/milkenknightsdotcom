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

var precacheConfig = [["/404.html","1e508ffb9a07d300ff201138223f01f1"],["/about.html","d12fa062afa0abc1d7a97e779af73e29"],["/achievements.html","4a04502230cba538086d751b430a3e84"],["/assets/css/font-awesome.min.css","346abc0338e97fcdf3e4b947b1f7eb25"],["/assets/css/ie8.css","dc752a9ce75c936f1f7a01d5e30c5f42"],["/assets/css/ie9.css","d9e6bc2a169d14c2da32cf03f60b8b55"],["/assets/css/images/bg01.jpg","08e27e2e490424e7e33a0d15d89f6a0f"],["/assets/css/images/bg01.png","f7c7329b01a70ed56df466e1d4e044c6"],["/assets/css/images/bg02.png","5da8cc5cf2b9e67603e8b631e8a7ef18"],["/assets/css/images/bg03.png","ce461c4489eeb6af5549dfb861df2ed5"],["/assets/css/main.css","0bdc6dc06aab116e95ff76be4a7cddcd"],["/assets/css/sourcesanspro.css","1312db6dd0234bab10ceca26deb41ad3"],["/assets/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/assets/fonts/fontawesome-webfont.svg","3558944309282c860f2acb6c26ebf970"],["/assets/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/assets/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/assets/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/assets/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/assets/js/jquery.dropotron.min.js","9526d309a90b28aefc363a35ce60cfba"],["/assets/js/jquery.min.js","78beaec3c9e715fead1c89f96e76e21c"],["/assets/js/main.js","e5657af510aa06d1dc2a8398cbde055b"],["/assets/js/skel.min.js","9f8158f54b71d54f3d325023bcd48536"],["/assets/js/util.js","4c78ba810d3878d62c328e9ab62a4be4"],["/azscout.html","ceec125841f11bfeb4bb499492524893"],["/banner/banner.html","0a82ff1b8a1c171d647ad84d7940dd31"],["/banner/banners.css","ca8fecde3bea2047761e5046848ca3bf"],["/banner/example.css","f29a6d05a3071c091620b5343225006a"],["/banner/images/mklive.png","e98e2fe0317f86955a1b01febe5686e8"],["/banner/images/mklive.svg","0f7e30320d22d974d9c8baa6562b70fe"],["/calendar.html","eefb6d6a51583f47c4756e673423f109"],["/downloads.html","c513189feffee7082eb22575c3f68eb3"],["/icons/android-chrome-192x192.png","0ed2bc9e332735ae79aa87621a446dd6"],["/icons/android-chrome-512x512.png","0833313723840e9122a00a5b1f68deaf"],["/icons/apple-touch-icon.png","0425b5e974cde5e0097e0c769c258b4b"],["/icons/favicon-16x16.png","b0ee21790682ead838161236765784f1"],["/icons/favicon-32x32.png","dfa9ea38892069f0e3f776761de6df13"],["/icons/mstile-144x144.png","55373e1ed00e36ae3a3e076cc0963d00"],["/icons/mstile-150x150.png","23895283e42981ca4c168d36229d9e31"],["/icons/mstile-310x150.png","84cdbe7242cf4a624bfdd1d8176c896c"],["/icons/mstile-310x310.png","6fddfbe6a5fd018baa75aaa59dfaa94d"],["/icons/mstile-70x70.png","205536df0edb8789c81818edc397e99d"],["/icons/safari-pinned-tab.svg","3ad0e410b34d51af2a8f7656e544c4f5"],["/images/1836gifv3.gif","0bb6d6b188a20671dc4fe7fb72eabdfb"],["/images/a01.jpg","99c24ece3514041f9fb9431fa1f05f42"],["/images/a02.jpg","282379255fd387a4d482e557e3c4ed73"],["/images/a03.jpg","0f7c3008790d00c6792b1901fe046d5e"],["/images/a04.jpg","5e6b4d94c8c09caceabab07e8b25e711"],["/images/a05.jpg","757b6b08dd95bb850bdbaeedded3ce2b"],["/images/a06.jpg","d8c054903c6a313fd6e9286203ec7081"],["/images/banner.jpg","029c8d7adf2486a216986647e581ec45"],["/images/banner.png","61a7edc1995b86471d990649a9592339"],["/images/frc.png","be1955b7540ac33509853e98f84a0e82"],["/images/header.png","8559cfc5ae7b0203facfe37c3f815486"],["/images/hubshot.png","c21f7274e83b797a5ef850ef4cad9891"],["/images/icons/android-chrome-192x192.png","0ed2bc9e332735ae79aa87621a446dd6"],["/images/icons/android-chrome-512x512.png","0833313723840e9122a00a5b1f68deaf"],["/images/icons/apple-touch-icon.png","0425b5e974cde5e0097e0c769c258b4b"],["/images/icons/favicon-16x16.png","b0ee21790682ead838161236765784f1"],["/images/icons/favicon-32x32.png","dfa9ea38892069f0e3f776761de6df13"],["/images/icons/mstile-144x144.png","55373e1ed00e36ae3a3e076cc0963d00"],["/images/icons/mstile-150x150.png","23895283e42981ca4c168d36229d9e31"],["/images/icons/mstile-310x150.png","84cdbe7242cf4a624bfdd1d8176c896c"],["/images/icons/mstile-310x310.png","6fddfbe6a5fd018baa75aaa59dfaa94d"],["/images/icons/mstile-70x70.png","205536df0edb8789c81818edc397e99d"],["/images/icons/safari-pinned-tab.svg","b2dcae62a6f7ea185828d39c4849454e"],["/images/logo.png","b23e293c35b1403156cc2bce35bf5491"],["/images/mcs.jpg","447f0561509cb985c0a269d683290303"],["/images/oldlogoprofile.gif","89c91934ca45bdf83a975a45ab04909f"],["/images/pic01.jpg","e89247132b124c223e760f087cd94adb"],["/images/pic02.jpg","5d89cd489d9ddd2cdeb4de1cdbf273b0"],["/images/pic03.jpg","d8d0b18bf693c079b6aef78201ffadf9"],["/images/pic04.jpg","72ab1f881d09bade807d24f5ff8d4b1d"],["/images/sponsors/1.png","79ebe42094dfe4e3a96de95a3dfb075b"],["/images/sponsors/10.png","928956e905746dc59cb41a79b35eeacd"],["/images/sponsors/11.jpg","bf9c619349d1c6ecb84953a942e289c9"],["/images/sponsors/12.png","2b669c01cb7e7bf0c631cefd92a0c7aa"],["/images/sponsors/13.png","f3a6d035838d83ce8f2f97743655a4c9"],["/images/sponsors/14.png","e3a41751c23ecc98748df1b5e573783b"],["/images/sponsors/15.png","6a808933d07fa40c610e7b59f019e1e2"],["/images/sponsors/16.gif","933f3533d99aeea2d8158fe4b2f30b9e"],["/images/sponsors/17.gif","b283b3a16608834bafcd731466d6e74a"],["/images/sponsors/18.png","77f2a7d1709260b4978d580b2004a968"],["/images/sponsors/19.png","0a3b621ee1e6a12abb7fc9c4bd8cccc7"],["/images/sponsors/2.png","e32ce74eb7078da02619d592e696a609"],["/images/sponsors/3.gif","3b807e325a6bdf63db67cecb06f5fd60"],["/images/sponsors/4.png","aa35d358ed6f39233440c85c85510af4"],["/images/sponsors/5.png","d75f3fdf88fb4a9adfd1685811d4c381"],["/images/sponsors/6.png","3ec08c4ae0843d9e6069d06ee602d5ef"],["/images/sponsors/7.png","516ad3bd2a688a1ee66bc223b5fcf947"],["/images/sponsors/8.png","f4440a8bfc1b77d6e86e70512f0001ad"],["/images/sponsors/9.png","95e89c586bafa3f8430561e1c69c3843"],["/images/stream.png","ea8983d10f784531439a1d7bb5201830"],["/index.html","a06e4028138b728a2f11f4650092d0f4"],["/join.html","1e83cc483e0bd4cf090cdecbc974e36d"],["/left-sidebar.html","f8691e4f446c32a5a8db0484e7ca54e4"],["/live.html","d3272fe937fba1b90774012cda0286e1"],["/media.html","1213ad6e7134e2c3791d97ce8e4f5940"],["/password_template.html","c871eb9441553b4c9c0aaa831d862697"],["/protected.html","f73ae3434d242e32d861d70ff271f5d6"],["/resources.html","c9dfd13d1129cd2fd742ff27f7aa4b95"],["/robots/2018.html","9f87bef049e726e85c379c3c45d49bab"],["/robots/assets/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/robots/assets/css/ie8.css","493bd1a2f65b116754e56a0176a4431c"],["/robots/assets/css/main.css","77f116d69585d31ee8a2351338c10093"],["/robots/assets/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/robots/assets/fonts/fontawesome-webfont.svg","3558944309282c860f2acb6c26ebf970"],["/robots/assets/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/robots/assets/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/robots/assets/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["/robots/assets/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/robots/assets/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/robots/assets/js/jquery.scrolly.min.js","cdaa947ce14cf917fd3fbb34bbf69292"],["/robots/assets/js/jquery.scrollzer.min.js","17e12390dd8449f6a59ade5c4997b79a"],["/robots/assets/js/main.js","c9ee43550e30c2e1d8e1bfa49546c49e"],["/robots/assets/js/skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["/robots/assets/js/util.js","e620d8b66b577cd585b8d2ad84afb34c"],["/robots/images/2018/avatar.jpg","4c1fecd6d7db2403889eeb61613943ae"],["/robots/images/2018/drive.png","729eb59be936938816896300fe0ce89c"],["/robots/images/2018/failure.jpg","a9f8e27ba6ea02bec784ecb8045412d5"],["/robots/images/2018/intakespring.gif","187e395789601e64105fe94a1bc39ef6"],["/robots/images/2018/java.png","cb1bbc67fdbe1200db39224c9221f30a"],["/robots/images/2018/pic03.jpg","bf4c5f6d87ed474d815410a0b16f078d"],["/robots/images/2018/redundancies.jpg","8998ecdea8baff9386baf4b5875e4eac"],["/robots/images/2018/size.jpg","d9f0dce776895df6bdc51f16752eccb5"],["/robots/images/2018/wheels.gif","0194b09b02f7dbf48345d0bafe042708"],["/robots/images/banner.jpg","8ee6c3ad52294f76cb0161d6c95fc840"],["/robots/images/pic01.jpg","0fadba5de81eb44c251c007f07876365"],["/robots/images/pic02.jpg","f5f155a6df67ada414f4dd6bf8d54a1d"],["/template.html","2c0434449903f2f7ee89d86b42ee3c8e"],["/thanks.html","ce41a3f80a9dfac3bf0b6481dab96b43"],["/two-sidebar.html","46305bdadfb1126af2184bf6c169b3e1"]];
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







