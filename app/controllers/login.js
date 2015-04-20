exports.registerTo=function(myapp)
{
  myapp.controller("login",["$scope","userService","notificationService","$location",function($scope,userService,notificationService,$location){
    $scope.login=function(user)
    {
      userService.login(user,function(user){
        notificationService.success("login success");
        $location.path("/dashboard");
      },function(err){
        notificationService.error("login failed");
      })
    }
  }])
}
