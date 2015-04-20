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
  'impServices',
  'jlareau.pnotify'
]);

require("routers").config(myapp);
