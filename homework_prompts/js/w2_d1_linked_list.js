/*
<<<<<<< HEAD
 *  Homework - Linked List
=======
 *  Homework 09 - Linked List
>>>>>>> a63a631 (yuck)
 */

/*
 *
 *  ListNode class
 *
 *  Prompt:    Create a ListNode class
 *             The ListNode class should contain the following properties:
 *
 *                 value:   {Integer} (initially null)
 *                  next:   {ListNode} (initially null)
 *
 *               Example:   input: let sample1 = new ListNode(1)
 *                          sample1.value     // 1
 *                          sample1.next      // null
 *
 *               Example:   input: let sample2 = new ListNode()
 *                          sample2.value     // null
 *                          sample2.next      // null
 *
 *
 *  LinkedList class
 *
 *  Prompt:     Create a LinkedList class
 *              The LinkedList class should contain the following properties:
 *
 *                length:   {Integer}
 *                  head:   {ListNode}
 *                  tail:   {ListNode}
 *
 *              The LinkedList class should also contain the following methods:
 *
 *                append:   A method that appends a value to the end of the
 *                          LinkedList.
 *
 *                          Input:     value {Integer}
 *                          Output:    {undefined}
 *
 *                insert:   A method that inserts an integer value at a set
 *                          index in the LinkedList (assume head index is 0).
 *
 *                          Input:     value {Integer}
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *                delete:   A method that removes a node at a specified index.
 *
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *              contains:   A method that checks to see if a value is contained
 *                          in the list.
 *
 *                          Input:     value {Integer}
 *                          Output:    {Boolean}
 *
 */

<<<<<<< HEAD
'use strict';

class ListNode {
  constructor(value) {
=======
"use strict";

class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
>>>>>>> a63a631 (yuck)
    // YOUR WORK HERE
  }
}

<<<<<<< HEAD

