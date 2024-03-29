angular.module('resthitter', ['ui.bootstrap', 'xeditable', 'ngRoute'])
.run(['editableOptions', function(editableOptions){
  // this is something added by xeditable indicating what icons are available
  editableOptions.theme = 'bs3';
}])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/list.html',
    controller: 'ListController',
    controllerAs: 'lc'
  })
  .when('/person/:id', {
    templateUrl: 'templates/detail.html',
    controller: 'DetailController',
    controllerAs: 'dc'
  });
}]);
