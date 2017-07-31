angular
  .module('HRMS')
  .controller('employeeController', function($rootScope, $scope, API, $window, $ionicModal) {
  	$scope.$on('$ionicView.beforeEnter', function(){
    	$rootScope.menuPopover.hide();
   });

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };


  	$scope.empLook = {
					  		"EmpFirstName":"", 
					  		"EmplLastName":"", 
					  		"EmpNo":""
					  }



	$scope.findEmployee = function(){
		if($scope.empLook.EmpNo) {
			$rootScope.show("Searching Employee....");
		API.getEmployeeLookup($scope.empLook).success(function(resp){
			if(resp && resp.EmployeeLookUpResult && JSON.parse(resp.EmployeeLookUpResult).length>0) {
				$scope.empObject=JSON.parse(resp.EmployeeLookUpResult)[0];
				$scope.openModal();
			}
			$rootScope.hide();
		}).error(function(error){
			$rootScope.hide();
		})
		} else {
			alert("SAP code is mandatory.")
		}
	}

});