class LinkedList {
  constructor() {
    // YOUR WORK HERE
=======
class LinkedList {
  constructor() {
    // YOUR WORK HERE
    this.head = null;
    this.tail = null;
    this.length = 0;
>>>>>>> a63a631 (yuck)
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  append(value) {
    // YOUR WORK HERE
<<<<<<< HEAD
=======
    //create node, passling in value to node
    const node = new ListNode(val);
    let head = this.head;
    while (head !== null) {
      //until head is null
      //initialize next variable
      //save next o head, contine iteration
      const next = head.next;
      head = next;
    }
    head = node;
    this.length += 1;
    //if head is null, make node head,
    //if head isnt ull, iterate though next until next is null
    //make that node's next the created node
>>>>>>> a63a631 (yuck)
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  insert(value, index) {
    // YOUR WORK HERE
<<<<<<< HEAD
=======
    // iterate though list
    //initiaze head as current head
    const node = new ListNode(value);
    if (index === 0 && this.length === 0) {
      this.head = this.tail = node;
      this.length++;
      return;
    }

    let current = this.head;
    let prev = null;
    console.log(value, index, ":value, index");
    while (index > 0) {
      //each lopp mutate current = current.next
      prev = current;
      current = current.next;
      //end of each iteration mutate prev to curent
      //0,1,2
      //  c=1, i=1 p=0
      //    c=2 i=0 p=1
      //exit loop- mutate prev.next to node, mutate node's next to current
      index--;
      console.log(current, prev, ":current, prev");
    }
    prev.next = node;
    node.next = current;
    this.length += 1;
    this.ajustTail(node);
    //iterate, mutating head to head's next until index = index passed in
    ////initia;ize next, place nodde with value at index, next as that node's.next
  }
  ajustTail(node) {
    //iterate until head.next is null
    //make node tail
    console.log("ajusting tail!!!!!!");
    let current = node;
    while (current.next !== null) {
      current = current.next;
    }
    this.tail = node;
>>>>>>> a63a631 (yuck)
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  delete(index) {
    // YOUR WORK HERE
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  contains(value) {
    // YOUR WORK HERE
  }
}

<<<<<<< HEAD

=======
>>>>>>> a63a631 (yuck)
////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

<<<<<<< HEAD

console.log('ListNode Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let node = new ListNode();
  return typeof node === 'object';
});

assert(testCount, 'has value property', () => {
  let node = new ListNode();
  return node.hasOwnProperty('value');
});

assert(testCount, 'has next property', () => {
  let node = new ListNode();
  return node.hasOwnProperty('next');
});

assert(testCount, 'has default value set to null', () => {
=======
console.log("ListNode Class");
let testCount = [0, 0];

assert(testCount, "ale to create an instance", () => {
  let node = new ListNode();
  return typeof node === "object";
});

assert(testCount, "has value property", () => {
  let node = new ListNode();
  return node.hasOwnProperty("value");
});

assert(testCount, "has next property", () => {
  let node = new ListNode();
  return node.hasOwnProperty("next");
});

assert(testCount, "has default value set to null", () => {
>>>>>>> a63a631 (yuck)
  let node = new ListNode();
  return node.value === null;
});

<<<<<<< HEAD
assert(testCount, 'able to assign a value upon instantiation', () => {
=======
assert(testCount, "able to assign a value upon instantiation", () => {
>>>>>>> a63a631 (yuck)
  let node = new ListNode(5);
  return node.value === 5;
});

<<<<<<< HEAD
assert(testCount, 'able to reassign a value', () => {
=======
assert(testCount, "able to reassign a value", () => {
>>>>>>> a63a631 (yuck)
  let node = new ListNode();
  node.value = 5;
  return node.value === 5;
});

<<<<<<< HEAD
assert(testCount, 'able to point to another node', () => {
=======
assert(testCount, "able to point to another node", () => {
>>>>>>> a63a631 (yuck)
  let node1 = new ListNode(5);
  let node2 = new ListNode(10);
  node1.next = node2;
  return node1.next.value === 10;
});

<<<<<<< HEAD
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Class');
testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
  let linkedList = new LinkedList();
  return typeof linkedList === 'object';
});

assert(testCount, 'has head property', () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty('head');
});

assert(testCount, 'has tail property', () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty('tail');
});

assert(testCount, 'has length property', () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty('length');
});

assert(testCount, 'default head set to null', () => {
=======
console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("LinkedList Class");
testCount = [0, 0];

assert(testCount, "able to create an instance", () => {
  let linkedList = new LinkedList();
  return typeof linkedList === "object";
});

assert(testCount, "has head property", () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty("head");
});

assert(testCount, "has tail property", () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty("tail");
});

assert(testCount, "has length property", () => {
  let linkedList = new LinkedList();
  return linkedList.hasOwnProperty("length");
});

assert(testCount, "default head set to null", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  return linkedList.head === null;
});

<<<<<<< HEAD
assert(testCount, 'default tail set to null', () => {
=======
assert(testCount, "default tail set to null", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  return linkedList.tail === null;
});

<<<<<<< HEAD
assert(testCount, 'default length set to zero', () => {
  let linkedList = new LinkedList();
  return linkedList.length === 0;
});
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Insert Method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
  let linkedList = new LinkedList();
  return Object.prototype.toString.apply(linkedList.insert) === '[object Function]';
});

assert(testCount, 'able to insert a node into empty linked list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  return linkedList.length === 1 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 5;
});

assert(testCount, 'able to insert a node after another node', () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  linkedList.insert(10, 1);
  return linkedList.length === 2 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 10;
});

assert(testCount, 'able to insert a node before another node', () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  linkedList.insert(10, 0);
  return linkedList.length === 2 &&
         linkedList.head.value === 10 &&
         linkedList.tail.value === 5;
});

assert(testCount, 'able to insert a node in between two nodes', () => {
=======
assert(testCount, "default length set to zero", () => {
  let linkedList = new LinkedList();
  return linkedList.length === 0;
});
console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("LinkedList Insert Method");
testCount = [0, 0];

assert(testCount, "has insert method", () => {
  let linkedList = new LinkedList();
  return (
    Object.prototype.toString.apply(linkedList.insert) === "[object Function]"
  );
});

assert(testCount, "able to insert a node into empty linked list", () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  return (
    linkedList.length === 1 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 5
  );
});

assert(testCount, "able to insert a node after another node", () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  linkedList.insert(10, 1);
  return (
    linkedList.length === 2 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 10
  );
});

assert(testCount, "able to insert a node before another node", () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  linkedList.insert(10, 0);
  return (
    linkedList.length === 2 &&
    linkedList.head.value === 10 &&
    linkedList.tail.value === 5
  );
});

assert(testCount, "able to insert a node in between two nodes", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.insert(5, 0);
  linkedList.insert(10, 1);
  linkedList.insert(7, 1);
<<<<<<< HEAD
  return linkedList.length === 3 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 10 &&
         linkedList.head.next.value === 7;
});

assert(testCount, 'does not insert a node if index is out of bounds linked list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(5, -1);
  linkedList.insert(10, 3);
  return linkedList.length === 0 &&
         linkedList.head === null &&
         linkedList.tail === null;
});
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Append Method');
testCount = [0, 0];

assert(testCount, 'has append method', () => {
  let linkedList = new LinkedList();
  return Object.prototype.toString.apply(linkedList.append) === '[object Function]';
});

assert(testCount, 'able to append a node into empty linked list', () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  return linkedList.length === 1 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 5;
});

assert(testCount, 'able to append a second node', () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  return linkedList.length === 2 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 10;
});

assert(testCount, 'able to append a third node', () => {
=======
  return (
    linkedList.length === 3 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 10 &&
    linkedList.head.next.value === 7
  );
});

