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
	.module('App',["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("main", {
			url: "/main",
			templateUrl: "views/main.html",
			controller: "main"
		}).state("page", {
			url: "/page",
			templateUrl: "views/page.html",
			controller: "page"
		}).state("shouye", {
			url: "/shouye",
			templateUrl: "views/shouye.html",
			controller: "shouye"
		}).state("jing_img",{
			url:"/jing_img",
			templateUrl:"views/jing_img.html",
			contrroller:'jing_img'
		})
		
		$urlRouterProvider.when('', '/main');
	})