(function(){
'use strict';

angular.module('mtg', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){


	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'main': {
				templateUrl: '../views/home.html',
				controller: 'homeController',
				controllerAs: 'controller',
			},
			'nav': {
				templateUrl:'../views/partials/nav.html',
			},
		},
	})
	.state('about', {
		url: '/about',
		views: {
			'main': {
				templateUrl: '../views/about.html',
				controller: 'aboutController',
				controllerAs: 'controller',
			},
			'nav': {
				templateUrl:'../views/partials/nav.html',
			},
		},
	});
});
	
})();