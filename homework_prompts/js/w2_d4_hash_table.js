/*
<<<<<<< HEAD
 *  Homework - Hash Table
=======
 *  Homework 14 - Hash Table
>>>>>>> a63a631 (yuck)
 *
 *  Problem: Hash Table
 *
 *  Prompt: Create a hash table class using separate chaining.
 *
 *  The HashTable will have the following properties:
 *
 *         storage:  {Array} - an array of arrays.
 *         buckets:  {Integer} - the maximum number of buckets that your
 *                   storage can contain. Initially set to 8.
 *           size:   {Integer} count of key-value pairs in the storage
 *
 *  The HashTable will also have the following methods:
 *
 *           hash:   Method that takes a key and bucket number and provides a
 *                   hashed value. The dbjb2 hashing function has been
 *                   provided.
 *
 *                   Input:      key {String}
 *                   Input:      buckets {Integer}
 *                   Output:     index {Integer}
 *
 *         insert:   Method that adds a key-value pair into the storage. If the
 *                   key already exists, the value should be updated. Use
 *                   separate chaining to handle collisions.
 *
 *                   Input:      key {String}
 *                   Input:      value {String}
 *                   Output:     {Undefined}
 *
 *            get:   Method that given a key, return its corresponding value.
 *                   If the key does not exist, return null.
 *
 *                   Input:      key {String}
 *                   Output:     value {String}
 *
 *         remove:   Method that takes a key as its input, and looks for the
 *                   and removes the key-value pair from the bucket.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *         resize:   If the load factor reaches a critical 0.75 or higher,
 *                   double the number of buckets. If the load factor is 0.25
 *                   or less, half the number of buckets. Make sure the number
 *                   of buckets do not fall below 8 and re-index all key-value
 *                   pairs if bucket size is changed.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *  Input: N/A
 *  Output: A HashTable instance
 */

'use strict';


