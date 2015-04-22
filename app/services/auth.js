var app=angular.module("auth",[]);
app.service("authService",function(){
  this.user=null;
  this.setUser=function(user)
  {
    this.user=user;
  }
  this.removeUser=function(user)
  {
    this.user=null;
  }
  this.getUser=function()
  {
    return this.user;
  }
  this.hasUser=function()
  {
    return this.user != null;
  }
})
