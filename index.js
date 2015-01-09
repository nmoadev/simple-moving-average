var Queue = require(__dirname + '/lib/queue.js');

module.exports = function SimpleMovingAverage(windowSize) {
  var queue = Queue(),
      sum = 0,
      sma = {};

  sma.reset = function reset() {
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
    return sum / (queue.getLength() < windowSize ? queue.getLength() : windowSize);
  };

  return sma;
}
