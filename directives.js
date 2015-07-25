/**
 * Created by art.beatte on 7/24/15.
 */
'use strict';

let directives = angular.module('directives', []);

(function(directives) {
  directives.directive('loginDialog', ['AUTH_EVENTS', function (AUTH_EVENTS) {
    return {
      restrict: 'A',
      template: '<div ng-if="visible" ng-include="partials/login.html">',
      link: function (scope) {
        var showDialog = function () {
          scope.visible = true;
        };

        scope.visible = false;
        scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
        scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
      }
    };
  }]);

})(directives);
