var lineUp = function(){

  var top = $('body').height()/2;
  var left = 0;

  //console.log(aliens);
  console.log(window.aliens);
  for(var i=0; i<window.aliens.length; i++){

    window.aliens[i].setPosition(top,left);
    left+= 25;
  }
};
