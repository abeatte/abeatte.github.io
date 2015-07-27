/**
 * Created by art.beatte on 7/24/15.
 */
var constants = angular.module('constants', []);

(function(constants) {
  'use strict';

  constants.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  });

  constants.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  });

  constants.constant('FEATURE', {
    login : {
      on: false
    }
  });

})(constants);
