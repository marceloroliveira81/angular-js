angular.module('minhasDirectivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		tituloPainel : '@titulo'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'directives/meu-painel.html';

	return ddo;	
});