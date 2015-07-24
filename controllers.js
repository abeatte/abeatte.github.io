/**
 * Created by art.beatte on 7/23/15.
 */
'use strict';

let controllers = angular.module('controllers', []);

(function(controllers) {

  controllers.controller('navCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.navigate = function(navTo) {
      $state.go(navTo);
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.currentTitle = $state.current.title;
    });

  }]);

  controllers.controller('homeCtrl', ['$scope', '$state', function($scope) {

  }]);

  controllers.controller('projectsCtrl', ['$scope', function($scope) {

  }]);

  controllers.controller('aboutCtrl', ['$scope', function($scope) {

  }]);

  controllers.controller('contactCtrl', ['$scope', function($scope) {

  }]);

})(controllers);

