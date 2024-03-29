describe("colorChangingDancer", function() {

  var colorChangingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorChangingDancer = new ColorChangingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(colorChangingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change color", function() {
    sinon.spy(colorChangingDancer.$node, 'toggleClass');
    colorChangingDancer.step();
    expect(colorChangingDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(colorChangingDancer, "step");
      expect(colorChangingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorChangingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorChangingDancer.step.callCount).to.be.equal(2);
    });
  });
});
