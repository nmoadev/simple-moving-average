var SimpleMovingAverage = require('../index.js'),
    assert = require('assert');

describe('SimpleMovingAverage', function () {
  it('should work for a simple case', function() {
    var sma = SimpleMovingAverage(5);
    sma.addValue(1);
    sma.addValue(1);
    sma.addValue(1);
    sma.addValue(1);
    sma.addValue(1);
    assert.equal(sma.getAverage(), 1, 'the average was not correct');
  });

  it('should calculate average correctly when fewer than windowSize values have been added', function() {
    var sma = SimpleMovingAverage(5);
    sma.addValue(1);
    assert.equal(sma.getAverage(), 1, 'The average should be the only number added');
    sma.addValue(2);
    assert.equal(sma.getAverage(), 1.5, 'The average should have been halfway between first and second value');
  });

  it('should use the window correctly', function() {
    var sma = SimpleMovingAverage(5);
    sma.addValue(2);
    sma.addValue(2);
    sma.addValue(2);
    sma.addValue(2);
    sma.addValue(2);
    assert.equal(sma.getAverage(), 2, "The first average did not match expected");
    sma.addValue(3);
    sma.addValue(3);
    sma.addValue(3);
    sma.addValue(3);
    sma.addValue(3);
    assert.equal(sma.getAverage(), 3, "The second average did mot match expected");
  });

  describe('should handle negative values', function() {
    it('that cause a zero (0) average', function () {
      var sma = SimpleMovingAverage(4);
      sma.addValue(-2);
      sma.addValue(-2);
      sma.addValue(2);
      sma.addValue(2);
      assert.equal(sma.getAverage(), 0);
    });
    
    it('that cause a negative (<0) average', function () {
      var sma = SimpleMovingAverage(4);
      sma.addValue(-2);
      sma.addValue(-2);
      assert.equal(sma.getAverage(), -2);
    });
  });
});
