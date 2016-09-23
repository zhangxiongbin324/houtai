angular.module("zhj",[]).filter("f",function(){
	return function(e){
		return e.substr(0,6)+"..."
	}
})
