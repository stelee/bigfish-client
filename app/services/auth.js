var app=angular.module("auth",["ngCookies"]);
app.service("authService",["$cookieStore",function($cookieStore){
  this.user=null;
  this.setUser=function(user)
  {
    this.user=user;
    $cookieStore.put("user",user);
  }
  this.removeUser=function(user)
  {
    this.user=null;
    $cookieStore.remove("user");
  }
  this.getUser=function()
  {
    var ret = this.user;
    if(ret == null)
    {
      ret=$cookieStore.get("user");
    }
    return ret;
  }
  this.hasUser=function()
  {
    return this.getUser() != null;
  }
  this.refreshCookie=function()
  {
    this.setUser(this.getUser());
  }
}])
