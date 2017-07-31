angular
  .module('HRMS')
  .controller('loginController', function($rootScope, $scope, API, $window) {
    
    $scope.$on('$ionicView.beforeEnter', function(){
    
   });


  if($rootScope.isSessionActive()){
    // $rootScope.loginUserData = JSON.parse($window.localStorage.token);
    // $window.location.href = "#/app/dashboard"
  }

    $scope.user = {
        Username: "",
        Password: ""
    };

  $scope.authenticate = function() {
   // delete $scope.user.password;
    console.log($scope.user);

   // $window.location.href = "#/app/dashboard"
    //return;
      $rootScope.show('Please wait.. Authenticating');
      if($rootScope.isOnline()) {
        API.validateUser($scope.user).success(function (response) {
         var user = [];
         if(response.ValidateLoginResult.indexOf('{')>0){
            user = JSON.parse(response.ValidateLoginResult);
          }
         console.log(user[0]);
          if(user && user.length>0 && user[0].EPernr>0){           
            $rootScope.loginUserData = user[0];
            $rootScope.loginUserData.isManager = user[0].EMss ? true : false;
            $rootScope.setToken(JSON.stringify(user[0])); 
            $rootScope.hide();
            $window.location.href = ('#/app/dashboard');
          } else {
            $rootScope.hide();
            $rootScope.loginUserData = {};
            $rootScope.alert("Alert", "Invalid email or password")
               $window.location.href = ('#/app/dashboard');
          }
        }).error(function (error) {
           $rootScope.hide();
           $rootScope.alert("Alert", "Invalid email or password")
              $window.location.href = ('#/app/dashboard');
        });
     }
    


  };


  $scope.forgotPassword = function() {
    $window.location.href = "#/forgotpassword"
  
  };

   $scope.navigateRegister = function() {
    $window.location.href = "#/register"
  
  };

});