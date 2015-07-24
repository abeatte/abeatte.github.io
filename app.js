/**
 * Created by art.beatte on 7/23/15.
 */
var app = angular.module('app', [
  'ui.router',
  'controllers',
  'ui.bootstrap'
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
        .state('projects', {
          title: 'projects',
          url : '/projects',
          templateUrl: 'partials/projects.html',
          controller: 'projectsCtrl'
        })
        .state('about', {
          title: 'about',
          url : '/about',
          templateUrl: 'partials/about.html',
          controller: 'aboutCtrl'
        });

    $urlRouterProvider.otherwise('/projects');
  }]);

})(app);
