angular.module('MyApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.login = function() {
    	      	console.log("In login");
      Auth.login({
        email: $scope.email,
        password: $scope.password
      });
    };
  }]);