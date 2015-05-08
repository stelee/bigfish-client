var myapp=angular.module("impServices",[]);
require("services/userService").registerTo(myapp);
require("services/subscriptionService").registerTo(myapp);
require("services/auth");
