exports.registerTo=function(myapp)
{
  myapp.controller("signup",["$scope",function($scope){
    $scope.save=function(user)
    {
      if('undefined' == typeof user || user === null)
        return;
      $scope.user=angular.copy(user);
    }
  }])
}
