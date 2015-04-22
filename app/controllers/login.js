exports.registerTo=function(myapp)
{
  myapp.controller("login",["$scope","userService","notificationService","$location",'authService',
    function($scope,userService,notificationService,$location,authService){
    $scope.template="views/login.html";
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
  }])
}
