define(['footwork', 'jquery', 'highlightjs'], function (fw, $) {
  fw.components.registerLocation('main-page', { template: '/main.html' });
  fw.components.registerLocation('about-page', { template: '/about/index.html' });

  function handleTextResponse (response) {
    if (response.ok) {
      return response.text();
    }
  }

  return function Router () {
    var self = fw.router.boot(this, {
      namespace: 'Router',
      routes: [
        {
          route: '/',
          controller: function () {
            this.outlet('main', {
              display: 'main-page',
              onComplete: function (container) {
                var $examples = $(container).find('.example.container');

                var loaded = 0;
                function triggerAfterLoad () {
                  loaded++;
                  if(loaded > 1) {
                    $(container).find('pre code').each(function(i, block) {
                      hljs.highlightBlock(block);
                    });
                  }
                }

                fetch('/assets/example/example.js').then(handleTextResponse).then(function (data) {
                  $examples.find('.javascript').text(data);
                  triggerAfterLoad();
                });
                fetch('/assets/example/example.html').then(handleTextResponse).then(function (data) {
                  $examples.find('.html').text(data);
                  triggerAfterLoad();
                });
              }
            });
          }
        },
        {
          route: '/about',
          controller: function () {
            this.outlet('main', 'about-page');
          }
        },
        {
          route: '/news/:year/:month/:day/:post',
          controller: function showNewsBlog (params) {
            console.info(params);
          }
        }
      ]
    });
  }
});
