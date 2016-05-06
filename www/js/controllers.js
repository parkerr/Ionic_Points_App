var cardnumber = "5311106018954888";

angular.module('app.controllers', [])
  
.controller('myMSSPointsCtrl', function($scope, $http) {
  $scope.load = function(){
  $http.get('https://trapoints-demo-2016.herokuapp.com/api/cards/5311106018954888')
                          .success(function (response) {
                            $scope.cardDetails = response;
                          })
  .finally(function(){
                          $scope.$broadcast('scroll.refreshComplete');
                        });
                      };
                          
                        
                        
                        $scope.load();
})

   
.controller('myMSSCardDetailsCtrl', function($scope) {
  $scope.cardDetails = {
    cardNumber : cardnumber
  };
  
  $scope.$on("$ionicView.loaded", function() {
      new QRCode(document.getElementById("qrcode"), cardnumber, 100, 100);
  });
})
   
.controller('contactMSSCtrl', function($scope) {

})
    