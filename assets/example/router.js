function Router () {
  var self = fw.router.boot(this, {
    routes: [
      {
        route: '/',
        controller: function () {
          this.outlet('main-display', 'index-page');
        }
      }, {
        route: '/news/:article',
        controller: function (params) {
          this.outlet('main-display', 'news-page', {
            params: params
          });
        }
      }
    ]
  });
}










