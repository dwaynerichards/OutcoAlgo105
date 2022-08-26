import chalk from 'chalk';
const redChalk = (string) => {
    console.log(chalk.red(string));
};

const greenChalk = (string) => {
    console.log(chalk.green(string));
};

/*
 * Homework 15 - LRU Cache
 */

/*
 *
 *  Instructions: LRU Cache is a popular and challenging algorithm question
 *                commonly asked during whiteboarding and tech screen sessions.
 *
 *                While difficult, this exercise is a good problem to test your
 *                ability to build and manipulate data structures.
 *
 *
 *  LRU Cache
 *
 *                Design and implement a data structure for a Least Recently
 *                Used (LRU) Cache.
 *
 *                This implementation involves a doubly linked list and a hash map.
 *
 *          NOTE: A LRU caching scheme is designed to remove the least recently
 *                used item when a new item is added to the cache which is
 *                currently at or has just reached capacity.
 *
 *                An item is considered to be recently used if it has just been
 *                accessed or added.
 *
 *          I.  Node Class
 *              Create a Node class
 *
 *              The Node class should contain the following properties:
 *              key: {Integer}
 *              value: {Integer}
 *              previous: {Node} (initially None)
 *              next: {Node} (initially None)
 *
 *         II.  LRUCache Class
 *              Create an LRUCache class
 *
 *              The LRUCache class should contain the following properties:
 *              capacity: {Integer}
 *              count: {Integer} (initially 0)
 *              cache: {Hash Table} The keys represent unique ids of each node,
 *                                  and the values represent the node objects
 *                                  that possess those keys.
 *              head: {Node}
 *              tail: {Node}
 *
 *     Your LRU cache should have the following methods:
 *
 *      get(key): Retreives a value from the cache (will always be positive) at
 *                the key if the key exists in the cache, otherwise returns -1.
 *
 * set(key,value): Inserts the value at the key or creates a new key:value entry
 *                if key is not present. When the cache reaches its capacity, it
 *                should invalidate the least recently used item before
 *                inserting a new item.
 *
 *          HINT: Consider what data structure(s) might be neccessary to
 *                implement the LRU Cache
 *
 *     Example:
 *     lruCache = new LRUCache(3);
 *     lruCache.set('doc', 'david');
 *     lruCache.set('cpo', 'joshua');
 *     lruCache.set('ceo', 'andy');
 *
 *     lruCache.get('doc'); => 'david'
 *     lruCache.set('swe', 'ron');
 *     lruCache.get('cpo'); => -1
 *
 *
 */

('use strict');

/**
 *   I.  Node Class
 *              Create a Node class
 *
 *              The Node class should contain the following properties:
 *              key: {Integer}
 *              value: {Integer}
 *              previous: {Node} (initially None)
 *              next: {Node} (initially None)
 */

