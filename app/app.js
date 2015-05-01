'use strict';

//dependencies
var config=require("etc/config");
require("directive");
require("controller");
require("service");
require("filter");

//main app
var  myapp=angular.module('impressViewApp', [
  'ngRoute',
  'ngSanitize',
  'impDirectives',
  'impControllers',
  'impServices',
  'filters',
  'jlareau.pnotify',
  'auth',
  'xeditable',
  "ui.bootstrap"
]);

myapp.constant("appConfig",config.config);
myapp.run(["editableOptions",function(editableOptions){
  editableOptions.theme = 'bs3';
}])

//config the pnotify
myapp.config(['notificationServiceProvider',function(notificationServiceProvider)
{
  notificationServiceProvider.setDefaults({
            history: false,
            delay: 1000,
            closer: false,
            closer_hover: false
        });
}])

require("routers").config(myapp);

myapp.run(['$rootScope','$location','authService',function($rootScope,$location,authService)
{
  $rootScope.$on("$locationChangeStart",function(event){
    if(!authService.hasUser())
    {
      $location.path("/signup");
    }
  })
}])
