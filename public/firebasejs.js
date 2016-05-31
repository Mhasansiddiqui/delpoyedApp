 
angular.module('App'  )
   .controller('FormCtrl', function($scope, $document , $http){

		 // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyCqNkunB6NDmV_Rd47JFzndg_YzwWKXjeE",
		    authDomain: "project-7305199249666167418.firebaseapp.com",
		    databaseURL: "https://project-7305199249666167418.firebaseio.com",
		    storageBucket: "project-7305199249666167418.appspot.com",
		  };
		  firebase.initializeApp(config);

          var req = {
			 method: 'POST',
			 url: 'http://localhost:5000/index.html',
			 headers: {
			   'Content-Type': undefined
			 },
			 data: { test: 'test' }
			}

			$http(req).then(function(){
              console.log('upper');
              
			}, function(){
              console.log(req);
			});

			/*
			// Get a reference to the database service
				var database = firebase.database();
					$scope.save = function(){
					firebase.database().ref('anonymouse/').set($scope.user);
					firebase.database().ref('anonymouse/').on('value', function(snapshot) {
					console.log(snapshot);
				});
			}
			*/
});