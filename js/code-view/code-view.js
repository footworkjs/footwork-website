define(['footwork', 'jquery'],
  function (fw, $) {
    return function Code (params) {
      var tasksCompleted = fw.observable(0);
      var $container;
      var sourceCode;

      var self = fw.viewModel.boot(this, {
        namespace: 'Code',
        afterRender: function (container) {
          $container = $(container);
          tasksCompleted(tasksCompleted() + 1);
        }
      });

      self.codeType = params.file.split('.').pop()
      self.taskWatch = tasksCompleted.subscribe(function (numCompleted) {
        if (numCompleted > 1) {
          var $codeBlock = $container.find('pre code');
          $codeBlock.text(sourceCode);
          $codeBlock.each(function(i, block) {
            hljs.highlightBlock(block);
          });
        }
      });

      $.get('/assets/code/' + params.file)
        .done(function (result) {
          sourceCode = result;
          tasksCompleted(tasksCompleted() + 1);
        })
    }
  }
);
