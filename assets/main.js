require.config({
  paths: {
    "text": "/assets/bower_components/text/text",
    "footwork": "/assets/bower_components/footwork/dist/footwork",
    "es6-promise": "/assets/bower_components/es6-promise/es6-promise",
    "fetch": "/assets/bower_components/fetch/fetch",
    "router": "/assets/router"
  }
});

require(['footwork', 'router', 'es6-promise', 'fetch'],
  function (fw, Router, promise) {
    promise.polyfill();

    window.fw = fw;
    fw.router.register('Router', Router);

    fw.start();
  }
);
