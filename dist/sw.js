importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "74fbcca62156fea3a048707deace952c"
  },
  {
    "url": "about.html",
    "revision": "0a583f6f069da8beeed2c7640996df43"
  },
  {
    "url": "achievements.html",
    "revision": "1e18e1efed437ae3ac3293a287824dd4"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "01e957345fb05507c8b5f48973220c96"
  },
  {
    "url": "assets/css/ie8.css",
    "revision": "6549cc073000758ea320b86a9d487a21"
  },
  {
    "url": "assets/css/ie9.css",
    "revision": "d9e6bc2a169d14c2da32cf03f60b8b55"
  },
  {
    "url": "assets/css/images/bg01.jpg",
    "revision": "08e27e2e490424e7e33a0d15d89f6a0f"
  },
  {
    "url": "assets/css/images/bg01.png",
    "revision": "f7c7329b01a70ed56df466e1d4e044c6"
  },
  {
    "url": "assets/css/images/bg02.png",
    "revision": "5da8cc5cf2b9e67603e8b631e8a7ef18"
  },
  {
    "url": "assets/css/images/bg03.png",
    "revision": "ce461c4489eeb6af5549dfb861df2ed5"
  },
  {
    "url": "assets/css/main.css",
    "revision": "085d86c5aa562cf41edf187eded806c1"
  },
  {
    "url": "assets/css/main1.css",
    "revision": "15b5ba9fa4a73c3815a18677de37c9ec"
  },
  {
    "url": "assets/css/sourcesanspro.css",
    "revision": "1312db6dd0234bab10ceca26deb41ad3"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.svg",
    "revision": "3558944309282c860f2acb6c26ebf970"
  },
  {
    "url": "assets/js/ie/html5shiv.js",
    "revision": "62ac572189514315ebfb31c43a225009"
  },
  {
    "url": "assets/js/ie/respond.min.js",
    "revision": "9cccbcd9bc6aed2bb14df1013e185ce3"
  },
  {
    "url": "assets/js/jquery.dropotron.min.js",
    "revision": "bab6ced9634c6520eba8e5247f4920bc"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "e555ce1de8a82263177c9904d5b1742f"
  },
  {
    "url": "assets/js/main.js",
    "revision": "8c1fe6a3f7223827ee80fa7ad188f98e"
  },
  {
    "url": "assets/js/OLD_jquery.min.js",
    "revision": "20a1bd5ccac29797787feb6f9357772c"
  },
  {
    "url": "assets/js/skel.min.js",
    "revision": "304985231449e009a71b8341ad46141f"
  },
  {
    "url": "assets/js/util.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/js/workbox-sw.js",
    "revision": "93b96b567b054ba5d88cd79081f2e005"
  },
  {
    "url": "assets/js/workbox/workbox-background-sync.dev.js",
    "revision": "fe6774c22362ef1e34db105aae403617"
  },
  {
    "url": "assets/js/workbox/workbox-background-sync.prod.js",
    "revision": "9211e08e7e33b9881564cd9cf3402211"
  },
  {
    "url": "assets/js/workbox/workbox-broadcast-cache-update.dev.js",
    "revision": "8eb4344bc652fd3b135a4b678c2c557f"
  },
  {
    "url": "assets/js/workbox/workbox-broadcast-cache-update.prod.js",
    "revision": "296f00b3763d3f15393d78d91cb41be6"
  },
  {
    "url": "assets/js/workbox/workbox-cache-expiration.dev.js",
    "revision": "a4fb80f8ce617e9ef71fa5e019018a9e"
  },
  {
    "url": "assets/js/workbox/workbox-cache-expiration.prod.js",
    "revision": "c9e87b1a8c78ff60b86544874cc14892"
  },
  {
    "url": "assets/js/workbox/workbox-cacheable-response.dev.js",
    "revision": "5302fcb5ad1e831106b2564515a39a1c"
  },
  {
    "url": "assets/js/workbox/workbox-cacheable-response.prod.js",
    "revision": "2421c36226a8e1d70cf13a64c4b9aa0b"
  },
  {
    "url": "assets/js/workbox/workbox-core.dev.js",
    "revision": "4d61237e37ceef8494f7a56ae9f7cca9"
  },
  {
    "url": "assets/js/workbox/workbox-core.prod.js",
    "revision": "65e9fe4b5f0aac359cee12b34ecdcb59"
  },
  {
    "url": "assets/js/workbox/workbox-google-analytics.dev.js",
    "revision": "704ba152d7f0691c2e0192cc963af0cd"
  },
  {
    "url": "assets/js/workbox/workbox-google-analytics.prod.js",
    "revision": "c4ba61233ec54213dd09ef89bbdc53ff"
  },
  {
    "url": "assets/js/workbox/workbox-precaching.dev.js",
    "revision": "412b0f74a372166559d946a9b310e9dd"
  },
  {
    "url": "assets/js/workbox/workbox-precaching.prod.js",
    "revision": "92b8b761b81970e9beab93b6602a57c8"
  },
  {
    "url": "assets/js/workbox/workbox-range-requests.dev.js",
    "revision": "c4aa28a053c374e83682ca6fb96a8bf7"
  },
  {
    "url": "assets/js/workbox/workbox-range-requests.prod.js",
    "revision": "f51ab671547419c4fa4042b634af23f7"
  },
  {
    "url": "assets/js/workbox/workbox-routing.dev.js",
    "revision": "8c82a5df800f0b98aabe8811190fec4a"
  },
  {
    "url": "assets/js/workbox/workbox-routing.prod.js",
    "revision": "408061ddc88831aea02820c557411f91"
  },
  {
    "url": "assets/js/workbox/workbox-strategies.dev.js",
    "revision": "31997743c8928adcb0bc278917dc054a"
  },
  {
    "url": "assets/js/workbox/workbox-strategies.prod.js",
    "revision": "7e031ce45a8a0d5e30fc4577b3dd3457"
  },
  {
    "url": "assets/js/workbox/workbox-sw.js",
    "revision": "93b96b567b054ba5d88cd79081f2e005"
  },
  {
    "url": "azscout.html",
    "revision": "b176305ac96887fd7bbd01e76a0f9f06"
  },
  {
    "url": "banner/banner.html",
    "revision": "0a82ff1b8a1c171d647ad84d7940dd31"
  },
  {
    "url": "banner/banners.css",
    "revision": "ca8fecde3bea2047761e5046848ca3bf"
  },
  {
    "url": "banner/example.css",
    "revision": "f29a6d05a3071c091620b5343225006a"
  },
  {
    "url": "banner/images/mklive.png",
    "revision": "e98e2fe0317f86955a1b01febe5686e8"
  },
  {
    "url": "banner/images/mklive.svg",
    "revision": "0f7e30320d22d974d9c8baa6562b70fe"
  },
  {
    "url": "calendar.html",
    "revision": "b93206c148dbd8fd1b31a0c1188c919c"
  },
  {
    "url": "downloads.html",
    "revision": "0fdd4bc9e4f4c87caaee0890e43b8d9a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "0ed2bc9e332735ae79aa87621a446dd6"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0833313723840e9122a00a5b1f68deaf"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "0425b5e974cde5e0097e0c769c258b4b"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "b0ee21790682ead838161236765784f1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "dfa9ea38892069f0e3f776761de6df13"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "55373e1ed00e36ae3a3e076cc0963d00"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "23895283e42981ca4c168d36229d9e31"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "84cdbe7242cf4a624bfdd1d8176c896c"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "6fddfbe6a5fd018baa75aaa59dfaa94d"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "205536df0edb8789c81818edc397e99d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "3ad0e410b34d51af2a8f7656e544c4f5"
  },
  {
    "url": "images/1836gifv3.gif",
    "revision": "fd3decd58082130a15c6d9ece19f4b9b"
  },
  {
    "url": "images/a01.jpg",
    "revision": "e14982ebab220ff645721a1b7d1def12"
  },
  {
    "url": "images/a02.jpg",
    "revision": "13aa5aafc094a0e619f7b26d4f8679d7"
  },
  {
    "url": "images/a03.jpg",
    "revision": "1ad557599075141f26104a55c62abe7e"
  },
  {
    "url": "images/a04.jpg",
    "revision": "d2c42dd3fddcb286dc0dd1ab4c537f0a"
  },
  {
    "url": "images/a05.jpg",
    "revision": "b4235d3dc4f54168f3f84d3631442bf2"
  },
  {
    "url": "images/a06.jpg",
    "revision": "ff3b52e200ebcb7163067c8f05479fe3"
  },
  {
    "url": "images/banner.jpg",
    "revision": "621e20a91f575d4a534ba7d3177f0d77"
  },
  {
    "url": "images/banner.png",
    "revision": "8fde454a209b014d6473e5210dacb4a6"
  },
  {
    "url": "images/frc.png",
    "revision": "baa2f6debaea7241e6e86b71dfc21788"
  },
  {
    "url": "images/header.png",
    "revision": "038917693111dd92d6dacd48767003e2"
  },
  {
    "url": "images/hubshot.png",
    "revision": "2648944fb24261f0e0277db461022e1b"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "b597a06a00ace614fad6bcbcd66841c9"
  },
  {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "b5159f3477af8af2db05c2eb67c02f09"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "a8c8086a46d3db4e210d305fc3cfb7aa"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "8f2d4c44abde15093e267d3dc1c89d39"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "fc1f1dae2a0dd5f2963001c47054f62b"
  },
  {
    "url": "images/icons/mstile-144x144.png",
    "revision": "a2f39a1d2031e027cb9ef1f5a746b8b0"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "44d8903896e00edf1b4a4f4db9b33381"
  },
  {
    "url": "images/icons/mstile-310x150.png",
    "revision": "631f63df08b378c935c8f5cd5f468baf"
  },
  {
    "url": "images/icons/mstile-310x310.png",
    "revision": "4c25938ae50044181c4f0e354cc7629a"
  },
  {
    "url": "images/icons/mstile-70x70.png",
    "revision": "8ae5fba9f7383926633b499258dd485b"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "b2dcae62a6f7ea185828d39c4849454e"
  },
  {
    "url": "images/logo.png",
    "revision": "fd16bf81cfa0e2d782d3c56e0cd630fe"
  },
  {
    "url": "images/mcs.jpg",
    "revision": "ef3260b8d354215a0f8803fc06c030f0"
  },
  {
    "url": "images/ogimage.png",
    "revision": "058f79417f3e2bef994ccc707d46b945"
  },
  {
    "url": "images/oldlogoprofile.gif",
    "revision": "b307104ee031b674eb9f742ee3964549"
  },
  {
    "url": "images/pic01.jpg",
    "revision": "46ea08945d68543b14b9838571384e4f"
  },
  {
    "url": "images/pic02.jpg",
    "revision": "02eeb3e813abdf9f7c9391635e04c7ca"
  },
  {
    "url": "images/pic03.jpg",
    "revision": "8288ba997e7d8b66e62e3c9a808a8f4e"
  },
  {
    "url": "images/pic04.jpg",
    "revision": "bfbff42892f00509a10194a4439a8503"
  },
  {
    "url": "images/sponsors/1.png",
    "revision": "81d3e1cba6bfd4ed37112f3b7ed11a86"
  },
  {
    "url": "images/sponsors/10.png",
    "revision": "44cf4525d4ee742893991abaeaf5a1f0"
  },
  {
    "url": "images/sponsors/11.jpg",
    "revision": "eef2569796053999b5025dd7eb29d028"
  },
  {
    "url": "images/sponsors/12.png",
    "revision": "df4787813e0ab0028b427bec2f60bcc6"
  },
  {
    "url": "images/sponsors/13.png",
    "revision": "8e49c7d80cb8808283e68e04039c7fb3"
  },
  {
    "url": "images/sponsors/14.png",
    "revision": "246b1070b369da9e4662ccbed8460a33"
  },
  {
    "url": "images/sponsors/15.png",
    "revision": "a226978407dfec62a5687a1f35a7466b"
  },
  {
    "url": "images/sponsors/16.gif",
    "revision": "710c18b8b0bb33c11f7f3b0ea38ca195"
  },
  {
    "url": "images/sponsors/16.png",
    "revision": "b8c4e3f79a63a0cc2710ffa72d7cbb57"
  },
  {
    "url": "images/sponsors/17.gif",
    "revision": "b283b3a16608834bafcd731466d6e74a"
  },
  {
    "url": "images/sponsors/17.jpg",
    "revision": "585090a4624f99755e7e3204717b6416"
  },
  {
    "url": "images/sponsors/18.png",
    "revision": "d5667f899c9db277a88d04fac49daf6c"
  },
  {
    "url": "images/sponsors/19.png",
    "revision": "3d3800d7f817c7a8fd3469e8c2c0df24"
  },
  {
    "url": "images/sponsors/2.jpg",
    "revision": "49c309d15af5906c55883138a50965ce"
  },
  {
    "url": "images/sponsors/2.png",
    "revision": "d7995c812904d52853f5ee6b086c00b0"
  },
  {
    "url": "images/sponsors/3.gif",
    "revision": "3b807e325a6bdf63db67cecb06f5fd60"
  },
  {
    "url": "images/sponsors/4.png",
    "revision": "1c9008fdb1d6bccf57e9a3d65297f656"
  },
  {
    "url": "images/sponsors/5.png",
    "revision": "83e25da8631d746e2bb75976505f7110"
  },
  {
    "url": "images/sponsors/6.png",
    "revision": "b4219c1b7b4a2ae23d2a6cf2016ae368"
  },
  {
    "url": "images/sponsors/7.png",
    "revision": "86474eded18d15d600300a1cd87092dc"
  },
  {
    "url": "images/sponsors/8.png",
    "revision": "cf19a757586c705d70b5e16af7f024ba"
  },
  {
    "url": "images/sponsors/9.png",
    "revision": "6e71132b1c70021aa40b56f05dfa98ed"
  },
  {
    "url": "images/stream.png",
    "revision": "5c05b1500e20847277e6da7a00167d74"
  },
  {
    "url": "images/symbol.png",
    "revision": "7120ccc8e71c7387d29f674188b44a50"
  },
  {
    "url": "index.html",
    "revision": "b9313f80f1355cb8c464274ec8d60f6e"
  },
  {
    "url": "join.html",
    "revision": "4882a47afaf80b10bfb709cdf1518b48"
  },
  {
    "url": "left-sidebar.html",
    "revision": "f8691e4f446c32a5a8db0484e7ca54e4"
  },
  {
    "url": "live.html",
    "revision": "0ce337fbfae8835645676c98d33a563b"
  },
  {
    "url": "media.html",
    "revision": "fc58a8b8dd8d7dc9d41669f4c2e9e07f"
  },
  {
    "url": "ocscout.html",
    "revision": "e93927d159aeff0b3ad45e703f17313a"
  },
  {
    "url": "password_template.html",
    "revision": "c871eb9441553b4c9c0aaa831d862697"
  },
  {
    "url": "protected.html",
    "revision": "f3b1025d7e9188e222529bef07735463"
  },
  {
    "url": "resources.html",
    "revision": "261d358cc99f83437407a359d8090293"
  },
  {
    "url": "robots/2018.html",
    "revision": "98d973ae43e0a399db1195b88d3dab56"
  },
  {
    "url": "robots/assets/css/font-awesome.min.css",
    "revision": "4083f5d376eb849a458cc790b53ba080"
  },
  {
    "url": "robots/assets/css/ie8.css",
    "revision": "493bd1a2f65b116754e56a0176a4431c"
  },
  {
    "url": "robots/assets/css/main.css",
    "revision": "77f116d69585d31ee8a2351338c10093"
  },
  {
    "url": "robots/assets/fonts/fontawesome-webfont.svg",
    "revision": "3558944309282c860f2acb6c26ebf970"
  },
  {
    "url": "robots/assets/js/ie/html5shiv.js",
    "revision": "62ac572189514315ebfb31c43a225009"
  },
  {
    "url": "robots/assets/js/ie/respond.min.js",
    "revision": "9cccbcd9bc6aed2bb14df1013e185ce3"
  },
  {
    "url": "robots/assets/js/jquery.min.js",
    "revision": "895323ed2f7258af4fae2c738c8aea49"
  },
  {
    "url": "robots/assets/js/jquery.scrolly.min.js",
    "revision": "cdaa947ce14cf917fd3fbb34bbf69292"
  },
  {
    "url": "robots/assets/js/jquery.scrollzer.min.js",
    "revision": "17e12390dd8449f6a59ade5c4997b79a"
  },
  {
    "url": "robots/assets/js/main.js",
    "revision": "c9ee43550e30c2e1d8e1bfa49546c49e"
  },
  {
    "url": "robots/assets/js/skel.min.js",
    "revision": "df4f8930f3747bbadcdeb7dfe326ed73"
  },
  {
    "url": "robots/assets/js/util.js",
    "revision": "e620d8b66b577cd585b8d2ad84afb34c"
  },
  {
    "url": "robots/images/2018/avatar.jpg",
    "revision": "a502f9cdd679bd42003fea683c8714f2"
  },
  {
    "url": "robots/images/2018/drive.png",
    "revision": "23899afeb18a4fbebc27fbd2cb58ca95"
  },
  {
    "url": "robots/images/2018/failure.jpg",
    "revision": "1ef526995c042f4db18dba7d833fd39f"
  },
  {
    "url": "robots/images/2018/java.png",
    "revision": "fa9badf7337d7eea00c7b5f8ce6fe32b"
  },
  {
    "url": "robots/images/2018/pic03.jpg",
    "revision": "122ff075127f38af3f22c2cbae4ed3a4"
  },
  {
    "url": "robots/images/2018/redundancies.jpg",
    "revision": "a7884acde860d38738269793117b18fc"
  },
  {
    "url": "robots/images/2018/size.jpg",
    "revision": "347829d3cb36e6ff7928538316e3f172"
  },
  {
    "url": "robots/images/2018/wheels.gif",
    "revision": "0194b09b02f7dbf48345d0bafe042708"
  },
  {
    "url": "robots/images/banner.jpg",
    "revision": "a6f92884a27b49f0be618c3374694bb2"
  },
  {
    "url": "robots/images/pic01.jpg",
    "revision": "587b57091fe2aebb4bc39ed836a438f2"
  },
  {
    "url": "robots/images/pic02.jpg",
    "revision": "be1d5eb617466d97db51bc5e4907444a"
  },
  {
    "url": "service-worker.js",
    "revision": "a72bad927d3cf500f152d46c5079208c"
  },
  {
    "url": "sponsors.html",
    "revision": "22d42fa8e44dfaa047bbef782b18aa46"
  },
  {
    "url": "template.html",
    "revision": "4dc4c6750a3121f9290807f418ddb351"
  },
  {
    "url": "test.html",
    "revision": "d83fd46a2b51eed2e993c9da2438550e"
  },
  {
    "url": "thanks.html",
    "revision": "07c0edea902490ea2358758072034076"
  },
  {
    "url": "two-sidebar.html",
    "revision": "46305bdadfb1126af2184bf6c169b3e1"
  }
]);
workbox.googleAnalytics.initialize();
workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'css-cache',
    })
);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 100,
                // Cache for a maximum of a day
                maxAgeSeconds: 24 * 60 * 60,
            })
        ],
    })
);
