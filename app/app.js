'use strict';

//dependencies
require("etc/config");
require("directive");
require("controller");
require("service");

//main app
var  myapp=angular.module('impressViewApp', [
  'ngRoute',
  'impDirectives',
  'impControllers',
  'impServices'
]);

require("routers").config(myapp);
