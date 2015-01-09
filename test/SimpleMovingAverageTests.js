var SimpleMovingAverage = require('../index.js'),
    assert = require('assert');

describe('SimpleMovingAverage', function () {
  describe('should handle the basic cases', function () {
    it('full window of same value', function() {
      var sma = SimpleMovingAverage(5);
      sma.addValue(1);
      sma.addValue(1);
      sma.addValue(1);
      sma.addValue(1);
      sma.addValue(1);
      assert.strictEqual(sma.getAverage(), 1, 'the average was not correct');
    });
  
    it('fewer than windowSize values have been added', function() {
      var sma = SimpleMovingAverage(5);
      sma.addValue(1);
      assert.strictEqual(sma.getAverage(), 1, 'The average should be the only number added');
      sma.addValue(2);
      assert.strictEqual(sma.getAverage(), 1.5, 'The average should have been halfway between first and second value');
    });
  
    it('entire window of values replaced', function() {
      var sma = SimpleMovingAverage(5);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      assert.strictEqual(sma.getAverage(), 2, "The first average did not match expected");
      sma.addValue(3);
      sma.addValue(3);
      sma.addValue(3);
      sma.addValue(3);
      sma.addValue(3);
      assert.strictEqual(sma.getAverage(), 3, "The second average did mot match expected");
    });
  });

  describe('should handle negative values', function() {
    it('that cause a zero (0) average', function () {
      var sma = SimpleMovingAverage(4);
      sma.addValue(-2);
      sma.addValue(-2);
      sma.addValue(2);
      sma.addValue(2);
      assert.strictEqual(sma.getAverage(), 0);
    });
    
    it('that cause a negative (<0) average', function () {
      var sma = SimpleMovingAverage(4);
      sma.addValue(-2);
      sma.addValue(-2);
      assert.strictEqual(sma.getAverage(), -2);
    });
  });

  it('should return an average of 0 when there is no data', function () {
    var sma = SimpleMovingAverage(5);
    assert.strictEqual(sma.getAverage(), 0);
  });

  it('should be correctly reset by .reset()', function() {
      var sma = SimpleMovingAverage(5);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      sma.addValue(2);
      assert.strictEqual(sma.getAverage(), 2, "The first average did not match expected");
      sma.reset();
      assert.strictEqual(sma.getAverage(), 0);//, "The average after reset should be 0");
  });
});
