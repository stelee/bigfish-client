//entrypoint for directives
var aModule=angular.module("impDirectives",[]);
require("directives/passwordMatch").registerTo(aModule);
