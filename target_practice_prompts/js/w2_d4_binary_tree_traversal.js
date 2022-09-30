/*
 *  Target Practice 07 - BST Traversal
 */

'use strict';

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// DO NOT EDIT
// generate tree from array
/**
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];
 * 
 */
function deserialize(arr) {
    if (arr.length === 0) {
        return null;
    }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for (let i = 1; i < arr.length; i += 2) {
        //step through arr starting at index 1
        let current = queue.shift(); //instatiate current so that you might be able to link othr nodes
        if (arr[i] !== null) {
            //if not null, next item in arra should be placed at current's left (BFS)
            current.left = new TreeNode(arr[i]);
            queue.push(current.left); //then pushed into queue to continue interation
        }
        if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
            //BFS takes the next 2 items in the arr as the parent's children
            current.right = new TreeNode(arr[i + 1]); //
            queue.push(current.right);
        }
    }
    return root;
}

function deserializeLL(arr) {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = new Queue();
    queue.append(root.val);
    let i = 1;
    while (queue.size > 0) {
        //instantiate current by dequeing queue
        //iterate through arr srating at index 1- incrementing up 2
        const current = queue.dequeue();
        if (arr[i]) {
            queue.append(arr[i]);
            current.left = new TreeNode(arr[i]);
        }
        if (arr[i + 1]) {
            queue.append(arr[i + 1]);
            current.right = new TreeNode(arr[i + 1]);
        }
        i += 2;
    }
    return root;
}

/**
 *
 * Deserialize operates by building out the tree in a breadth-first
 * manner. One only needs to build down to the lowest row where there
 * exists nodes. For example, in this tree,
 *
 *          1
 *            \
 *              3
 *   		  /
 *   	    2
 * The array that you would pass in to the deserialize function would
 * be [1,null,3,2,null]. The first null represents the left child of
 * the 1 node, and the second null represents the right child of the 3 node.
 *
 *  1. Here, we have built out the following tree using deserialize:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */

// DO NOT EDIT
const arr = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];

const sampleTree = deserialize(arr);

/**
 *  2. Given the example output binary search tree from Problem 1, what would
 *     the order of values printed be if we used:
 *
 *     a. BREADTH FIRST traversal: [4, 2, 5, 1, 3, 7, 6, 8]
 *     b. PRE-ORDER DEPTH first traversal: [4,2,1,3,5,7,6,8]
 *     c. IN-ORDER DEPTH first traversal:[1,2,3,4,5,6,7,8]
 *     d. POST-ORDER DEPTH first traversal:
 */

/**
 *  3a. Using a queue and while loop write a function that takes the root of a
 *      binary tree node and outputs an array of values ordered by BREADTH
 *      FIRST.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *  NOTE: You may use an array or linked list for your queue.
 *  NOTE: Confirm with your answer from Problem 2a.
 */

