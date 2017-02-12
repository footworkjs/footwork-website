function Router () {
  var self = fw.router.boot(this, {
    routes: [
      {
        state: '/',
        controller: function () {
          self.outlet('main-display', 'index-page');
        }
      }, {
        state: '/news(/:article)',
        controller: function (params) {
          self.outlet('main-display', 'news-page', {
            params: params
          });
        }
      }
    ]
  });
}










