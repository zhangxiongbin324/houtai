'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
	.controller('shouye',function($scope, $http){
		$scope.s={}
	  var server="http://123.56.227.177:2503";
            $http({
                method:"GET",
                url:server +"/jing-ex"
            }).success(function(e){
                $scope.data=e
            })
            $scope.edit=function(e){
                $scope.f=true
                $scope.s=e
                var content=$scope.s.content;
     		   	$('.abc').summernote('code',content)
            }
            $scope.save=function(){  
            	$scope.s.content =$(".abc").summernote("code");
                $http({
                    method:"PUT",
                    url:server+"/jing-ex/"+$scope.s.id,
                    data:$scope.s
                }).success(function(){
                	$scope.f = false;
                })
            }
            $scope.addsave=function(){
            	console.log($(".abc").summernote("code"))
                $scope.s.content=$(".abc").summernote("code")
                $http({
                    url:server+"/jing-ex/",
                    method:"POST",
                    data:$scope.s
                }).success(function(){
                    $scope.data.push($scope.s)
                })
            }
            $scope.del=function(e){
                $http({
                    url:server+"/jing-ex/"+ e.id,
                    method:"DELETE"
                }).success(function(){
                    $scope.data.splice($scope.data.indexOf(e),1)
                })
            } 
            $scope.tj=function(){
            	$scope.f=true
            }
            $scope.yc=function(){
            	$scope.f=false;
            }
		})

	