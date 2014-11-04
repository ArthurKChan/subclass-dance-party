var lineUp = function(){
  console.log(window.dancers);
  console.log(window.dancers[0]);

  var top = $('body').height()/2;
  var left = 0;

  for(var i=0; i<window.dancers.length; i++){
    window.dancers[i].setPosition(top,left);
    left+= 25;
  }
};
