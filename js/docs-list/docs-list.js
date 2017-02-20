define(['footwork', 'lodash'], function (fw, _) {
  var versionPattern = /^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/;

  function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.version.split('.'),
        v2parts = v2.version.split('.');

    function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push("0");
      while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
      v1parts = v1parts.map(Number);
      v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        return 1;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      }
      else if (v1parts[i] > v2parts[i]) {
        return 1;
      }
      else {
        return -1;
      }
    }

    if (v1parts.length != v2parts.length) {
      return -1;
    }

    return 0;
  }

  return function DocsList () {
    var self = fw.viewModel.boot(this, {
      namespace: 'DocsList',
      afterResolve: function (resolve) {
        resolve(this.docs.fetch());
      }
    });

    var archivedReleases = ['0.8.0', '0.8.1', '1.0.0', '1.1.0', '1.2.0'];

    self.docs = fw.collection({
      url: window.docs_site + '/list-releases.php',
      parse: function (results) {
        return _.map(results, function (result) {
          var isRelease = result.match(versionPattern);

          return _.extend(result, {
            label:  isRelease ? 'v' + result : result,
            version: result,
            isRelease: isRelease,
            docUrl: docs_site + '/release/' + result,
            downloadZip: isRelease ? (docs_site + '/release/footwork-docs-' + result + '.zip') : null,
            downloadTGZ: isRelease ? (docs_site + '/release/footwork-docs-' + result + '.tar.gz') : null
          });
        }).concat(_.map(archivedReleases, function (release) {
          return {
            archived: true,
            label:  'v' + release,
            version: release,
            isRelease: true,
            docUrl: 'http://v1.footworkjs.com/docs/' + release + '/viewModel'
          };
        }));
      }
    });

    self.docList = fw.computed(function () {
      return self.docs().filter(function (release) {
        return !release.archived;
      }).sort(function (a, b) {
        if (!a.isRelease) {
          return -1;
        }
        return versionCompare(a, b);
      }).reverse();
    });

    self.archivedDocsList = fw.computed(function () {
      return self.docs().filter(function (release) {
        return !!release.archived;
      }).sort(versionCompare).reverse();
    });
  }
});
