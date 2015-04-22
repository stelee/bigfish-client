'use strict';

//dependencies
var config=require("etc/config");
require("directive");
require("controller");
require("service");

//main app
var  myapp=angular.module('impressViewApp', [
  'ngRoute',
  'impDirectives',
  'impControllers',
  'impServices',
  'jlareau.pnotify',
  'auth'
]);

myapp.constant("appConfig",config.config);

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