class ListNode {
    previous = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
class LinkList {
    head = null;
    tail = null;
    size = 0;
    storage;
    constructor() {
        this.storage = new Map();
    }
    append(value) {
        const node = new ListNode(value);
        if (this.head === null) {
            this.head = node;
            console.log('headnull');
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.updateCache([node.previous]);
        }
        this.tail = node;
        this.size++;
        this.updateCache([this.tail]);
    }
    retrieve(i) {
        let [current, index] = [this.head, 0]; //step through chaning c => c.n
        while (index < i) {
            current = current.next; // incre index until index = i
            index++;
        }
        return current; // return current
    }
    delete(i) {
        //head = 0 index
        if (i > this.size) return null; //iterate until index is i- current will be index to delete
        const node = this.retrieve(i);
        if (node.val === this.head.val) {
            this.storage.delete(head.value);
            this.head = head.next; //head mutated to head.next
            this.head.previous = null;
            this.updateCache([this.head]);
        } else if (node.val === this.tail.val) {
            this.storage.delete(this.tail.value);
            this.tail = this.tail.previous; // update tail to prev
            this.tail.next = null;
            this.updateCache([this.tail]); //update calls in cache
        } else {
            this.storage.delete(node.val);
            node.prev.next = node.next; //remove node by setting node's prev to node's next
            this.updateCache([node.prev, node.next]);
        }
        this.size--;
    }
    updateCache(nodesArr) {
        nodesArr.forEach((node) => {
            if (node) {
                //nullNodes value check
                const { previous, next } = node;
                this.storage.set(node.value, {
                    previous,
                    next,
                });
            }
        });
    }
}
class Queue extends LinkList {
    dequeue() {
        const oldHead = this.retrieve(0);
        this.delete(0);
        return oldHead;
    }
}
function bfs(node) {
    const root = node;
    const queue = new Queue();
    queue.append(root.val);
    const vals = [];
    while (queue.size > 0) {
        const current = queue.dequeue();
        vals.push(current.value);
        if (current.left) queue.append(current.left);
        if (current.right) queue.append(current.right);
    }
    return vals;
}

/*
 *  3b. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */
function dfsPre(node) {
    //preorder is default DFS
    //root get placed in stack first- followed by right child => left child
    if (node === null) return [];
    const root = node;
    const stack = [root];
    let current;
    const values = dfs(stack, []);

    function dfs(stack, values) {
        if (stack.length < 1) return values;
        current = stack.pop();
        values.push(current.value);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        return dfs(stack, values);
    }

    return values;
}

/**
 *  3c. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */
/**
     * function dfsIn(node){
    if (node === null) return [];
    const stack = [node];
    const values = [];
    function traverse(node) {
        if (stack.length < 1) return;
        if (node.left) {
            stack.push(node.left);
        } else {
            const current = stack.pop();
            values.push(current.val);
            if (current.right) stack.push(current.right);
        }
    }

    return values;
}
     */
function dfsIn(node) {
    const stack = [];
    const values = [];
    let current = node;
    while (stack.length > 0 || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        values.push(current.value);
        current = current.right;
    }
    return values;
}

/**
 *  3d. Using recursion, write a function that takes in a tree node and outputs
 *      an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *  Input: node {TreeNode}
 *  Output: {Array}
 *
 *      NOTE: Confirm with your answer from problem 2d.
 */
/**
 * @todo attempt iterativly
 *  */
function dfsPost(node) {
    const values = [];
    if (node === null) return values;
    const stack = [node];
    function traverse(_stack) {
        if (_stack.length < 1) return;
        //if stack ele at last index has no childen, pop off and add to values arr
        //otherwise add children to stack in dfs order
        let current = _stack[_stack.length - 1];
        if (current.right == null && current.left == null) {
            current = _stack.pop();
            values.push(current.value);
        } else {
            if (current.right) _stack.push(current.right);
            if (current.left) _stack.push(current.right);
        }
        traverse(_stack);
    }
    traverse(stack);
    console.log(values);
    return values;
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
    if (!count || !Array.isArray(count) || count.length !== 2) {
        count = [0, '*'];
    } else {
        count[1]++;
    }

    let pass = 'false';
    let errMsg = null;
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

// compare if two flat arrays are equal
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

// generate test tree for the rest of the tests
const test = new TreeNode(4);
test.left = new TreeNode(2);
test.left.left = new TreeNode(1);
test.left.right = new TreeNode(3);
test.right = new TreeNode(5);
test.right.right = new TreeNode(7);
test.right.right.left = new TreeNode(6);
test.right.right.right = new TreeNode(8);

console.log('Problem 1 tests');
let testCount = [0, 0];

assert(testCount, 'able to build tree as indicated in diagram', () => {
    return (
        sampleTree !== null &&
        sampleTree.value === 4 &&
        sampleTree.left.value === 2 &&
        sampleTree.left.left.value === 1 &&
        sampleTree.left.right.value === 3 &&
        sampleTree.right.value === 5 &&
        sampleTree.right.right.value === 7 &&
        sampleTree.right.right.left.value === 6 &&
        sampleTree.right.right.right.value === 8
    );
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('breadth first search tests');
testCount = [0, 0];

assert(
    testCount,
    'able to return values in breadth first order - ' +
        '[4, 2, 5, 1, 3, 7, 6, 8]',
    () => {
        let results = bfs(test);
        return (
            results !== undefined &&
            arraysEqual(results, [4, 2, 5, 1, 3, 7, 6, 8])
        );
    }
);

assert(testCount, 'returns an empty array for an empty tree', () => {
    let results = bfs(deserialize([]));
    return results !== undefined && arraysEqual(results, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('pre-order depth first search tests');
testCount = [0, 0];

assert(
    testCount,
    'able to return values pre-order depth first order - ' +
        '[4, 2, 1, 3, 5, 7, 6, 8]',
    () => {
        let results = dfsPre(test);
        return (
            results !== undefined &&
            arraysEqual(results, [4, 2, 1, 3, 5, 7, 6, 8])
        );
    }
);

assert(testCount, 'returns an empty array for an empty tree', () => {
    let results = dfsPre(deserialize([]));
    return results !== undefined && arraysEqual(results, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('in-order depth first search tests');
testCount = [0, 0];

assert(
    testCount,
    'able to return values pin-order depth first order - ' +
        '[1, 2, 3, 4, 5, 6, 7, 8]',
    () => {
        let results = dfsIn(test);
        return (
            results !== undefined &&
            arraysEqual(results, [1, 2, 3, 4, 5, 6, 7, 8])
        );
    }
);

assert(testCount, 'returns an empty array for an empty tree', () => {
    let results = dfsIn(deserialize([]));
    return results !== undefined && arraysEqual(results, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('post-order depth first search tests');
testCount = [0, 0];

assert(
    testCount,
    'able to return values post-order depth first order - ' +
        '[1, 3, 2, 6, 8, 7, 5, 4]',
    () => {
        let results = dfsPost(test);
        return (
            results !== undefined &&
            arraysEqual(results, [1, 3, 2, 6, 8, 7, 5, 4])
        );
    }
);

assert(testCount, 'returns an empty array for an empty tree', () => {
    let results = dfsPost(deserialize([]));
    return results !== undefined && arraysEqual(results, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
