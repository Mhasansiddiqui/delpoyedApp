 
angular.module('App'  )
   .controller('FormCtrl', function($scope, $document){

		 // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyCqNkunB6NDmV_Rd47JFzndg_YzwWKXjeE",
		    authDomain: "project-7305199249666167418.firebaseapp.com",
		    databaseURL: "https://project-7305199249666167418.firebaseio.com",
		    storageBucket: "project-7305199249666167418.appspot.com",
		  };
		  firebase.initializeApp(config);


		  // Get a reference to the database service
		  var database = firebase.database();
		$scope.save = function(){
		 firebase.database().ref('anonymouse/').set($scope.user);

		 firebase.database().ref('anonymouse/').on('value', function(snapshot) {
		      console.log(snapshot);
		});
	}
});