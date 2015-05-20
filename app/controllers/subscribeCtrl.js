exports.registerTo=function(myapp){
  myapp.controller("subscribeCtrl",["$scope","authService","notificationService","subscriptionService",'bgExcellent',
  function($scope,authService,notificationService,subscriptionService,bgExcellent){
    bgExcellent.setBackground();
    $scope.user=authService.getUser();
    $scope.mysubscription={
      email:$scope.user.email,
      choice:"",
      like:[],
      dislike:[],
      comment:""
    }
    $scope.like=[];
    $scope.dislike=[];

    $scope.subscribe=function(code)
    {
      $scope.mysubscription.choice=code;
      $scope.save();
    }
    //init the subscription

    subscriptionService.my($scope.user).success(function(response){
      if(response.err)
      {
        return;
      }
      if(response.length==0)
      {
        subscriptionService.create($scope.mysubscription);
      }else{
        $scope.mysubscription=response[0];
        $scope.like=$scope.mysubscription.like.map(function(e){
          return {text:e};
        })
        $scope.dislike=$scope.mysubscription.dislike.map(function(e){
          return {text:e};
        })
      }
    });
    $scope.save=_.debounce(function(){
      $scope.mysubscription.like=$scope.like.map(function(e){
        return e.text;
      })
      $scope.mysubscription.dislike=$scope.dislike.map(function(e){
        return e.text;
      });
      subscriptionService.update($scope.mysubscription).success(function(){
        notificationService.info("Your subscription has been saved");
      }).error(function(err){
        notificationService.error("Failed to save the subscription, please try again later or contact the customer service");
      })
    },1000);

    $scope.unsubscribe=function(){
      $scope.mysubscription.choice="";

      $scope.save();
    }

    $scope.test=function(){
      alert();
    }
    $scope.loadLikeTags=function(){
      return [
        { "text": "spicy" },
        { "text": "chili" },
        { "text": "sweet" },
        { "text": "sugar" },
        { "text": "milk" }
      ]
    }
    $scope.loadDislikeTags=function(){
      return [
        { "text": "spicy" },
        { "text": "chili" },
        { "text": "sweet" },
        { "text": "sugar" },
        { "text": "milk" },
        { "text" : "nuts"},
        { "text" : "peanut"}
      ]
    }

  }]);

}
