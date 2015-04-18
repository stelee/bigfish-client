exports.config=function(myapp)
{
  myapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/signup",{controller:"signup",templateUrl:"views/signup.html"}).
      otherwise({redirectTo: '/signup'});
  }]);
}
