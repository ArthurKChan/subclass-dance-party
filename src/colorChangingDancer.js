var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //this.toggle = true;
  //this.$node.addClass('blue');
};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('blue');
}
