/**
 * Created by art.beatte on 7/23/15.
 */
var controllers = angular.module('controllers', []);

(function(controllers) {
  'use strict';

  controllers.controller('rootCtrl', ['$scope', function($scope) {

  }]);

  controllers.controller('navCtrl', ['$scope', '$state', '$location', '$anchorScroll', function($scope, $state, $location, $anchorScroll) {
    var nav = this;

    nav.navigateTo = function(navTo) {
      $state.go(navTo);
      nav.currentState = $state.title;
    };

    nav.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.currentTitle = $state.current.title;
    });

  }]);

  controllers.controller('homeCtrl', ['$scope', '$state', function($scope) {

  }]);

  controllers.controller('labsCtrl', ['$scope', function($scope) {

  }]);

  controllers.controller('privacyPolicyCtrl', ['$scope', function($scope) {

  }]);

})(controllers);
