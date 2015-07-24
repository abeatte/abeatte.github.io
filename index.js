/**
 * Created by art.beatte on 7/23/15.
 */
var app = angular.module('site', []);

(function(app) {
  'use strict';

  app.config([
    '$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
  ]);

  app.controller('rootCtrl', ['$scope', function($scope) {

  }]);

})(app);
