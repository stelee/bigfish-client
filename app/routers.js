exports.config=function(myapp)
{
  myapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/dashboard",{controller:"dashboard",templateUrl:"views/dashboard.html"})
    .when("/signup",{controller:"signup",templateUrl:"views/signup.html"}).
      otherwise({redirectTo: '/signup'});
  }]);
}
