/*

Queue.js

A function to represent a queue

Modified from original Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
the terms of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
module.exports = function Queue(){

  // initialise the queue and offset
  var queue  = {},
      arr = [],
      offset = 0;

  // Returns the length of the queue.
  queue.getLength = function(){
    return (arr.length - offset);
  }

  // Returns true if the arr is empty, and false otherwise.
  queue.isEmpty = function(){
    return (arr.length == 0);
  }

  /* Enqueues the specified item. The parameter is:
   *
   * item - the item to enqueue
   */
  queue.enqueue = function(item){
    arr.push(item);
  }

  /* Dequeues an item and returns it. If the queue is empty, the value
   * 'undefined' is returned.
   */
  queue.dequeue = function(){

    // if the queue is empty, return immediately
    if (arr.length == 0) return undefined;

    // store the item at the front of the arr
    var item = arr[offset];

    // increment the offset and remove the free space if necessary
    if (++ offset * 2 >= arr.length){
      arr  = arr.slice(offset);
      offset = 0;
    }

    // return the dequeued item
    return item;

  }

  /* Returns the item at the front of the queue (without dequeuing it). If the
   * queue is empty then undefined is returned.
   */
  queue.peek = function(){
    return (arr.length > 0 ? arr[offset] : undefined);
  }

  return queue;
};
