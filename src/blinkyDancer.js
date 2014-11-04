var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = function(){
  return Dancer.prototype.step.call(this);
}

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
