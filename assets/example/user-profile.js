function UserProfile () {
  var self = fw.dataModel.boot(this, {
    namespace: 'UserProfile',
    url: '/profile',
    afterResolve: function () {
      return self.fetch();
    }
  });

  self.name = fw.observable().mapTo('name', self);
  self.id = fw.observable(window.userId).mapTo('id', self);
}
















