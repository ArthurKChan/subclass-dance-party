var lineUp = function(){

  var top = $('body').height()/2;
  var left = 0;

  for(var i=0; i<window.aliens.length; i++){
    window.aliens[i].setPosition(top,left);
    left+= 25;
  }
};
