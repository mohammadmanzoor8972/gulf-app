// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'HRMS' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'HRMS.services' is found in services.js
// 'HRMS.controllers' is found in controllers.js
angular.module('HRMS', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
  })

   
   .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'dashboardController'
    })




  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/profile.html',
          controller: 'profileController'
        }
      }
  })

  .state('app.leave', {
      url: '/leave',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/leave.html',
          controller: 'leaveController'
        }
      }
  })


 .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardController'
        }
      }
  })

     .state('app.finance', {
      url: '/finance',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/finance.html',
          controller: 'employeeController'
        }
      }
  })

  .state('app.lookup', {
      url: '/lookup',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/employee-lookup.html',
          controller: 'employeeController'
        }
      }
  })


       .state('app.holiday', {
      url: '/holiday',
      views: {
        'menuContentMore': {
          templateUrl: 'templates/holiday.html',
          controller: 'employeeController'
        }
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
