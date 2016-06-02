 
angular.module('App')
   .controller('FormCtrl', function($scope, $document , $http){   
       $scope.submit = function(){

       	  var endpoint = localStorage.getItem('endpoint');
	      var req = {
		    	method: 'POST',
		    	url: './sendMail',
		    	headers: {
			    'Content-Type': 'application/json'
			    },
		        data: { endpoint : endpoint ,  user : $scope.user}
		}

		$http(req).then(function(){console.log('aaa');}, function(){console.log('bbb');});
	}
});
    