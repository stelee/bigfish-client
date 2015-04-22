exports.registerTo=function(myapp)
{
  myapp.controller("menu",["$scope","appConfig","$location",
    function($scope,config,$location){
      $scope.menus=config.menus;
      $scope.isActive = function (viewLocation) {
           var active = (viewLocation === $location.path());
           return active;
      };
    }
  ])
}
