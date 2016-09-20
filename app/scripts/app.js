'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
	.module('App', ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("main", {
			url: "/main",
			templateUrl: "views/main.html",
			controller: "main"
		})
		$urlRouterProvider.when('', '/main');
	});