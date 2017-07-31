angular
  .module('HRMS')
  .controller('leaveController', function($rootScope, $scope, API, $window, $ionicModal,  $ionicPopover) {
    
    $scope.$on('$ionicView.beforeEnter', function(){
      $scope.isCalendar = true;

      $ionicModal.fromTemplateUrl('templates/leaveReqForm.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });
   });
  

  $scope.closeHistory = function() {
    $scope.modal.hide();
  };

  $scope.showCalendar = function() {
    debugger;
  }


   $scope.openHistory = function($event) {
		$scope.modal.show();


   };



 // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/leaveReqForm.html', {
    scope: $scope,
    cssClass: 'customPopup'
  }).then(function(popover) {
    $scope.popover = popover;
  });
     $scope.openNewLeavePopup = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

 


});