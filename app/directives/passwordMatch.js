exports.registerTo=function(myapp)
{
  myapp.directive('passwordMatch',[function()
    {
      return {
        require : "ngModel",
        restrict : "A",
        scope : {
          otherModelValue : "=passwordMatch"
        },
        link : function(scope,elem,attrs,ctrl)
        {
            var passwordMatcher=function(val)
            {
              if(val != scope.otherModelValue)
              {
                ctrl.$setValidity("passwordMatch",false);
                return;
              }else
              {
                ctrl.$setValidity("passwordMatch",true);
                return val;
              }
            };
            ctrl.$parsers.push(passwordMatcher);
            ctrl.$formatters.push(passwordMatcher);

            scope.$watch('otherModelValue',function(){
              ctrl.$validate();
            });
        }
      }
    }])

}
