exports.registerTo=function(myapp)
{
  myapp.filter("cut",function(){
    return function(input){
      if(!!!input)
      {
        return input;
      }else
      {
        return input.substr(-3);
      }

    }
  });
}
