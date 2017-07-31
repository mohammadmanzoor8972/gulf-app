angular
  .module('HRMS')
  .controller('profileController', function($rootScope, $scope, API, $window) {
  	$scope.empLook = {
					  		"EmpFirstName":"Rahul", 
					  		"EmplLastName":"Mandlik", 
					  		"EmpNo":"20006070"
					  }					  
  	$scope.$on('$ionicView.beforeEnter', function(){
    $scope.findEmployee();
   });
  	$scope.findEmployee = function(){
		if($scope.empLook.EmpNo) {
			$rootScope.show("Searching Employee....");
		API.getEmployeeLookup($scope.empLook).success(function(resp){
			console.log(resp)
			if(resp && resp.EmployeeLookUpResult && JSON.parse(resp.EmployeeLookUpResult).length>0) {
				$scope.empObject=JSON.parse(resp.EmployeeLookUpResult)[0];				
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