assert(
  testCount,
  "does not insert a node if index is out of bounds linked list",
  () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, -1);
    linkedList.insert(10, 3);
    return (
      linkedList.length === 0 &&
      linkedList.head === null &&
      linkedList.tail === null
    );
  }
);
console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("LinkedList Append Method");
testCount = [0, 0];

assert(testCount, "has append method", () => {
  let linkedList = new LinkedList();
  return (
    Object.prototype.toString.apply(linkedList.append) === "[object Function]"
  );
});

assert(testCount, "able to append a node into empty linked list", () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  return (
    linkedList.length === 1 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 5
  );
});

assert(testCount, "able to append a second node", () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  return (
    linkedList.length === 2 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 10
  );
});

assert(testCount, "able to append a third node", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.append(15);
<<<<<<< HEAD
  return linkedList.length === 3 &&
         linkedList.head.value === 5 &&
         linkedList.tail.value === 15;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Delete Method');
testCount = [0, 0];

assert(testCount, 'has delete method', () => {
  let linkedList = new LinkedList();
  return Object.prototype.toString.apply(linkedList.delete) === '[object Function]';
});

assert(testCount, 'able to delete a node from the head', () => {
=======
  return (
    linkedList.length === 3 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 15
  );
});

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("LinkedList Delete Method");
testCount = [0, 0];

assert(testCount, "has delete method", () => {
  let linkedList = new LinkedList();
  return (
    Object.prototype.toString.apply(linkedList.delete) === "[object Function]"
  );
});

assert(testCount, "able to delete a node from the head", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.delete(0);
  return linkedList.length === 1 && linkedList.head.value === 10;
});

<<<<<<< HEAD
assert(testCount, 'able to delete a node from the tail', () => {
=======
assert(testCount, "able to delete a node from the tail", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.delete(1);
  return linkedList.length === 1 && linkedList.tail.value === 5;
});

<<<<<<< HEAD
assert(testCount, 'able to delete a node in between two nodes', () => {
=======
assert(testCount, "able to delete a node in between two nodes", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.append(15);
  linkedList.delete(1);
<<<<<<< HEAD
  return linkedList.length === 2 && linkedList.head.value === 5 &&
         linkedList.tail.value === 15;
});

assert(testCount, 'able to delete the only node in a linked list', () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.delete(0);
  return linkedList.length === 0 && linkedList.head === null &&
         linkedList.tail === null;
});

assert(testCount, 'does not delete a node when the index is out of bounds', () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.delete(-1);
  linkedList.delete(2);
  return linkedList.length === 1 && linkedList.head.value === 5 &&
         linkedList.tail.value === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Contains Method');
testCount = [0, 0];

assert(testCount, 'has contains method', () => {
  let linkedList = new LinkedList();
  return Object.prototype.toString.apply(linkedList.contains) === '[object Function]';
});

assert(testCount, 'returns true if linked list contains value', () => {
=======
  return (
    linkedList.length === 2 &&
    linkedList.head.value === 5 &&
    linkedList.tail.value === 15
  );
});

assert(testCount, "able to delete the only node in a linked list", () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.delete(0);
  return (
    linkedList.length === 0 &&
    linkedList.head === null &&
    linkedList.tail === null
  );
});

assert(
  testCount,
  "does not delete a node when the index is out of bounds",
  () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.delete(-1);
    linkedList.delete(2);
    return (
      linkedList.length === 1 &&
      linkedList.head.value === 5 &&
      linkedList.tail.value === 5
    );
  }
);

console.log("PASSED: " + testCount[0] + " / " + testCount[1], "\n\n");

console.log("LinkedList Contains Method");
testCount = [0, 0];

assert(testCount, "has contains method", () => {
  let linkedList = new LinkedList();
  return (
    Object.prototype.toString.apply(linkedList.contains) === "[object Function]"
  );
});

assert(testCount, "returns true if linked list contains value", () => {
>>>>>>> a63a631 (yuck)
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.append(15);
  return linkedList.contains(15) === true;
});

<<<<<<< HEAD
assert(testCount, 'returns false if linked list does not contains value', () => {
  let linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.append(15);
  return linkedList.contains(8) === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1]);

=======
assert(
  testCount,
  "returns false if linked list does not contains value",
  () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    return linkedList.contains(8) === false;
  }
);

console.log("PASSED: " + testCount[0] + " / " + testCount[1]);
>>>>>>> a63a631 (yuck)

// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if (!count || !Array.isArray(count) || count.length !== 2) {
<<<<<<< HEAD
    count = [0, '*'];
=======
    count = [0, "*"];
>>>>>>> a63a631 (yuck)
  } else {
    count[1]++;
  }

<<<<<<< HEAD
  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
=======
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
>>>>>>> a63a631 (yuck)
  }
}
