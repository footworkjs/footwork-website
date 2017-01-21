function Router () {
  var self = fw.router.boot(this, {
    routes: [
      {
        route: '/about',
        controller: function () {
          this.outlet('main-display', 'about-page');
        }
      }, {
        route: '/news',
        controller: function () {
          this.outlet('main-display', 'news-page');
        }
      }
    ]
  });
}










