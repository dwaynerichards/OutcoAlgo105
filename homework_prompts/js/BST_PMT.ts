/**
 *  Homework 10 - Patricia Merkle Search Tree
 *  TreeNode class
 *  Prompt:    Create a TreeNode class
 *             The TreeNode class should contain the following properties:
 *                   value:   hash of values of left and right tree value- (default null)
 *                    left:   pointer to another node (initially null)
 *                   right:   pointer to another node (initially null)
 *                 Example:   let sample = new TreeNode(1)
 *                            sample.value   // 1
 *                            sample.left    // null
 *                            sample.right   // null
 *  PatriciaMerkleTree class.
 *  Prompt:    Create a  PMT PatriciaMerkleTree class
 *             The PMT PatriciaMerkleTree class should contain the following
 *             properties:
 *                    root:   A pointer to the root node (initially null)
 *                    size:   The number of nodes in the PatriciaMerkleTree
 *
 *             The PatriciaMerkleTree class should also contain the following
 *             methods:
 *
 *                  insert:   A method that takes takes an integer value, and
 *                            creates a node with the given input.  The method
 *                            will then find the correct place to add the new
 *                            node. Values larger than the current node node go
 *                            to the right, and smaller values go to the left.
 *
 *                            Input:     value
 *                            Output:    undefined
 *
 *                  search:   A method that will search to see if a node with a
 *                            specified value exists and returns true or false
 *                            if found.
 *
 *                            Input:     value
 *                            Output:    boolean
 *             What are the time and auxilliary space complexities of the
 *             various methods?
 *
 */

'use strict';

class TreeNode {
    public left: TreeNode | null = null;
    public right: TreeNode | null = null;
    constructor(public value?: null | number) {}
}

class PatriciaMerkleTree {
    public size: number = 0;
    public root: TreeNode | null = null;
    constructor() {
        // create root node with constructor
        //root node will be tree nide
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    /**
     * @dev Inserts a TreeNode into the Tree. Insertion location is based on the value stored
     * in the parent node. If the Tree has no root, the inserted Node is placed at the root.
     * If a Root exists, a search is implemented though tree until a node with no children is found.
     * If the value of the node is greater than the parent node's value, the new node is placed as
     * the left child on the parent node, otherwise the node is placed as the right child of the parent node.
     */
    insert(value: number) {
        const node = new TreeNode();
        node.value = value;
        if (!this.root) {
            this.root = node;
            this.size++;
            return;
        } else {
            let prev: null | TreeNode;
            let current: null | TreeNode = this.root;
            while (current != null) {
                prev = current;
                node.value! > current.value!
                    ? (current = node.left)
                    : (current = node.right);
            }
            node.value! > prev!.value!
                ? (prev!.left = node)
                : (prev!.right = node);
            this.size++;
        }
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    search(value: number): boolean {
        // YOUR WORK HERE
        //if no root return false
        const { root } = this;
        if (!root) return false;
        //instantiate current = root.val
        let current: TreeNode | null = root;
        //stepo though tree until current = undefined
        while (current != null) {
            if (current.value === value) return true;
            value > current.value!
                ? (current = current!.left)
                : (current = current.right);
        }
        return false;
    }
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('TreeNode Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
    let node = new TreeNode();
    return typeof node === 'object';
});

assert(testCount, 'has value property', () => {
    let node = new TreeNode();
    return node.hasOwnProperty('value');
});

assert(testCount, 'has left property', () => {
    let node = new TreeNode();
    return node.hasOwnProperty('left');
});

assert(testCount, 'has right property', () => {
    let node = new TreeNode();
    return node.hasOwnProperty('right');
});

assert(testCount, 'has default value set to null', () => {
    let node = new TreeNode();
    return node.value === null;
});

assert(testCount, 'able to assign a value upon instantiation', () => {
    let node = new TreeNode(5);
    return node.value === 5;
});

assert(testCount, 'able to reassign a value', () => {
    let node = new TreeNode();
    node.value = 5;
    return node.value === 5;
});

assert(testCount, 'able to point to left child node', () => {
    let node1 = new TreeNode(5);
    let node2 = new TreeNode(10);
    node1.left = node2;
    return node1.left.value === 10;
});

assert(testCount, 'able to point to right child node', () => {
    let node1 = new TreeNode(5);
    let node2 = new TreeNode(10);
    node1.right = node2;
    return node1.right.value === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('Binary Search Tree Class');
testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
    let bst = new PatriciaMerkleTree();
    return typeof bst === 'object';
});

assert(testCount, 'has root property', () => {
    let bst = new PatriciaMerkleTree();
    return bst.hasOwnProperty('root');
});

assert(testCount, 'has size property', () => {
    let bst = new PatriciaMerkleTree();
    return bst.hasOwnProperty('size');
});

assert(testCount, 'default root set to null', () => {
    let bst = new PatriciaMerkleTree();
    return bst.root === null;
});

assert(testCount, 'default size set to zero', () => {
    let bst = new PatriciaMerkleTree();
    return bst.size === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('PatriciaMerkleTree Insert Method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
    let bst = new PatriciaMerkleTree();
    return Object.prototype.toString.apply(bst.insert) === '[object Function]';
});

assert(testCount, 'able to insert a node into empty binary search tree', () => {
    let bst = new PatriciaMerkleTree();
    bst.insert(5);
    return bst.size === 1 && bst.root!.value === 5;
});

assert(testCount, 'able to insert node to left of root node', () => {
    let bst = new PatriciaMerkleTree();
    bst.insert(5);
    bst.insert(3);
    return (
        bst.size === 2 && bst.root!.value === 5 && bst.root!.left!.value === 3
    );
});

assert(
    testCount,
    'able to insert node to right of node left of root node',
    () => {
        let bst = new PatriciaMerkleTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(4);
        return (
            bst.size === 3 &&
            bst.root!.value === 5 &&
            bst.root!.left!.value === 3 &&
            bst.root!.left!.right!.value === 4
        );
    }
);

assert(testCount, 'able to insert node to right of root node', () => {
    let bst = new PatriciaMerkleTree();
    bst.insert(5);
    bst.insert(8);
    return (
        bst.size === 2 && bst.root!.value === 5 && bst.root!.right!.value === 8
    );
});

assert(
    testCount,
    'able to insert node to left of node right of root node',
    () => {
        let bst = new PatriciaMerkleTree();
        bst.insert(5);
        bst.insert(8);
        bst.insert(7);
        return (
            bst.size === 3 &&
            bst.root!.value === 5 &&
            bst.root!.right!.value === 8 &&
            bst.root!.right!.left!.value === 7
        );
    }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('PatriciaMerkleTree Search Method');
testCount = [0, 0];

assert(testCount, 'has search method', () => {
    let bst = new PatriciaMerkleTree();
    return Object.prototype.toString.apply(bst.search) === '[object Function]';
});

assert(
    testCount,
    'returns true when element exists in binary search tree',
    () => {
        let bst = new PatriciaMerkleTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(8);
        bst.insert(4);
        bst.insert(7);
        return bst.search(4) === true;
    }
);

assert(
    testCount,
    'returns false when element does not exist in binary search tree',
    () => {
        let bst = new PatriciaMerkleTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(8);
        bst.insert(4);
        bst.insert(7);
        return bst.search(10) === false;
    }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

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
    let errMsg: Error | null = null;
    try {
        if (test()) {
            pass = ' true';
            count[0]++;
        }
    } catch (e) {
        if (e instanceof Error) errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
    if (errMsg !== null) {
        console.log('       ' + errMsg + '\n');
    }
}
