exports.registerTo=function(myapp)
{
  var UserService=function($http){
    this.save=function(user,onSuccess,onFailed)
    {
      var url="/rest/user/";
      $http.post(url,user).success(function(response){
        if(response.err){
          if(response.err.code == 11000)
          {
            onFailed("Username is duplicated");
          }else
          {
            onFailed("Failed to save the data due to " + response.err.code);
          }
        }else
        {
          onSuccess(user);
        }
      }).error(function(err){
        onFailed(err);
      });
    }

    this.login=function(user,onSuccess,onFailed)
    {
      var url="/rest/users?q=" + JSON.stringify(user);
      $http.get(url).success(function(response)
      {
        if(response.length == 0 || response.err)
        {
          onFailed("Login failed");
          return;
        }
        onSuccess(user);
      })
      .error(function(err)
      {
        onFailed(err);
      })
    }
  }
  myapp.service("userService",UserService);
}
