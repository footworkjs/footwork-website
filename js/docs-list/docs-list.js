define(['footwork'], function (fw) {
  return function DocsList () {
    var self = fw.viewModel.boot(this, {
      namespace: 'DocsList'
    });

    self.docs = fw.collection({
      url: window.docs_list_endpoint
    });

    self.docs.fetch();
  }
});
