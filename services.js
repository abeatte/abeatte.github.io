/**
 * Created by art.beatte on 7/24/15.
 */
'use strict';

let services = angular.module('services', []);

(function(services) {
  services.factory('authService', ['$http', 'session', '$q', 'USER_ROLES', function ($http, session, $q, USER_ROLES) {
    var authService = {};

    authService.login = function (credentials) {
      // TODO: no REST endpoint
      return $q.when().then(function (res) {
        session.create(3, 11,
            'admin');
        return {
          id: 11,
          name: credentials.username,
          password: credentials.password,
          role: 'admin'
        };
      });
      //return $http
      //    .post('/login', credentials)
      //    .then(function (res) {
      //      session.create(res.id, res.user.id,
      //          res.user.role);
      //      return res.user;
      //    });
    };

    authService.isAuthenticated = function () {
      return !!session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        (authorizedRoles.indexOf(USER_ROLES.all) !== -1 ||
         authorizedRoles.indexOf(session.userRole) !== -1));
    };

    return authService;
  }]);

  services.factory('authInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
    return {
      responseError: function (response) {
        $rootScope.$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized,
          419: AUTH_EVENTS.sessionTimeout,
          440: AUTH_EVENTS.sessionTimeout
        }[response.status], response);
        return $q.reject(response);
      }
    };
  }]);

  services.service('session', function () {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
  });

  services.factory('authResolver', ['$q', '$rootScope', '$state', function ($q, $rootScope, $state) {
    return {
      resolve: function () {
        var deferred = $q.defer();
        var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
          if (angular.isDefined(currentUser)) {
            if (currentUser) {
              deferred.resolve(currentUser);
            } else {
              deferred.reject();
              $state.go('login');
            }
            unwatch();
          }
        });
        return deferred.promise;
      }
    };
  }]);

})(services);
