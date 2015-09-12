// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "main.html"
    })
    .state('battery', {
      url: "/battery",
      templateUrl: "templates/battery.html",
      controller: 'BatteryCtrl'
    })
    .state('camera', {
      url: "/camera",
      templateUrl: "templates/camera.html",
      controller: 'CameraCtrl'
    })
    .state('motion', {
      url: "/motion",
      templateUrl: "templates/motion.html",
      controller: 'MotionCtrl'
    })
    .state('location', {
      url: "/location",
      templateUrl: "templates/location.html",
      controller: 'LocationCtrl'
    })
    .state('flashlight', {
      url: "/flashlight",
      templateUrl: "templates/flashlight.html",
      controller: 'FlashlightCtrl'
    })
  $urlRouterProvider.otherwise('/');
});