class Node {
    constructor(key, value) {
        // YOUR WORK HERE
        this.key = key;
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(capacity, count = 0, _cache = {}) {
        // YOUR WORK HERE
        this.capacity = capacity;
        this.count = count;
        this.cache = _cache;
        this.head = null;
        this.tail = null;
        console.log('NEW LRU', this);
    }

    addNode(node) {
        if (this.head === null) {
            this.head = this.tail = node;
            //console.log('this inside of addNode', this);
        } else {
            //if head, move node to head
            this.moveToHead(node);
        }
        this.cache[node.key] = node;
        //console.log(this.cache);
    }

    removeNode(node) {
        console.log('removing Node');
        let currentNode = node;
        let visited = this.head;
        while (visited.key !== currentNode.key) {
            //step though ll looking for node
            if (visited.next === null) break;
            visited = visited.next;
        }
        this.removeChainLink(visited);
    }
    removeChainLink(node) {
        redChalk(`removing ${node.key}'s link`);
        const currentNodeNext = node.next ? node.next : null;
        if (node.previous) {
            const previousNode = node.previous;
            previousNode.next = currentNodeNext;
        }
    }
    moveToHead(node) {
        greenChalk(`moving ${node.key} to head`);
        this.removeChainLink(node);
        //set prev node's next to current node's next, maintaining chain
        //store old head in const
        const prevHead = this.head;
        prevHead.prev = node;
        redChalk(`${prevHead.key}'s prev now set to ${node.key}`);
        this.head = node;
        //assign curent node's next to previous head; assign currentNodes's prev to null
        node.next = prevHead;
        node.previous = null;
        //reassign head to currentNode
    }

    removeFromTail() {
        greenChalk(`removing Tail ${this.tail.key}`);
        const tailsKey = this.tail.key;
        const tail = this.tail;
        console.log(`tail's next :`, tail.next);
        this.tail = tail.previous;
        delete this.cache[tailsKey];
    }

    get(key) {
        console.log('current tail', this.tail?.key);
        greenChalk(`getting ${key}`);
        let returnVal = -1;
        //it cache, find key
        for (let cacheKey in this.cache) {
            if (cacheKey === key) {
                const currentNode = this.cache[key];
                //add node as new head of ll

                const tailPrev = this.tail.prev;
                this.moveToHead(currentNode);
                this.tail = tailPrev;
                //after moving to head, make currenthead's previous
                //the new tail
                returnVal = currentNode.value;
                break;
            }
        }
        greenChalk(`return val from Get  ${returnVal}`);
        return returnVal;
    }

    set(key, value) {
        //if count is less than cap, check if key exists in obj
        console.log(`setting ${key} ${value}`);
        if (this.count < this.capacity) {
            //if key exists in obj, mutate value at key
            if (key in this.cache) {
                console.log(`key's in cache`);
                const oldNode = this.cache[key];
                const node = new Node(key, value);
                //this.cache[key] = node;
                //add new node
                this.addNode(node);
                //remove old node
                this.removeNode(oldNode);
                //add value at apporiate node
            } else {
                //if key doenst exist in obj, add to key/val to cache
                const node = new Node(key, value);
                this.addNode(node);
                //increment count
                this.count++;
                console.log(this.count);
            }
        } else {
            //check count, if greater than cap
            greenChalk(`over cap`);
            this.removeFromTail();
            //if count is equal to cap, remove last added item/tail
            //add node
            const node = new Node(key, value);
            this.addNode(node);
        }
    }
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('LRU Cache tests');
var testCount = [0, 0];

assert(testCount, 'should be able to set and get key-value pairs', function () {
    var lruCache = new LRUCache(3);
    lruCache.set('doc', 'david');
    lruCache.set('cpo', 'joshua');
    lruCache.set('ceo', 'andy');
    var example1 = lruCache.get('doc');
    var example2 = lruCache.get('cpo');
    var example3 = lruCache.get('ceo');
    return example1 === 'david' && example2 === 'joshua' && example3 === 'andy';
});

assert(
    testCount,
    'should be able overwrite values with same keys when using set method',
    function () {
        var lruCache = new LRUCache(3);
        lruCache.set('student', 'henry');
        lruCache.set('student', 'eliza');
        var example = lruCache.get('student');
        return example === 'eliza';
    }
);

assert(
    testCount,
    'old key value pairs should be removed when capacity has been exceeded',
    function () {
        var lruCache = new LRUCache(3);
        lruCache.set('dentist', 'akali');
        lruCache.set('doctor', 'swain');
        lruCache.set('lawyer', 'kennan');
        lruCache.set('judge', 'leona');
        return lruCache.get('dentist') === -1;
    }
);

assert(
    testCount,
    'most recently modified/viewed items should be moved to front of LRU cache while stale items are moved to end',
    function () {
        var lruCache = new LRUCache(3);
        lruCache.set('doc', 'david');
        lruCache.set('cpo', 'joshua');
        lruCache.set('ceo', 'andy');
        lruCache.get('doc');
        lruCache.set('swe', 'ron');
        return lruCache.get('cpo') === -1;
    }
);

assert(
    testCount,
    'should be able to replace multiple stale items',
    function () {
        var lruCache = new LRUCache(3);
        lruCache.set('one', 1);
        lruCache.set('two', 2);
        lruCache.set('three', 3);
        lruCache.set('four', 4);
        lruCache.set('five', 5);
        lruCache.set('six', 6);
        var ex1 = lruCache.get('one');
        var ex2 = lruCache.get('two');
        var ex3 = lruCache.get('three');
        var ex4 = lruCache.get('four');
        var ex5 = lruCache.get('five');
        var ex6 = lruCache.get('six');
        return (
            ex1 === -1 &&
            ex2 === -1 &&
            ex3 === -1 &&
            ex4 === 4 &&
            ex5 === 5 &&
            ex6 === 6
        );
    }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = arr1.length; i--; ) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed
function assert(count, name, test) {
    if (!count || !Array.isArray(count) || count.length !== 2) {
        count = [0, '*'];
    } else {
        count[1]++;
    }

    var pass = 'false';
    var errMsg = null;
    try {
        if (test()) {
            pass = ' true';
            count[0]++;
        }
    } catch (e) {
        errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
    if (errMsg !== null) {
        console.log('       ' + errMsg + '\n');
    }
}
