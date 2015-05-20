exports.registerTo=function(myapp){
  myapp.service('bgExcellent',[function(){
    this.setBackground=function()
    {
      var filename=(Math.round((Math.random()*4))+1)+".jpg";
      $("body").css("background-image","url(images/background/"+filename+")");
    }
  }])
}
