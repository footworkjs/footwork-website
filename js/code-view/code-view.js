define(['footwork', 'jquery'],
  function (fw, $) {
    return function Code (params) {
      var $container;

      var self = fw.viewModel.boot(this, {
        namespace: 'Code',
        afterRender: function (container) {
          $container = $(container);
        },
        afterResolve: function (resolve) {
          fetch('/assets/code/' + params.file).then(function (response) {
            if (response.ok) {
              response.text().then(function (result) {
                $container.find('pre code').text(result);
                resolve();
              });
            }
          });
        }
      });

      self.codeType = params.file.split('.').pop();
    }
  }
);
