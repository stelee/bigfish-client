exports.registerTo=function(myapp)
{
  myapp.controller("signup",["$scope","userService","notificationService",function($scope,userService,notificationService){
    $scope.formSubmitted=false;
    $scope.save=function(myform,user)
    {
      if('undefined' == typeof user || user === null || !myform.$valid)
        return;
      var user=angular.copy(user);
      userService.save(user,function(user){
        notificationService.success('User has been saved');
        $scope.formSubmitted=true;
      },function(errMsg){
        notificationService.error(errMsg);
      })
    }
  }])
}
