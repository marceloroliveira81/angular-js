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
	
	$scope.status = "";

	$scope.enviar = function() {
		//console.log($scope.pessoa);

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
	};

	$scope.excluir = function($pessoa) {
		$http.post('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=excluir', $pessoa)
			.then(function(response){				
				if (response.data == 'excluido') {
					$scope.status = 'Exclúído com sucesso';

					$http.get('http://localhost/webservice-angular-js/controller/cUsuario.php?acao=listar')
						.then(function(response){
							$scope.pessoas = response.data;
						});

				}
			});
	};
});