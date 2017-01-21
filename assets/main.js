require.config({
  paths: {
    "jquery": "/assets/bower_components/jquery/dist/jquery",
    "lodash": "/assets/bower_components/lodash/dist/lodash",
    "text": "/assets/bower_components/text/text",
    "footwork": "/assets/bower_components/footwork/dist/footwork",
    "es6-promise": "/assets/bower_components/es6-promise/es6-promise",
    "fetch": "/assets/bower_components/fetch/fetch",
    "highlightjs": "/assets/bower_components/highlightjs/highlight.pack",
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

require(['footwork', 'lodash', 'router', 'es6-promise', 'fetch', 'bootstrap'],
  function (fw, _, Router, promise) {
    promise.polyfill();

    fw.options.fetchOptions = {
      credentials: 'same-origin',
      mode: 'cors'
    };

    _.each(window.posts, function (post) {
      console.info(post);
    });

    fw.router.register('Router', Router);
    fw.components.registerLocation(['docs-list', 'blog-posts'], '/js/', true);

    fw.start();

    window.fw = fw;
  }
);
