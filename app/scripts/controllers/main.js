'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
var server = "http://123.56.227.177:2503"
var files = []
var setFiles = function(element) {
	files = [];
	for(var i = 0; i < element.files.length; i++) {
		files.push(element.files[i]);
	}
};
angular.module('App')
    .controller('main', function($scope, $http) {
	$scope.updata = {}
	$scope.updata.img = ""
	$scope.AddRequired = function() {
		console.log($(".cc1").summernote("code"))
		$scope.updata.content = $(".cc1").summernote("code")
		$http({
			url: server + "/jing-exec/",
			method: "post",
			data: $scope.updata
		}).success(function() {
			$scope.isshow = false;
		})
	}

	$scope.params = {
		"subdir": "images",
		"comments": "",
		"uniqueFilename": true
	};
	$scope.uploadFiles = function() {
		var fd = new FormData()
		for(var i in files) {
			fd.append("uploadedFile", files[i])
		}
		$http({
			url: server + "/jing-upload/",
			method: "POST",
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity,
			params: $scope.params,
			data: fd
		}).success(function(a) {
			console.log(a),
			
			$scope.updata.img = a[0].filename
		})

	}

	$scope.isfor = false;
	$scope.qxiao = function(e) {
		$scope.isshow = false;
	}
	$http({
		method: "GET",
		url: server + "/jing-exec/"
	}).success(function(e) {
		$scope.data = e
	})
	$scope.Edit = function(e) {
		$scope.isshow = true;
		$scope.updata = e;
		var content=$scope.updata.content;
        $('.cc1').summernote('code',content)
	}
	$scope.Required = function() {
		$scope.updata.content =$(".cc1").summernote("code");

					$http({
						method: "PUT",
						url: server + "/jing-exec/" + $scope.updata.id,
						data: $scope.updata
					}).success(function() {
						$scope.isshow = false;
					})
				}
	$scope.Add = function() {
		$scope.isshow = true
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