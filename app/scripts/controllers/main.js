'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
	.controller('main', function($scope, $http) {

		var server = "http://123.56.227.177:2503";

		$scope.isfor = false;
		$http({
			method: "GET",
			url: server + "/jing-exec/"
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
				url: server + "/jing-exec/" + $scope.c.id,
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
				url: server + "/jing-exec/",
				data: $scope.c
			}).success(function() {
				$scope.data.push($scope.c);
				$scope.isshow = false;
			})
		}

		$scope.Del = function(e) {
			$scope.isfor = true;
			$scope.fuc = function() {
				$http({
					method: "DELETE",
					url: server + "/jing-exec/" + e.id
				}).success(function() {
					$scope.data.splice($scope.data.indexOf(e), 1)
				})
				$scope.isfor = false;

			}
			$scope.fuv = function() {
				$scope.isfor = false;
			}

		}

		//		function shanshuo() {
		//			var color = "#F0F0F0 | #C0C0C0 | #E4E4E4";
		//			color = color.split(" | ");
		//			document.getElementById('blink').style.color = color[parseInt(Math.random() * color.length)]
		//		}
		//		setInterval("shanshuo()", 500)

	});