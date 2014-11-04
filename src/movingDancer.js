var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var pos = this.$node.position();
  var dist = Math.floor(Math.random()*6);
  pos.top += Math.floor(Math.random()*2)===1 ? dist: -dist;
  pos.left += Math.floor(Math.random()*2)===1 ? dist: -dist;

  this.setPosition(pos.top,pos.left);
}
