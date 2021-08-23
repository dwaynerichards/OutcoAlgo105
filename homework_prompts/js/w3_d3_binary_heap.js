import chalk from "chalk";
const { log } = console;
const { red, yellow, blue, green } = chalk;

/*
 *  Homework - Binary Heap
 *
 *  Prompt: Create a Binary Heap class
 *
 *  The Heap will take in the following input:
 *
 *            type:   {String} - 'min' for minheap, 'max' for maxheap
 *
 *  The Heap will have the following properties:
 *
 *         storage:   {Array} - storage of numbers within heap
 *            type:   {String} - indicates whether heap is a minheap or maxheap
 *
 *  The Heap will have the following methods:
 *
 *        compare:   compares two input numbers and returns if the heap
 *                   condition is met.
 *
 *                   Input:      parent {Number} - index at parent
 *                   Input:      child {Number} - index at child
 *                   Output:     {Boolean}
 *
 *         insert:   inserts a number into the heap.
 *
 *                    Input:     {Number}
 *                   Output:     {undefined}
 *
 *           peek:   returns the top item in the heap
 *
 *                   Input:      N/A
 *                   Output:     {Number}
 *
 *         removePeak:   removes the top element from the heap
 *
 *                    Input:      N/A
 *                   Output:     {Number}
 */

("use strict");

class Heap {
  constructor(type = "min") {
    //if (string) console.log(string, `:string`);

    this.type = type;
    this.storage = new Array();

    if (type == "max") this.type = type;
  }

  // Time Complexity:
  // Auxiliary Space Complexity:

  rebalance() {
    //aka bubble down
    console.log(`rebalancing begins on ${this.type} heap`);
    let heap = this.storage;
    const lastChildIndex = Math.floor((heap.length - 2) / 2);
    log(green(`lastChildIndex: ${lastChildIndex}`));

    for (let i = index; i < lastChildIndex; i++) {
      let childIndex1 = 2 * i + 1;
      let childIndex2 = 2 * i + 2;
      let parent = heap[i];
      let child1 = heap[childIndex1];
      let child2 = heap[childIndex2];
      console.log(parent, child1, child2);

      if (this.type === "min") {
      } else if (this.type === "max") {
        //max heap, parents needs to be larger than both children
        //if parent is smaller than anyh child, parent needs to be swapped with
        //larger child
      }
    }
  }

  swap(array) {
    [array[0], array[1]] = [array[1], array[0]];
  }

  compare(parent, child) {
    /**
     * compare:   compares two input numbers and returns if the heap
     *                   condition is met.
     *                   Input:      parent {Number} - index at parent
     *                   Input:      child {Number} - index at child
     *                   Output:     {Boolean}
     */
    const heap = this.storage;

    let status;
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  insert(value) {
    //append to end, buble up from end
    const heap = this.storage;
    log(red(`${heap}`));
    heap.push(value);
    //bubble up, assign inserted value as child, check if parent meets heap conditions
    log(red(`${heap}`));
    this.bubbleUp();
    //if not, swap parent and child
  }
  bubbleUp() {
    const heap = this.storage;
    const lastIndex = heap.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
      log(blue(`${this.type}`));
      //bubble up, assign inserted value as child, check if parent meets heap conditions
      let parentIndex = Math.floor((childIndex - 1) / 2);

      let child = heap[i]; //index
      let parent = heap[parentIndex];

      log(blue(`${heap[parentIndex]}, ${heap[childIndex]}`));
      if (this.type === "max") {
        if (child > parent) {
          this.swap([child, parent]);

          //[ heap[parentIndex], heap[childIndex] ] = [ heap[childIndex], heap[parentIndex] ];
          //if parent doesnt meet condition, swap value and parent
          log(green(`swapped`), red(`${heap}`));
        }
      }
      if (this.type === "min") {
        //if min heap, child index should be larger than parent index, otherwise swap
        if (child < parent) {
          this.swap([parent, child]);
          log(green(`swapped`), red(`${heap}`));
        }
      }
    }
  }
  insert2(value) {
    console.log("insert method executed");
    /**insert:   inserts a number into the heap.
 *                    Input:     {Number}
 *                   Output:     {undefined}                      0,1, 2, 3,   4,  5,  6
 *   [24, 23, 15, 13, 2, 0, 12, 4] =>14                         [4,13, 12, 14, 23, 24, 26]
 *                                                               [4,13,12,14,15,23,24,26]
 *                                                        
 *                24                                                         4
 *              /    \            [child1] = 2[p]+ 1                       /   \
 *            23     15          [child2] = 2[p] + 2                     13    12
 *           / \     / \         [parent]  = floor([c]-1/2)             / \    / \
 *         13   2   0   12                                           14  15  23  24
 *        /  \                                                       /
 *      4   14                                                      26
 * 
iterate loop again rebalancing base on parent to child formula, starting at insert index
 * 
     */
    const heap = this.storage;
    //parent index equals floor of (value index-1)/2
    //access value index by getting index of, searching from

    //append to end, buble up from end
    //bubble up, assign inserted value as child, check if parent meets heap conditions
    //if not, swap parent and child

    let insertedIndex;

    for (let i = 0; i <= heap.length; i++) {
      const parent = heap[i];
      console.log(this.type, `type of heap`);
      if (this.type === "min") {
        if (parent > value || parent === undefined) {
          console.log(heap, ` :heap pre mutation`);
          heap.splice(i, 0, value);
          console.log(heap, ` :heap post mutation`);
          insertedIndex = i;
          //console.log(value, heap);
          break;
        }
      } else if (this.type === "max") {
        if (parent < value || parent === undefined) {
          if (heap.length === 0) {
            heap.push(value);
            console.log(`pushed into head:`, heap);
          } else {
            console.log(heap, ` :heap pre mutation`);
            heap.splice(i, 0, value);
            console.log(`heap after mutations:`, heap);
          }
          insertedIndex = i;
          break;
        }
      }
    }
    this.rebalance(insertedIndex);
  }
  /**
   *                 Output:     {undefined}                      0,1, 2, 3,   4,  5,  6
   *   [24, 23, 15, 13, 2, 0, 12, 4] =>14                         [4,13, 12, 14, 23, 24, 26]
   *                                                               [4,13,12,14,15,23,24,26]
   *               max                                         				min
   *                24                                                         4
   *              /    \            [child1] = 2[p]+ 1                       /   \
   *            23     15          [child2] = 2[p] + 2                     13    12
   *           / \     / \         [parent]  = floor([c]-1/2)             / \    / \
   *         13   2   0   12                                           14  15  23  24
   *        /  \                                                       /
   *      4   14                                                      26
   *
   */

