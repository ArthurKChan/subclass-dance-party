var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.top = top;
  this.left = left;
}

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var dist = Math.floor(Math.random()*6);
  this.top += Math.floor(Math.random()*2)===1 ? dist: -dist;
  this.left += Math.floor(Math.random()*2)===1 ? dist: -dist;
  this.$node.css({ top: this.top,
                   left: this.left, });
}
