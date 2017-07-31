angular
  .module('HRMS')
  .controller('dashboardController', function($rootScope, $scope, API, $window) {

   $scope.$on('$ionicView.beforeEnter', function(){
    
   });

    
  if($rootScope.isSessionActive()){
     $rootScope.loginUserData = JSON.parse($window.localStorage.token);
    // $window.location.href = "#/app/dashboard"
  }

    $scope.user = {
        username: "",
        password: ""
    };

  $scope.authenticate = function() {

    console.log($scope.user);
   // alert("india")
  };

  $scope.validateUser = function () {

  }
 

  $scope.forgotPassword = function() {
    $window.location.href = "#/forgotpassword"
  
  };

   $scope.navigateRegister = function() {
    $window.location.href = "#/register"
  
  };

 

  $scope.showPopup = function(){
   
  }

});