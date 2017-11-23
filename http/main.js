
angular.module('angularTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// Cuando se cargue la página, pide del API todos los TODOs
	$http.get('http://localhost:3000/api/product/')
		.success(function(data) {
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'};

			$scope.products = data;
			console.log('Entro: ' + data);
		})
		.error(function(data, status, headers, config) {
			console.log('Error: ' + data);
		});

}

