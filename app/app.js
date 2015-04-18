'use strict';

//dependencies
require("etc/config");
require("directive");
require("controller");

//main app
var  myapp=angular.module('impressViewApp', [
  'ngRoute',
  'impDirectives',
  'impControllers'
]);

require("routers").config(myapp);
