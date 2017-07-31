angular
  .module('HRMS')
  .factory('API', function ($rootScope, $http, $ionicLoading, $window, $ionicPopup, CONSTANT, $ionicPopover) {
 
      var base = CONSTANT.BASEURL;
      $rootScope.menuPopover = {};
      $rootScope.loginUserData = $window.localStorage.token ? JSON.parse($window.localStorage.token) : "";

        $ionicPopover.fromTemplateUrl('templates/moreMenu.html', {
          scope: $rootScope,
          cssClass: 'customPopup'
        }).then(function(popover) {
          $rootScope.menuPopover = popover;
        });

         $rootScope.showMore = function($event){
         
           $rootScope.menuPopover.show($event);

        }

        $rootScope.hideShowMore = function() {
          $rootScope.menuPopover.hide();
        };



      $rootScope.show = function (text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
      };

      $rootScope.navigate = function(url){
        $window.location.href = ('#/app/'+url);
      };

      $rootScope.hide = function () {
            $ionicLoading.hide();
      };

        $rootScope.isOnline = function () {
            return true;
      };

      $rootScope.logout = function () {
            $rootScope.setToken("");
            $rootScope.existComplain = [];
            $window.location.href = '#/login';
      };

      $rootScope.notify =function(text){
            $rootScope.show(text);
            $window.setTimeout(function () {
              $rootScope.hide();
            }, 1999);
      };

      $rootScope.alert =function(title, text){
      var alertPopup = $ionicPopup.alert({
               title: title,
               template: text
             });
             alertPopup.then(function(res) {
               console.log('done');
             });
      };

      $rootScope.setToken = function (token) {
            return $window.localStorage.token = token;
      };

      $rootScope.getToken = function () {
            return $window.localStorage.token;
      };

      $rootScope.isSessionActive = function () {
            return $window.localStorage.token ? true : false;
      };

       $rootScope.navigatePage = function(){
        $window.location.href = this.href;

      };

      return {
            validateUser : function(form){
                return $http.post(base+CONSTANT.API.VALIDATE_USERS, form);
            },
            getPaySlip : function(form){
                return $http.post(base+CONSTANT.API.PAY_SLIP, form);
            },
            getEmployeeLookup : function(form){
                return $http.post(base+CONSTANT.API.EMPLOYEE_LOOKUP, form);
            },
            getPF : function(form){
                return $http.post(base+CONSTANT.API.GET_PF, form);
            },
            officeTime : function(form){
                return $http.post(base+CONSTANT.API.OFFICE_TIME, form);
            },
            optionalHoliday : function(form){
                return $http.post(base+CONSTANT.API.OPTIONAL_HOLIDAY, form);
            },
            calendarHoliday : function(form){
                return $http.post(base+CONSTANT.API.CALENDAR_HOLIDAY, form);
            },
            leaveTypes : function(form){
                return $http.post(base+CONSTANT.API.LEAVE_TYPES, form);
            },     

      }
  
  });


angular
  .module('HRMS')
  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false);
  })
  .directive('movePopup', function($ionicPopup) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) { 
            element.parent().parent().css('top', rowHeight * scope.index + somethingElse + 'px');
        }
    }
});
