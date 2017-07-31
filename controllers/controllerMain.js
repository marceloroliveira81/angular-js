angular.module('main')
.controller('controllerMain', function($scope, $http, $routeParams){
	$scope.mensagem = 'AngularJS - Bootstrap';

	$scope.tituloPainel = 'Lista de Pessoas';
	
	$scope.pessoas = [];

	$scope.filtro = "";

	$http.get('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=listar')
		.then(function(response){
			$scope.pessoas = response.data;
		});

	$scope.pessoa = {};
	
	$scope.status = "";

	if ($routeParams.id_usuario) {
		$http.get('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=buscarPorId&id=' + $routeParams.id_usuario)
		.then(function(response){
			$scope.pessoa = response.data;
		});		
	}

	$scope.enviar = function() {

		if ($routeParams.id_usuario) {
			$http.post('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=alterar', $scope.pessoa)
			.then(function(response){				
				if (response.data == 'alterado') {
					$scope.status = 'Alterado com sucesso';
					$scope.pessoa = {};
					$scope.form.$setPristine();
					$scope.form.$setValidity();
					$scope.form.$setUntouched();
				}
			});
		} else {
			$http.post('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=cadastrar', $scope.pessoa)
			.then(function(response){				
				if (response.data == 'cadastrado') {
					$scope.status = 'Cadastrado com sucesso';
					$scope.pessoa = {};
					$scope.form.$setPristine();
					$scope.form.$setValidity();
					$scope.form.$setUntouched();
				}
			});
		}

	};

	$scope.excluir = function(pessoa) {
		$http.post('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=excluir', pessoa)
			.then(function(response){				
				if (response.data == 'excluido') {
					$scope.status = 'Exclúído com sucesso';
					$scope.pessoas.splice($scope.pessoas.indexOf(pessoa));
				}
			});
	};
});