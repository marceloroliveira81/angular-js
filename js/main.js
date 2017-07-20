angular.module('main', ['minhasDirectivas', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$routeProvider
	
	.when('/principal', {
		templateUrl : 'pages/principal.html',
		controller : 'controllerMain'
	})
	
	.otherwise({
		template : '<h1>Rota Padrão</h1>'
	});

	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);
	
});