define(['footwork', 'jquery', 'highlightjs'], function (fw, $) {
  fw.components.registerLocation('main-page', { template: '/main.html' });
  fw.components.registerLocation('info-page', { template: '/info/index.html' });
  fw.components.registerLocation('get-started-page', { template: '/get-started/index.html' });
  fw.components.registerLocation('documentation-page', { template: '/documentation/index.html' });

  function handleTextResponse (response) {
    if (response.ok) {
      return response.text();
    }
  }

  return function Router () {
    var self = fw.router.boot(this, {
      namespace: 'Router',
      outlet: {
        loading: 'loading-display',
        transition: 400,
        onComplete: function () {
          $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });
        }
      },
      routes: [
        {
          path: '/',
          controller: function () {
            this.outlet('main', 'main-page');
          }
        },
        {
          path: '/info',
          controller: function () {
            this.outlet('main', 'info-page');
          }
        },
        {
          path: '/documentation',
          controller: function () {
            this.outlet('main', 'documentation-page');
          }
        },
        {
          path: '/get-started',
          controller: function () {
            this.outlet('main', 'get-started-page');
          }
        },
        {
          path: '/news/:year/:month/:day/:post',
          controller: function showNewsBlog (params) {
            console.info(params);
          }
        }
      ]
    });
  }
});
