var cardnumber = "7283072226447984";

angular.module('app.controllers', [])
  
.controller('myMSSPointsCtrl', function($scope, $http) {
  $scope.load = function(){
  $http.get('https://trapoints-demo-2016.herokuapp.com/api/cards/5311106018954888')
                          .success(function (response) {
                            $scope.cardDetails = response;
                    
                          })
                          .error(function(response){
                            
                          });
                        };
                        
                        $scope.load();
})
})
   
.controller('myMSSCardDetailsCtrl', function($scope) {
  $scope.cardDetails = {
    cardNumber : cardnumber
  };
  
  $scope.$on("$ionicView.loaded", function() {
      new QRCode(document.getElementById("qrcode"), cardnumber, 10, 100);
  });
})
})
   
.controller('contactMSSCtrl', function($scope) {

})
    