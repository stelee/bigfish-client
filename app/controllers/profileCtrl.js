exports.registerTo=function(myapp)
{
  myapp.controller("profileCtrl", ["$scope", "$filter", function($scope,$filter){
    $scope.profile={
      user:{}
    };

    $scope.objectKeys = function(obj){
     return Object.keys(obj);
    }

    function selectItem(item){
      $scope.aboutItem = item;
    }
    function isSelect(item){
      return $scope.aboutItem == item;
    }

    /**
     * TODO Will update the database
     * @param {[type]} title [description]
     * @param {[type]} key   [description]
     * @param {[type]} value [description]
     */
    function changeValue(title, key, value){
      var m = $filter('filter')($scope.aboutItems, {title: title});
      m[0].contents[key] = value;
      //console.log(m[0].contents);
    }

    $scope.selectItem = selectItem;
    $scope.isSelect = isSelect;
    $scope.changeValue = changeValue;
  }])

  myapp.filter('removeSpaces', function () {
    return function (text) {
      return text.replace(/\s+/g, '');
    };
  })
}
