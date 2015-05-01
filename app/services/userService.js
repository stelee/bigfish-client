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
      });
    }

    this.createProfile=function(profile,onSuccess,onFailed)
    {
      var url="/rest/profile";
      $http.post(url,profile).success(function(response){
        if(response.err){
          onFailed(err);
          return;
        }
        onSuccess(profile);
      }).error(function(err){
        onFailed(err)
      })
    }

    this.getProfile=function(user,onSuccess,onFailed)
    {
      var url="/rest/profiles?q=" + JSON.stringify({email:user.email})
      $http.get(url).success(function(response){
        if(response.err){
          onFailed(err);
          return;
        }
        onSuccess(response);
      }).error(function(err){
        onFailed(err);
      });
    }

    this.updateProfile=function(profile,onSuccess,onFailed)
    {
      var url="/rest/profile?q=" + JSON.stringify({email:profile.email})
      $http.put(url,profile).success(function(response){
        if(response.err){
          onFailed(err);
          return;
        }
        onSuccess(profile);
      }).error(function(err){
        onFailed(err);
      })
    }

  }
  myapp.service("userService",UserService);
}