<<<<<<< HEAD
class HashTable {
 constructor() {
   // YOUR WORK HERE
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 hash(key, buckets) {
   let hash = 5381;
   for (let i = 0; i < key.length; i++) {
     let char = key.charCodeAt(i);
     hash = ((hash << 5) + hash) + char;
   }
   return hash % buckets;
 }


 // Amortized Time Complexity (amortized):
 // Auxiliary Space Complexity (amortized):
 insert(key, value) {
   // YORK WORK HERE
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 get(key) {
   // YOUR WORK HERE
 }


 // Amortized Time Complexity (amortized):
 // Auxiliary Space Complexity (amortized):
 remove(key) {
   // YOUR WORK HERE
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 resize() {
   // YOUR WORK HERE
 }
}


=======
//hash table is associative array
//abstract datatype used to store key value pairs[key, val]
////have a storage of key val pairs
//hash table most common

class HashTable {
  constructor() {
    // YOUR WORK HERE
    this.buckets = 8;
    this.storage = new Array(8).fill([]);
    this.size = 0;
    this.loadFactor = () => {
      return (this.size / this.storage.length)
    }
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  hash(key, buckets) {
    //dbjb2 hashing function has been provided
    //key variable : string
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = (hash << 5) + hash + char;
    }
    return hash % buckets;
  }

  // Amortized Time Complexity (amortized):
  // Auxiliary Space Complexity (amortized):
  insert(key, value) {
    console.log(`insert method invoked`);
    const index = this.hash(key, this.buckets);

    //console.log(`index:`, index,`this.size:`, this.size, `key, val before insert:`, key,value);
      //if more than 0 ele in storage, key exists return  ele with key
    let keyExists = false
      
    //interate though indexOfStorage 
    //if key exists, change key/value par to update with new value
    for (let array of this.storage[index]) {
      
      const keyVal = array;
      const keys = keyVal[0];
      console.log(`does key passed into hash function match key in storage:`,(keys === key));
      if (keys === key) {
        array[1] = value;
        keyExists = true;
        break
      }
    }
    //console.log(`does key inserted exist in buckets:`, keyExists)
    if (keyExists === false) {
        this.storage[index].push([key, value]);
        this.size++;
      }

      //if load has changed, rebalalance
    console.log(`loadFactor:`, this.loadFactor());
    if (this.loadFactor() >= .75 || this.loadFactor() <= .25) this.resize()
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  get(key) {
    console.log(`get method invoked`)
    const index = this.hash(key, this.buckets);
    let value = null;
    //step though indexOfStorage
    //do any values exist at that index; if not return value
    if (this.storage[index].length > 0) {
      //if so iteratethough indexOfStorage
      console.log(`value exists at IndexofStorage`)
      for (let arr of this.storage[index]) {
        let oldKey = arr[0];
        let oldValue = arr[1];
        //if oldKey = newKey, mutate value to new value of that corresonding key}
        if (key === oldKey) value = oldValue;
        console.log(`oldkey = newkey:`, (key === oldKey), `value:`, value)
        break
      }
    }
    return value;
  }

  // Amortized Time Complexity (amortized):
  // Auxiliary Space Complexity (amortized):
  remove(key) {
    console.log(`remove method invoked`)
    const index = this.hash(key, this.buckets);
    const bucketOfArrays = this.storage[index];
    let sizeToReduce = this.size
    
    if (bucketOfArrays[0] !== undefined) {
      console.log(`*** there's something in here***`)
      console.log(this.storage[index]);
      this.storage[index] = bucketOfArrays.reduce(removeArr,[]);

      console.log(this.storage[index])
     
      function removeArr(accum,array){
        let oldKey = array[0];
        if (oldKey !== key) {
          console.log(`keys dont match, returning array`)
          accum.push(array);
        } else sizeToReduce--
        return accum
      }
    }
    this.size = sizeToReduce
    //if greater than 8 decrement buckets
    console.log(`loadFactor:`, this.loadFactor());
    if (this.loadFactor() >= 0.75 || this.loadFactor() <= 0.25) this.resize();
    return undefined
  }

  // Time Complexity:
  // Auxiliary Space Complexity:
  resize() {
    // buckets min set to 8
    console.log(`resize method invoked`)
    const minBuckets = 8;
    let bucketsChanged = false;
    
  
      console.log(`loadFactor:`, this.loadFactor());
      //if load gets to .75 double buckets
      if (this.loadFactor() >= 0.75){
  
        this.buckets = this.buckets * 2;
        bucketsChanged = true;
      }
      if (this.loadFactor() <= 0.25) {
        //if load is .25 or less, set buckets to math.max of 8 or 1/2 of current storage
        //set buckets to  at least 8buckets, but possibly half of current buckets
        const newBuckets = Math.max(minBuckets, Math.floor(this.buckets / 2));

        if (this.buckets !== newBuckets) {
          this.buckets = newBuckets;
          bucketsChanged = true;
        }
      }

      if (bucketsChanged === true) {
        console.log(`reinserting begins`)
        //copy of storage
        const tempStorage = this.storage.slice();
        //clean storage
        
        this.size = 0;
        this.storage = new Array(this.buckets).fill([]);
        console.log(this.storage,this.size, tempStorage)
        // [[], [], [], [], [], [], [], []]; buckets = 8; this.size= 0
        // [[], [[hi, mom], [hi, mom],], [], [], [], [], [], []]; buckets = 8; size = 2

        const reInsert = (bucket)=> {
          //if a value exists in bucket
            if (bucket[0] !== undefined) {
              //step though bucket, reinserting each key/ val pair
              for (const array of bucket) {
              let key = array[0];
              let value = array[1];
                console.log(`this is from iteration of arrs in each bucket`, key, value, this.loadFactor(), this.size, this.buckets)

                //this.insert(key, value);
              }
            }
          }
    //recreate this storage, step though tempstorage, if value exists, reinsert with  new buckets
        for (let i = 0; i < tempStorage.length; i++){
          const bucket = tempStorage[i]
          if (i> tempStorage.length) return
          reInsert(bucket)
        }
    }
  }
}

>>>>>>> a63a631 (yuck)
////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

<<<<<<< HEAD

=======
>>>>>>> a63a631 (yuck)
// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
<<<<<<< HEAD
 if(!count || !Array.isArray(count) || count.length !== 2) {
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
 } catch(e) {
   errMsg = e;
 }
 console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
 if (errMsg !== null) {
   console.log('       ' + errMsg + '\n');
 }
}


=======
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

>>>>>>> a63a631 (yuck)
console.log('HashTable Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
<<<<<<< HEAD
 let hashTable = new HashTable();
 return typeof hashTable === 'object';
});

assert(testCount, 'has storage property', () => {
 let hashTable = new HashTable();
 return hashTable.hasOwnProperty('storage');
});

assert(testCount, 'has buckets property', () => {
 let hashTable = new HashTable();
 return hashTable.hasOwnProperty('buckets');
});

assert(testCount, 'has size property', () => {
 let hashTable = new HashTable();
 return hashTable.hasOwnProperty('size');
});

assert(testCount, 'default storage set to an array', () => {
 let hashTable = new HashTable();
 return Array.isArray(hashTable.storage);
});

assert(testCount, 'default buckets set to 8', () => {
 let hashTable = new HashTable();
 return hashTable.buckets === 8;
});

assert(testCount, 'default size set to 0', () => {
 let hashTable = new HashTable();
 return hashTable.size === 0;
=======
  let hashTable = new HashTable();
  return typeof hashTable === 'object';
});

assert(testCount, 'has storage property', () => {
  let hashTable = new HashTable();
  return hashTable.hasOwnProperty('storage');
});

assert(testCount, 'has buckets property', () => {
  let hashTable = new HashTable();
  return hashTable.hasOwnProperty('buckets');
});

assert(testCount, 'has size property', () => {
  let hashTable = new HashTable();
  return hashTable.hasOwnProperty('size');
});

assert(testCount, 'default storage set to an array', () => {
  let hashTable = new HashTable();
  return Array.isArray(hashTable.storage);
});

assert(testCount, 'default buckets set to 8', () => {
  let hashTable = new HashTable();
  return hashTable.buckets === 8;
});

assert(testCount, 'default size set to 0', () => {
  let hashTable = new HashTable();
  return hashTable.size === 0;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

=======
>>>>>>> a63a631 (yuck)
console.log('HashTable Hash method');
testCount = [0, 0];

assert(testCount, 'has hash method', () => {
<<<<<<< HEAD
 let hashTable = new HashTable();
 return Object.prototype.toString.apply(hashTable.hash) === '[object Function]';
});

assert(testCount, 'should hash a string in to a number less than bucket size', () => {
 let hashTable = new HashTable();
 for(let i = 1; i < 100; i++) {
   let index = hashTable.hash('hello', i);
   if(!Number.isInteger(index) || index >= i) {
     return false;
   }
 }
 return true;
});

assert(testCount, 'should hash same key-bucket combination to the same index', () => {
 let hashTable = new HashTable();
 let index = hashTable.hash('hello', 100000);
 return Number.isInteger(index) && index === hashTable.hash('hello', 100000);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


=======
  let hashTable = new HashTable();
  return (
    Object.prototype.toString.apply(hashTable.hash) === '[object Function]'
  );
});

assert(
  testCount,
  'should hash a string in to a number less than bucket size',
  () => {
    let hashTable = new HashTable();
    for (let i = 1; i < 100; i++) {
      let index = hashTable.hash('hello', i);
      if (!Number.isInteger(index) || index >= i) {
        return false;
      }
    }
    return true;
  }
);

assert(
  testCount,
  'should hash same key-bucket combination to the same index',
  () => {
    let hashTable = new HashTable();
    let index = hashTable.hash('hello', 100000);
    return Number.isInteger(index) && index === hashTable.hash('hello', 100000);
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

>>>>>>> a63a631 (yuck)
console.log('HashTable Insert method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
<<<<<<< HEAD
 let hashTable = new HashTable();
 return Object.prototype.toString.apply(hashTable.insert) === '[object Function]';
});

assert(testCount, 'can insert a key-value pair into hash table', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 let index = hashTable.hash('hello', hashTable.buckets);
 return hashTable.size === 1 &&
   Array.isArray(hashTable.storage[index]) &&
   hashTable.storage[index].length === 1 &&
   hashTable.storage[index][0][0] === 'hello' &&
   hashTable.storage[index][0][1] === 'world';
=======
  let hashTable = new HashTable();
  return (
    Object.prototype.toString.apply(hashTable.insert) === '[object Function]'
  );
});

assert(testCount, 'can insert a key-value pair into hash table', () => {
  let hashTable = new HashTable();
  hashTable.insert('hello', 'world');
  let index = hashTable.hash('hello', hashTable.buckets);
  return (
    hashTable.size === 1 &&
    Array.isArray(hashTable.storage[index]) &&
    hashTable.storage[index].length === 1 &&
    hashTable.storage[index][0][0] === 'hello' &&
    hashTable.storage[index][0][1] === 'world'
  );
>>>>>>> a63a631 (yuck)
});

assert(testCount, 'can insert a second key-value pair into hashtable', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 hashTable.insert('foo', 'bar');
 let index1 = hashTable.hash('hello', hashTable.buckets);
 let index2 = hashTable.hash('foo', hashTable.buckets);
 return hashTable.size === 2 &&
   Array.isArray(hashTable.storage[index1]) &&
   Array.isArray(hashTable.storage[index2]);
});

assert(testCount, 'can overwrite value if key already exists', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 hashTable.insert('hello', 'universe');
 let index = hashTable.hash('hello', hashTable.buckets);
 return hashTable.size === 1 &&
   Array.isArray(hashTable.storage[index]) &&
   hashTable.storage[index].length === 1 &&
   hashTable.storage[index][0][0] === 'hello' &&
   hashTable.storage[index][0][1] === 'universe';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('HashTable Get method');
testCount = [0, 0];

assert(testCount, 'has get method', () => {
 let hashTable = new HashTable();
 return Object.prototype.toString.apply(hashTable.get) === '[object Function]';
});

assert(testCount, 'should return correct value for existing input key', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 return hashTable.get('hello') === 'world';
});

assert(testCount, 'should return null if key does not exist', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 return hashTable.get('cat') === null;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('HashTable Remove method');
testCount = [0, 0];

assert(testCount, 'has remove method', () => {
 let hashTable = new HashTable();
 return Object.prototype.toString.apply(hashTable.remove) === '[object Function]';
});

assert(testCount, 'can remove a key-value pair', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 hashTable.remove('hello');
 return hashTable.size === 0 && hashTable.get('hello') === null;
});

assert(testCount, 'does not remove a key-value pair that does not exist', () => {
 let hashTable = new HashTable();
 hashTable.insert('hello', 'world');
 hashTable.remove('cat');
 let index = hashTable.hash('hello', hashTable.buckets);
 return hashTable.size === 1 &&
   hashTable.storage[index][0][0] === 'hello' &&
   hashTable.storage[index][0][1] === 'world';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('HashTable Resize method');
testCount = [0, 0];

assert(testCount, 'has resize method', () => {
 let hashTable = new HashTable();
 return Object.prototype.toString.apply(hashTable.resize) === '[object Function]';
});

assert(testCount, 'doubles hashtable number of buckets if load factor is ' +
      'equal to or larger than 0.75', () => {
 let hashTable = new HashTable();
 const keys = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
 const values = ['0', '1', '2', '3', '4', '5', '6'];
 for (let i = 0; i < 5; i++) {
   hashTable.insert(keys[i], values[i]);
   if (hashTable.buckets !== 8) { return false; }
 }
 hashTable.insert(keys[5], values[5]);
 if (hashTable.buckets !== 16) { return false; }
 hashTable.insert(keys[6], values[6]);
 return hashTable.buckets === 16;
});

assert(testCount, 'halves buckets if load factor drops equal to or below ' +
                 '25% and bucket length is greater than 8', () => {
 let hashTable = new HashTable();
 const keys = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
 const values = ['0', '1', '2', '3', '4', '5', '6'];
 for (let i = 0; i < keys.length; i++) {
   hashTable.insert(keys[i], values[i]);
 }
 let buckets = hashTable.buckets;
 hashTable.remove('four');
 hashTable.remove('five');
 hashTable.remove('six');
 return buckets === hashTable.buckets * 2;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
