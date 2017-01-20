require.config({
  paths: {
    "jquery": "/assets/bower_components/jquery/dist/jquery",
    "text": "/assets/bower_components/text/text",
    "footwork": "/assets/bower_components/footwork/dist/footwork",
    "es6-promise": "/assets/bower_components/es6-promise/es6-promise",
    "fetch": "/assets/bower_components/fetch/fetch",
    "router": "/assets/router",
    "tether": "/assets/bower_components/tether/dist/js/tether",
    "bootstrap": "/assets/bower_components/bootstrap/dist/js/bootstrap",
    "expose-tether":  "/assets/expose-tether",
  },
  shim: {
    "bootstrap": ["tether", "jquery"]
  },
  map: {
    "bootstrap": {
      "tether": "expose-tether"
    }
  },
});

require(['footwork', 'router', 'es6-promise', 'fetch', 'bootstrap'],
  function (fw, Router, promise) {
    promise.polyfill();

    window.fw = fw;
    fw.router.register('Router', Router);

    fw.start();
  }
);
