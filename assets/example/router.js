function Router () {
  var self = fw.router.boot(this, {
    routes: [
      {
        path: '/',
        controller: function () {
          self.outlet('main-display', 'index-page');
        }
      }, {
        path: '/news(/:article)',
        controller: function (params) {
          self.outlet('main-display', 'news-page', {
            params: params
          });
        }
      }
    ]
  });
}










