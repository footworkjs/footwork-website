define(['footwork', 'jquery', 'highlightjs'], function (fw, $) {
  fw.components.registerLocation('main-page', { template: '/main.html' });
  fw.components.registerLocation('about-page', { template: '/about/index.html' });

  return function Router () {
    var self = fw.router.boot(this, {
      namespace: 'Router',
      routes: [
        {
          route: '/',
          controller: function () {
            this.outlet('main', { display: 'main-page', onComplete: function (container) {
              $(container).find('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
              });
            }});
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
