angular.module('Yaprakov', ['ngRoute', 'appRoutes', 'ngStorage', 'Controllers', 'Services'])
.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}])/*
.config(['fileManagerConfigProvider', function (config) {
      var defaults = config.$get();
      config.set({
        appName: 'angular-filemanager',
        pickCallback: function(item) {
          var msg = 'Picked %s "%s" for external use'
            .replace('%s', item.type)
            .replace('%s', item.fullPath());
          window.alert(msg);
        },

        allowedActions: angular.extend(defaults.allowedActions, {
          pickFiles: true,
          pickFolders: false,
        }),
      });
    }]).config(function (fileManagerConfigProvider) {
  var defaults = fileManagerConfigProvider.$get();

  fileManagerConfigProvider.set({
    copyUrl: 'http://localhost:8080/files/copy', // where {/files} is the mount path of this module.
    createFolderUrl: 'http://localhost:8080/files/createFolder',
    downloadFileUrl: 'http://localhost:8080/files/download',
    editUrl: 'http://localhost:8080/files/edit',
    removeUrl: 'http://localhost:8080/files/remove',
    renameUrl: 'http://localhost:8080/files/rename',
    uploadUrl: 'http://localhost:8080/files/upload',
    getContentUrl: 'http://localhost:8080/files/getContent',
    listUrl: 'http://localhost:8080/files/list',
  });
})*/
;