exports.registerTo=function(myapp)
{
  myapp.filter("autoNewlineFilter",function(){
    return function(input){
      if(!!!input)
      {
        return input;
      }else
      {
        return input.replace(/\n/g,"<br/>");
      }

    }
  });
}
