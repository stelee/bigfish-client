var aModule=angular.module("impControllers",[]);
require("controllers/signup").registerTo(aModule);
require("controllers/login").registerTo(aModule);
require("controllers/profileCtrl").registerTo(aModule);
require("controllers/menu").registerTo(aModule);
require("controllers/video").registerTo(aModule);
