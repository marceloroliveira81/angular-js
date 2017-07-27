angular.module('main')
.controller('controllerMain', function($scope, $http){
	$scope.mensagem = 'AngularJS - Bootstrap';

	$scope.tituloPainel = 'Lista de Pessoas';
	$scope.pessoas = {};

	$scope.filtro = "";

	$http.get('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=listar')
	.then(function(response){
		$scope.pessoas = response.data;
	});

	$scope.pessoa = {};

	$scope.enviar = function() {
		console.log($scope.pessoa);
	};
});