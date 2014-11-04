var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, $('body').height()/2, $('body').width()/2, timeBetweenSteps);
  this.$node.addClass('rocket');
};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function(){
  var alienList = $('body').find('.alien');
  var currentAlien = $('body').find('.alien').first();
  var closestAlien;
  while(currentAlien.next()[0]){


  }

  //closest will be set
  //Move towards the closest Alien

  Dancer.prototype.step.call(this);
  this.$node.toggleClass('blue');
}
