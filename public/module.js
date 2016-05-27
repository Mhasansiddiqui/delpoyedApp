angular.module('App' , ['ngMaterial' , 'ui.router' ,'duScroll'  ] )
   .controller('MyCtrl', function($scope, $document){



    $document.scrollTopAnimated(0, 2000).then(function() {
      
      });
    $scope.show = false;

    $scope.showMe = function(){
       if($scope.show == false){
         $scope.show = true;
       }
    }
    $scope.toggle = function(){
      console.log('aaaa');
       $scope.show = false;
    }

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
       
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);