'use strict';

// Declare app level module which depends on views, and components
var  myapp=angular.module('impressViewApp', [
  'ngRoute'
]);
require("etc/config");
require("directive");
require("controller");



myapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/signup",{controller:"signup",templateUrl:"views/signup.html"}).
    otherwise({redirectTo: '/signup'});
}]);
