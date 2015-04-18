exports.registerTo=function(myapp)
{
  var UserService=function($http){
    this.save=function(user,callBack)
    {
      var url="/rest/user/";
      $http.post(url,user).success(callBack);
    }
  }
  myapp.service("userService",UserService);
}
