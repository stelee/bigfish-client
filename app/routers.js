exports.config=function(myapp)
{
  myapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/signup",{controller:"signup",templateUrl:"views/signup.html"})
                  .when("/profile",{controller:"profileCtrl",templateUrl:"views/profile.html"})
                  .otherwise({redirectTo: '/signup'});
  }]);
}
