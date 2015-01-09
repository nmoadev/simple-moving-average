# Simple Moving Average
## A (nearly) useless mathemetical tool for NodeJs.

Checkout the [Wikipedia Article](http://en.wikipedia.org/wiki/Moving_average#Simple_moving_average) for the formal definition.

# Installation

```bash
$ npm install simple-moving-average
```

# Usage

```javascript
var SimpleMovingAverage = require('simple-moving-average'),
    mySma;

mySma = SimpleMovingAverage(5); // Set a window size

mySma.addValue(1);
mySma.addValue(1);
mySma.addValue(1);
mySma.addValue(1);
mySma.addValue(1);

mySma.getAverage(); // Returns 1
```

# API Reference

## .addValue(value)
Adds a value to the data set for the moving average. If there are already `windowSize` samples in the data set,
the oldest value will be removed.

## .getAverage()
Returns the current average across the data set.

## .reset()
Clears the data set.

# Special Mention
Credit to Stephen Morley whose [JavaScript queue implementation](http://code.stephenmorley.org/javascript/queues) I modified and incorporated
