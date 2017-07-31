angular.module('main', ['minhasDirectivas', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$routeProvider
	
	.when('/principal', {
		templateUrl : 'pages/principal.html',
		controller : 'controllerMain'
	})

	.when('/principal/novo', {
		templateUrl : 'pages/novo.html',
		controller : 'controllerMain'
	})

	.when('/principal/alterar/:id_usuario', {
		templateUrl : 'pages/novo.html',
		controller : 'controllerMain'
	})
	
	.otherwise({
		redirectTo : '/principal'
	});

	$locationProvider.hashPrefix('');
	
});