exports.registerTo=function(myapp)
{
  myapp.controller("signup",["$scope","userService",function($scope,userService){
    $scope.save=function(user)
    {
      if('undefined' == typeof user || user === null)
        return;
      debugger;
      var user=angular.copy(user);
      userService.save(user,function(response){
        if(response.err && response.err.code === 11000)
        {
          alert("username is duplicated");
        }else
        {
          alert("saved");
        }

      })
    }
  }])
}
