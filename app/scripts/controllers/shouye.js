'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
var server = "http://123.56.227.177:2503"
angular.module('App')
	.controller('shouye', function($scope, $http) {
		$http({
			method: "GET",
			url: server + "/jing-ex/"
		}).success(function(e) {
			$scope.data = e
		})

		$scope.Edit = function(e) {
			$scope.isshow = true;
			$scope.c = e;
		}

		$scope.Required = function() {
			$http({
				method: "PUT",
				url: server + "/jing-ex/" + $scope.c.id,
				data: $scope.c
			}).success(function() {
				$scope.isshow = false;
			})
		}

		$scope.Add = function() {
			$scope.isshow = true
		}

		$scope.AddRequired = function() {
			$http({
				method: "POST",
				url: server + "/jing-ex/",
				data: $scope.c
			}).success(function() {
				$scope.data.push($scope.c);
				$scope.isshow = false;
				$scope.c = ''
			})
		}

		$scope.Del = function(e) {
			$http({
				method: "DELETE",
				url: server + "/jing-ex/" + e.id
			}).success(function() {
				$scope.data.splice($scope.data.indexOf(e), 1)
			})
		}
	});