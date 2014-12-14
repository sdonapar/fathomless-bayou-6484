var dressCatControllers = angular.module('dressCatControllers', []);

dressCatControllers.controller('DressMatList',['$scope','$http', function ($scope,$http) {
	$http.get('/api/dressmat').success( function(data){
		$scope.dressmat = data;
	});

  	$scope.orderProp = 'age';
}]);

dressCatControllers.controller('DressMatDetail', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams,$http) {
    console.log($routeParams.phoneId)
    $http.get('/api/phones/' + $routeParams.phoneId).success(function(data){
    	$scope.phone = data;
    	console.log(data);
    });
  }]);	