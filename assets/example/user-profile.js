function UserProfile () {
  var self = fw.dataModel.boot(this, {
    namespace: 'UserProfile',
    url: '/profile',
    afterResolve: function () {
      return self.fetch();
    }
  });

  self.name = fw.observable().map('name', self);
  self.id = fw.observable(window.userId).map('id', self);
}
















