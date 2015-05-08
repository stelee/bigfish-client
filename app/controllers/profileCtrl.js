exports.registerTo=function(myapp)
{
  myapp.controller("profileCtrl", ["$scope", "$filter","authService", 'userService','notificationService',
    function($scope,$filter,authService,userService,notificationService){
    $scope.user=authService.getUser();
    $scope.profile={
      email: $scope.user.email,
      user:{},
      contact:{},
      payment:{}
    };
    $scope.objectKeys = function(obj){
     return Object.keys(obj);
    }
    $scope.updateUser=_.debounce(
      function(){
        console.log("save user");
        return new Promise(function(resolve,reject){
          userService.updateProfile($scope.profile,function(profile){
            resolve(profile);
          },function(err){
            reject();
          })
        })
      }
    ,500);
    userService.getProfile($scope.user,function(profile){
      if(profile == "null" || profile.length===0){//null from the service
        userService.createProfile($scope.profile,function(profile){
          $scope.profile=profile;
        },function(err){
          console.error(err);
          notificationService.error(err);
        })
      }
      $scope.profile=profile[0];
    },function(err){
      console.error(err);
      notificationService.error(err);
    })
  }])

  myapp.filter('removeSpaces', function () {
    return function (text) {
      return text.replace(/\s+/g, '');
    };
  })
}
