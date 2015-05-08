exports.registerTo=function(myapp){
  myapp.service('subscriptionService',['$http',function($http){
    this.my=function(user){
      var url="/rest/subscriptions?q=" + JSON.stringify({email:user.email});
      return $http.get(url);
    }
    this.update=function(subscription){
      var url="/rest/subscription?q="+JSON.stringify({email:subscription.email});
      return $http.put(url,subscription);
    }
    this.create=function(subscription){
      var url="/rest/subscription";
      return $http.post(url,subscription);
    }
  }])
}
