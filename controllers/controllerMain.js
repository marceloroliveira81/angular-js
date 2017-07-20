angular.module('main')
.controller('controllerMain', function($scope, $http){
	$scope.mensagem = 'AngularJS - Bootstrap';

	$scope.tituloPainel = 'Lista de Pessoas';
	$scope.pessoas = {};

	$scope.filtro = "";

	$http.get('http://localhost/webservice-angular-js/lista-pessoas.json')
	.then(function(response){
		$scope.pessoas = response.data;
	});
});