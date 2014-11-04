describe("movingDancer", function() {

  var movingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node move", function() {
    sinon.spy(movingDancer, 'setPosition');
    movingDancer.step();
    expect(movingDancer.setPosition.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(movingDancer, "step");
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });
});
