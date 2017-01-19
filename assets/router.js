define(['footwork'], function (fw) {
  fw.components.registerLocation('main-page', { template: '/main.html' });
  fw.components.registerLocation('about-page', { template: '/about/index.html' });

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
        }
      ]
    });
  }
});
