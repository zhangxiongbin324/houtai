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
		}).state("page", {
			url: "/pagen",
			templateUrl: "views/page.html",
			controller: "page"
		}).state("jing_img", {
			url: "/jing_img",
			templateUrl: "views/jing_img.html",
			controller: "jing_img"
		})
		$urlRouterProvider.when('', '/main');
	});