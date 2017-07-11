angular.module('minhasDirectivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo  : '@tituloPainel'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'directives/meu-painel.html';

	return ddo;	
});