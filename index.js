var Queue = require(__dirname + '/lib/queue.js');

module.exports = function SimpleMovingAverage(windowSize) {
  var queue = Queue(),
      sum = 0,
      sma = {};

  sma.reset = function reset() {
    sum = 0;
    queue = Queue(); 
  };

  sma.addValue = function addValue(value) {
    // Keep the queue max size enforced
    if (queue.getLength() >= windowSize) {
      sum -= queue.dequeue();
    };

    sum += value;
    queue.enqueue(value);
  };

  sma.getAverage = function getAverage() {
    var divisor = queue.getLength() < windowSize ? queue.getLength() : windowSize;
    divisor = divisor <= 0 ? 1 : divisor;
    return sum / divisor;
  };

  return sma;
}
