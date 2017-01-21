function Router () {
  var self = fw.router.boot(this, {
    routes: [
      {
        route: '/',
        controller: function () {
          self.outlet('main-display', 'index-page');
        }
      }, {
        route: '/news(/:article)',
        controller: function (params) {
          self.outlet('main-display', 'news-page', {
            params: params
          });
        }
      }
    ]
  });
}










