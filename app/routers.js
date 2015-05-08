exports.config=function(myapp)
{
  myapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/dashboard",{controller:"dashboard",templateUrl:"views/dashboard.html"})
    .when("/subscription",{controller:"subscribeCtrl",templateUrl:"views/subscription.html"})
    .when("/signup",{controller:"signup",templateUrl:"views/signup.html"})
    .when("/profile",{controller:"profileCtrl",templateUrl:"views/profile.html"})
    .otherwise({redirectTo: '/dashboard'});

  }]);
}
