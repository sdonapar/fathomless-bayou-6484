var myapp = angular.module('fashonstore', [
  'ngRoute',
  'dressCatControllers'
]);

myapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dressmat', {
        templateUrl: 'partials/dressmat-list.html',
        controller: 'DressMatList'
      }).
      when('/phones/:dressId', {
        templateUrl: 'partials/dressmat-detail.html',
        controller: 'DressMatDetail'
      }).
      otherwise({
        redirectTo: '/dressmat'
      });
  }]);
