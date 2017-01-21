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
            this.outlet('main', 'main-page');
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
