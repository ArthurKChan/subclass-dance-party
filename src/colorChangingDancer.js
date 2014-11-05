var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, $('body').height()/2, $('body').width()/2, 25);
  this.$node.addClass('rocket');
  //console.log($('earth'));
  this.earthLeft = $('.earth').position().left; //does not append px
  this.earthTop = $('.earth').position().top;

};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;
ColorChangingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);


  var alienList = $('body').find('.alien');
  var currentAlien;
  var closestAlien;
  var smallestDiff = $('body').width() * $('body').height(); // initialization of a large value

  var alienX, alienY;


  //Alien target selector
  for(var i = 0; i < alienList.length; i++){
    currentAlien = alienList[i];
    var alienLeft = Number(currentAlien.style.left.replace(/px/g, ''));
    var alienTop = Number(currentAlien.style.top.replace(/px/g, ''));;
    var leftDiff = alienLeft - this.earthLeft;
    var topDiff = alienTop - this.earthTop;
    var diff = Math.sqrt(leftDiff*leftDiff  + topDiff*topDiff);

    if(diff < smallestDiff) {
      smallestDiff = diff;
      closestAlien = currentAlien;
      alienX = alienLeft;
      alienY = alienTop;
    }
  }

  //Move rocket
  // use the x & y distance for the rocket to travel
  var pos = this.$node.position();
  alienX > pos.left ? pos.left +=1 : pos.left-=1 ;
  alienY > pos.top ? pos.top+=1 : pos.top-=1 ;
  // Do a check here for rocket to alien distance
  // if less than 30px, then delete both elements

  this.setPosition(pos.top, pos.left);

  if(Math.abs(pos.left-alienX) <= 20 && Math.abs(pos.top-alienY) <= 20 ){
    closestAlien.remove();
    this.$node.remove();
    // THere is no garbage collection, you were warned! we too lazy...
  }


  //this.$node.toggleClass('blue');
}
