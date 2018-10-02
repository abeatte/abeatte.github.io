/**
 * Created by art.beatte on 7/23/15.
 */
var app = angular.module('site', [
  'ui.router',
  'controllers'
]);

(function(app) {
  'use strict';

  app.config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
  ]);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          title: 'home',
          url : '/home',
          templateUrl: 'parts/home.html',
          controller: 'homeCtrl'
        })
        .state('labs', {
          title: 'labs',
          url : '/labs',
          templateUrl: 'parts/labs.html',
          controller: 'labsCtrl'
        })
        .state('privacy_policy', {
          title: 'privacy policy',
          url : '/privacy_policy',
          templateUrl: 'parts/privacyPolicy.html',
          controller: 'privacyPolicyCtrl'
        });

    $urlRouterProvider.otherwise('/home');
  }]);

})(app);
