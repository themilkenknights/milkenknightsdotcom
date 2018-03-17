importScripts('assets/js/workbox/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "1f03b44e2d3ae9ced40b6f66bf3c25ab"
  },
  {
    "url": "about.html",
    "revision": "5c382e897cfcf9162b79bf27722122c5"
  },
  {
    "url": "achievements.html",
    "revision": "e24dd502f357d9c78f02fd8bd75fa476"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "346abc0338e97fcdf3e4b947b1f7eb25"
  },
  {
    "url": "assets/css/ie8.css",
    "revision": "dc752a9ce75c936f1f7a01d5e30c5f42"
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
    "revision": "0bdc6dc06aab116e95ff76be4a7cddcd"
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
    "revision": "9526d309a90b28aefc363a35ce60cfba"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "6910b2df4d1cc219b2f75cb610634958"
  },
  {
    "url": "assets/js/main.js",
    "revision": "e18ca556d551f2d1dd27f9f4e266581f"
  },
  {
    "url": "assets/js/OLD_jquery.min.js",
    "revision": "78beaec3c9e715fead1c89f96e76e21c"
  },
  {
    "url": "assets/js/skel.min.js",
    "revision": "9f8158f54b71d54f3d325023bcd48536"
  },
  {
    "url": "assets/js/util.js",
    "revision": "e620d8b66b577cd585b8d2ad84afb34c"
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
    "revision": "9b4378e23591949028c5050bc93b080b"
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
    "revision": "83e5d9db8c6dfca582a1113b1dd1ddea"
  },
  {
    "url": "downloads.html",
    "revision": "0ec419dbc2403aa4bc1169b61855c26e"
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
    "revision": "0bb6d6b188a20671dc4fe7fb72eabdfb"
  },
  {
    "url": "images/a01.jpg",
    "revision": "99c24ece3514041f9fb9431fa1f05f42"
  },
  {
    "url": "images/a02.jpg",
    "revision": "282379255fd387a4d482e557e3c4ed73"
  },
  {
    "url": "images/a03.jpg",
    "revision": "0f7c3008790d00c6792b1901fe046d5e"
  },
  {
    "url": "images/a04.jpg",
    "revision": "5e6b4d94c8c09caceabab07e8b25e711"
  },
  {
    "url": "images/a05.jpg",
    "revision": "757b6b08dd95bb850bdbaeedded3ce2b"
  },
  {
    "url": "images/a06.jpg",
    "revision": "d8c054903c6a313fd6e9286203ec7081"
  },
  {
    "url": "images/banner.jpg",
    "revision": "029c8d7adf2486a216986647e581ec45"
  },
  {
    "url": "images/banner.png",
    "revision": "61a7edc1995b86471d990649a9592339"
  },
  {
    "url": "images/frc.png",
    "revision": "be1955b7540ac33509853e98f84a0e82"
  },
  {
    "url": "images/header.png",
    "revision": "8559cfc5ae7b0203facfe37c3f815486"
  },
  {
    "url": "images/hubshot.png",
    "revision": "c21f7274e83b797a5ef850ef4cad9891"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "0ed2bc9e332735ae79aa87621a446dd6"
  },
  {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "0833313723840e9122a00a5b1f68deaf"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "0425b5e974cde5e0097e0c769c258b4b"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "b0ee21790682ead838161236765784f1"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "dfa9ea38892069f0e3f776761de6df13"
  },
  {
    "url": "images/icons/mstile-144x144.png",
    "revision": "55373e1ed00e36ae3a3e076cc0963d00"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "23895283e42981ca4c168d36229d9e31"
  },
  {
    "url": "images/icons/mstile-310x150.png",
    "revision": "84cdbe7242cf4a624bfdd1d8176c896c"
  },
  {
    "url": "images/icons/mstile-310x310.png",
    "revision": "6fddfbe6a5fd018baa75aaa59dfaa94d"
  },
  {
    "url": "images/icons/mstile-70x70.png",
    "revision": "205536df0edb8789c81818edc397e99d"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "b2dcae62a6f7ea185828d39c4849454e"
  },
  {
    "url": "images/logo.png",
    "revision": "b23e293c35b1403156cc2bce35bf5491"
  },
  {
    "url": "images/mcs.jpg",
    "revision": "447f0561509cb985c0a269d683290303"
  },
  {
    "url": "images/oldlogoprofile.gif",
    "revision": "89c91934ca45bdf83a975a45ab04909f"
  },
  {
    "url": "images/pic01.jpg",
    "revision": "e89247132b124c223e760f087cd94adb"
  },
  {
    "url": "images/pic02.jpg",
    "revision": "5d89cd489d9ddd2cdeb4de1cdbf273b0"
  },
  {
    "url": "images/pic03.jpg",
    "revision": "d8d0b18bf693c079b6aef78201ffadf9"
  },
  {
    "url": "images/pic04.jpg",
    "revision": "72ab1f881d09bade807d24f5ff8d4b1d"
  },
  {
    "url": "images/sponsors/1.png",
    "revision": "79ebe42094dfe4e3a96de95a3dfb075b"
  },
  {
    "url": "images/sponsors/10.png",
    "revision": "928956e905746dc59cb41a79b35eeacd"
  },
  {
    "url": "images/sponsors/11.jpg",
    "revision": "bf9c619349d1c6ecb84953a942e289c9"
  },
  {
    "url": "images/sponsors/12.png",
    "revision": "2b669c01cb7e7bf0c631cefd92a0c7aa"
  },
  {
    "url": "images/sponsors/13.png",
    "revision": "f3a6d035838d83ce8f2f97743655a4c9"
  },
  {
    "url": "images/sponsors/14.png",
    "revision": "e3a41751c23ecc98748df1b5e573783b"
  },
  {
    "url": "images/sponsors/15.png",
    "revision": "6a808933d07fa40c610e7b59f019e1e2"
  },
  {
    "url": "images/sponsors/16.gif",
    "revision": "933f3533d99aeea2d8158fe4b2f30b9e"
  },
  {
    "url": "images/sponsors/17.gif",
    "revision": "b283b3a16608834bafcd731466d6e74a"
  },
  {
    "url": "images/sponsors/18.png",
    "revision": "77f2a7d1709260b4978d580b2004a968"
  },
  {
    "url": "images/sponsors/19.png",
    "revision": "0a3b621ee1e6a12abb7fc9c4bd8cccc7"
  },
  {
    "url": "images/sponsors/2.png",
    "revision": "e32ce74eb7078da02619d592e696a609"
  },
  {
    "url": "images/sponsors/3.gif",
    "revision": "3b807e325a6bdf63db67cecb06f5fd60"
  },
  {
    "url": "images/sponsors/4.png",
    "revision": "aa35d358ed6f39233440c85c85510af4"
  },
  {
    "url": "images/sponsors/5.png",
    "revision": "d75f3fdf88fb4a9adfd1685811d4c381"
  },
  {
    "url": "images/sponsors/6.png",
    "revision": "3ec08c4ae0843d9e6069d06ee602d5ef"
  },
  {
    "url": "images/sponsors/7.png",
    "revision": "516ad3bd2a688a1ee66bc223b5fcf947"
  },
  {
    "url": "images/sponsors/8.png",
    "revision": "f4440a8bfc1b77d6e86e70512f0001ad"
  },
  {
    "url": "images/sponsors/9.png",
    "revision": "95e89c586bafa3f8430561e1c69c3843"
  },
  {
    "url": "images/stream.png",
    "revision": "ea8983d10f784531439a1d7bb5201830"
  },
  {
    "url": "index.html",
    "revision": "79da642ef05826ab37512f47829d3b91"
  },
  {
    "url": "join.html",
    "revision": "6c2b3a5b168668fc6b4202f602540c10"
  },
  {
    "url": "left-sidebar.html",
    "revision": "f8691e4f446c32a5a8db0484e7ca54e4"
  },
  {
    "url": "live.html",
    "revision": "bb82ae83f17b580e8cc261ffc65e0d8f"
  },
  {
    "url": "media.html",
    "revision": "11c2dc365b4429c1533f1915c4a287a8"
  },
  {
    "url": "password_template.html",
    "revision": "c871eb9441553b4c9c0aaa831d862697"
  },
  {
    "url": "protected.html",
    "revision": "f73ae3434d242e32d861d70ff271f5d6"
  },
  {
    "url": "resources.html",
    "revision": "23eaeed73b07f262fc2b6fd69abfac29"
  },
  {
    "url": "robots/2018.html",
    "revision": "d50d72f7753a4d7d957f8b29b4a60aea"
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
    "revision": "4c1fecd6d7db2403889eeb61613943ae"
  },
  {
    "url": "robots/images/2018/drive.png",
    "revision": "729eb59be936938816896300fe0ce89c"
  },
  {
    "url": "robots/images/2018/failure.jpg",
    "revision": "a9f8e27ba6ea02bec784ecb8045412d5"
  },
  {
    "url": "robots/images/2018/intakespring.gif",
    "revision": "187e395789601e64105fe94a1bc39ef6"
  },
  {
    "url": "robots/images/2018/java.png",
    "revision": "cb1bbc67fdbe1200db39224c9221f30a"
  },
  {
    "url": "robots/images/2018/pic03.jpg",
    "revision": "bf4c5f6d87ed474d815410a0b16f078d"
  },
  {
    "url": "robots/images/2018/redundancies.jpg",
    "revision": "8998ecdea8baff9386baf4b5875e4eac"
  },
  {
    "url": "robots/images/2018/size.jpg",
    "revision": "d9f0dce776895df6bdc51f16752eccb5"
  },
  {
    "url": "robots/images/2018/wheels.gif",
    "revision": "0194b09b02f7dbf48345d0bafe042708"
  },
  {
    "url": "robots/images/banner.jpg",
    "revision": "8ee6c3ad52294f76cb0161d6c95fc840"
  },
  {
    "url": "robots/images/pic01.jpg",
    "revision": "0fadba5de81eb44c251c007f07876365"
  },
  {
    "url": "robots/images/pic02.jpg",
    "revision": "f5f155a6df67ada414f4dd6bf8d54a1d"
  },
  {
    "url": "service-worker.js",
    "revision": "a72bad927d3cf500f152d46c5079208c"
  },
  {
    "url": "template.html",
    "revision": "308a4e75bab104160ce5aa184ac44112"
  },
  {
    "url": "thanks.html",
    "revision": "cba55df26806aa145ccfe84b7768ea36"
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
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);