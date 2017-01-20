define(['footwork', 'lodash'], function (fw, _) {
  return function BlogPosts () {
    var self = fw.viewModel.boot(this, {
      namespace: 'BlogPosts'
    });

    self.posts = fw.observable(window.posts);
  }
});
