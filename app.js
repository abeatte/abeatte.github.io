/**
 * Created by art.beatte on 7/23/15.
 */
var app = angular.module('app', [
  'ui.router',
  'controllers',
  'services',
  'directives',
  'constants',
  'ui.bootstrap'
]);

(function(app) {
  'use strict';

  app.config(['$interpolateProvider', function($interpolateProvider) {
      return $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
  ]);

  app.config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES', 'FEATURE',
              function ($stateProvider, $urlRouterProvider, USER_ROLES, FEATURE) {
    if (FEATURE.login.on) {
      $stateProvider
          .state('login', {
            title: 'login',
            url : '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl',
            authorizedRoles: [USER_ROLES.all]
          });
    }
    $stateProvider
        .state('home', {
          title: 'projects',
          url : '/projects',
          templateUrl: 'partials/projects.html',
          controller: 'projectsCtrl',
          authorizedRoles: [USER_ROLES.all],
          resolve: {
            auth: function resolveAuthentication(authResolver) {
              return authResolver.resolve();
            }
          }
        })
        .state('projects', {
          title: 'projects',
          url : '/projects',
          templateUrl: 'partials/projects.html',
          controller: 'projectsCtrl',
          authorizedRoles: [USER_ROLES.all],
          resolve: {
            auth: function resolveAuthentication(authResolver) {
              return authResolver.resolve();
            }
          }
        })
        .state('about', {
          title: 'about',
          url : '/about',
          templateUrl: 'partials/about.html',
          controller: 'aboutCtrl',
          authorizedRoles: [USER_ROLES.all],
          resolve: {
            auth: function resolveAuthentication(authResolver) {
              return authResolver.resolve();
            }
          }
        });

    $urlRouterProvider.otherwise('/projects');
  }]);

  app.run(['$rootScope', 'AUTH_EVENTS', 'FEATURE', 'authService', '$state',
           function ($rootScope, AUTH_EVENTS, FEATURE, authService, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      var authorizedRoles = next.authorizedRoles;
      if (FEATURE.login.on) {
        if (next.name !== 'login' && !authService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          $state.go('login');
          if (authService.isAuthenticated()) {
            // user is not allowed
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          } else {
            // user is not logged in
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
      }
    });
  }]);

  app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push([
      '$injector',
      function ($injector) {
        return $injector.get('authInterceptor');
      }
    ]);
  }]);

})(app);