  // Time Complexity:
  // Auxiliary Space Complexity:
  peek() {
    /**
 *           peek:   returns the top item in the heap

 *                   Input:      N/A
 *                   Output:     {Number}
 *    
     */
    //check heap type, if max, return first ele, if min return first ele
    if (this.type === "max" || this.type === "min") {
      //console.log(this.storage);

      return this.storage[0];
    }
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  // Time Complexity:
  // Auxiliary Space Complexity:
  removePeak() {
    /**
     *         removePeak:   removes the top element from the heap
     *                    Input:      N/A
     *                   Output:     {Number}
     *
     * [24, 23, 15, 13, 2, 0, 12, 4] =>14                         [4,13, 12, 14, 23, 24, 26]
     *
     *                24                                                       4
     *              /    \            [child1] = 2[p]+ 1                       /   \
     *            23     15          [child2] = 2[p] + 2                     13    12
     *           / \     / \         [parent]  = floor([c]-1/2)             / \    / \
     *         13   2   0   12                                          14  23  24  26
     *        /  \
     *      4   14                                                   [13, 12, 14, 23, 24, 26]
     *
     *   [ 23, 15, 13, 2, 0, 12, 4]                                     13
     *                                                                  / \
     *                 23                                             12   14
     *                 / \                                              / \   / \
     *               15   13                                           23  24 26
     *              / \   / \
     *             2   0  12 4
     *
     *
     *
     */
    const heap = this.storage;
    console.log(`heap pre peek removal: `, red(heap));
    const lastIndex = heap.length - 1;
    //swap first and last index
    [heap[0], heap[lastIndex]] = [heap[lastIndex], heap[0]];
    log(`heap post peek swap: `, red(heap));
    //remove last index, store as in variable
    const peak = heap.pop();
    //bubble down peak
    this.rebalance();
    console.log(`heap post peek removal/rebalance:`, red(heap));
    return peak;
    //return variable

    // for (let i = 1; i < this.storage.length; i++) {
    // 	let parent = this.storage[i];
    // 	let child1 = this.storage[2 * i + 1];
    // 	let child2 = this.stroage[2 * i + 2];
    // 	if (this.type === 'maxheap') {
    // 		if (parent < child1) [ parent, child1 ] = [ child1, parent ];
    // 		if (parent < child2) [ parent, child2 ] = [ child2, parent ];
    // 	} else if (this.type === 'minheap') {
    // 		if (parent > child1) [ parent, child1 ] = [ child1, parent ];
    // 		if (parent > child2) [ parent, child2 ] = [ child2, parent ];
    // 	}
    // }
  }
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

function assert(count, name, test) {
  if (!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, "*"];
  } else {
    count[1]++;
  }

  let pass = "false";
  let errMsg = null;
  try {
    if (test()) {
      pass = " true";
      count[0]++;
    }
  } catch (e) {
    errMsg = e;
  }
  console.log("  " + (count[1] + ")   ").slice(0, 5) + pass + " : " + name);
  if (errMsg !== null) {
    console.log("       " + errMsg + "\n");
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log("Heap Class");
let testCount = [0, 0];

assert(testCount, "able to create an instance", () => {
  let heap = new Heap();
  return typeof heap === "object";
});

assert(testCount, "has storage property", () => {
  let heap = new Heap();
  return heap.hasOwnProperty("storage");
});

assert(testCount, "has type property", () => {
  let heap = new Heap();
  return heap.hasOwnProperty("type");
});

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("Heap compare method");
testCount = [0, 0];

assert(testCount, "has compare method", () => {
  let heap = new Heap();
  return Object.prototype.toString.apply(heap.compare) === "[object Function]";
});

assert(
  testCount,
  "returns true for minheap if element at first argument index is less than element at second argument index",
  () => {
    let heap = new Heap("min");
    heap.storage.push(1);
    heap.storage.push(10);
    return heap.compare(0, 1) === true;
  }
);

assert(
  testCount,
  "returns false for minheap if element at first argument index is greater than element at second argument index",
  () => {
    let heap = new Heap("min");
    heap.storage.push(10);
    heap.storage.push(1);
    return heap.compare(0, 1) === false;
  }
);

assert(
  testCount,
  "return true for maxheap if element at first argument index is greater than element at second argument index",
  () => {
    let heap = new Heap("max");
    heap.storage.push(10);
    heap.storage.push(1);
    return heap.compare(0, 1) === true;
  }
);

assert(
  testCount,
  "return false for maxheap if element at first argument index is less than element at second argument index",
  () => {
    let heap = new Heap("max");
    heap.storage.push(1);
    heap.storage.push(10);
    return heap.compare(0, 1) === false;
  }
);

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("Heap insert method");
testCount = [0, 0];

assert(testCount, "has insert method", () => {
  let heap = new Heap();
  return Object.prototype.toString.apply(heap.insert) === "[object Function]";
});

assert(testCount, "should be able to insert a single element", () => {
  let heap = new Heap();
  heap.insert(5);
  return heap.storage[0] === 5;
});

assert(testCount, "minimum value should be on top of a minheap", () => {
  let heap = new Heap("min");
  heap.insert(5);
  heap.insert(10);
  heap.insert(7);
  heap.insert(1);
  heap.insert(8);
  heap.insert(6);
  return heap.storage[0] === 1;
});

assert(testCount, "maximum value should be on top of a maxheap", () => {
  let heap = new Heap("max");
  heap.insert(5);
  heap.insert(10);
  heap.insert(7);
  heap.insert(1);
  heap.insert(8);
  heap.insert(6);
  return heap.storage[0] === 10;
});

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("Heap peek method");
testCount = [0, 0];

assert(testCount, "has peek method", () => {
  let heap = new Heap();
  return Object.prototype.toString.apply(heap.peek) === "[object Function]";
});

assert(testCount, "should return the top element of the heap", () => {
  let heap = new Heap();
  heap.storage.push(1);
  heap.storage.push(5);
  heap.storage.push(10);
  return heap.peek() === 1;
});

assert(testCount, "should return the smallest element for a minheap", () => {
  let heap = new Heap();
  heap.insert(2);
  heap.insert(5);
  heap.insert(10);
  heap.insert(1);
  return heap.peek() === 1;
});

assert(testCount, "should return the largest element for a maxheap", () => {
  let heap = new Heap("max");
  heap.insert(2);
  heap.insert(5);
  heap.insert(10);
  heap.insert(1);
  return heap.peek() === 10;
});

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("Heap removePeak method");
testCount = [0, 0];

assert(testCount, "has removePeak method", () => {
  let heap = new Heap();
  return Object.prototype.toString.apply(heap.removePeak) === "[object Function]";
});

assert(testCount, "should be able to remove a single element", () => {
  let heap = new Heap();
  heap.insert(5);
  heap.removePeak();
  return heap.storage.length === 0;
});

assert(testCount, "should be able to remove and return min", () => {
  let heap = new Heap("min");
  heap.storage = [1, 2, 7, 4, 9, 10, 8, 6];
  let example = heap.removePeak();
  return example === 1 && arraysEqual([2, 4, 7, 6, 9, 10, 8], heap.storage);
});

assert(testCount, "should be able to remove and return max", () => {
  let heap = new Heap("max");
  heap.storage = [10, 9, 6, 8, 3, 5, 2, 7];
  let example = heap.removePeak();
  return example === 10 && arraysEqual([9, 8, 6, 7, 3, 5, 2], heap.storage);
});

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");
