define(['footwork'], function (fw) {
  return function Router () {
    var self = fw.router.boot(this, {
      namespace: 'Router',
      routes: [
        {
          route: '/',
          controller: function () {
            console.info('default route');
          }
        }
      ]
    });
  }
});
