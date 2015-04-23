exports.registerTo=function(myapp)
{
  myapp.controller("login",["$scope","userService","notificationService","$location",'authService',
    function($scope,userService,notificationService,$location,authService){

    if(authService.hasUser())
    {
      $scope.template="views/afterlogin.html";
      $scope.user=authService.getUser();
    }else
    {
      $scope.template="views/login.html";
    }
    $scope.login=function(user)
    {
      userService.login(user,function(user){
        notificationService.success("login success");
        authService.setUser(user);
        $scope.isLogin=true;
        $scope.user=user;
        $location.path("/profile");
        $scope.template="views/afterlogin.html";
      },function(err){
        notificationService.error("login failed");
      })
    }
    $scope.logout=function()
    {
      authService.removeUser();
      $scope.isLogin=false;
      $scope.template="views/login.html";
      $location.path("/signup");
    }
  }])
}
