'use strict';

/**
 * @ngdoc overview
 * @name tarotapp
 * @description
 * # tarotapp
 *
 * Main module of the application.
 */
angular
  .module('tarotapp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

// Route.
  angular
  .module('tarotapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
