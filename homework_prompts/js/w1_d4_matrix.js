import chalk from 'chalk';
const { log } = console;
const { red, yellow, blue, green } = chalk;

/*
 *  Homework 17 - Matrices
 *
 *  Prompt: Create a Matrix class
 *
 *  The Matrix will take in the following input:
 *
 *               m:    {Integer} - represents the number of ROWS
 *               n:    {Integer} - represent the number of COLUMNS
 *
 *  The Matrix will have the following properties:
 *
 *         storage:    {Array of Arrays of Integers} - stores of numbers within matrix
 *               m:    {Integer} - represents the number of ROWS
 *               n:    {Integer} - represent the number of COLUMNS
 *
 *  The Matrix will have the following methods:
 *
 *          isValid:   checks whether given coordinates are within the matrix
 *
 *                   Input:      i {Integer} - row index
 *                   Input:      j {Integer} - column index
 *                  Output:        {Boolean}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.isValid(1, 1)
 *
 *                 result == true
 *
 *                 matrix.isValid(100, 1)
 *
 *                 result == false
 *
 *
 *       initialize:   takes in a valid array of arrayOfArrays, and
 *
 *                   Input: arrayOfArrays {Array of Arrays of Integers}
 *
 *                  Output:        {undefined / void}
 *
 *                 Example:
 *
 *                 matrix.intitialize([[0, 1, 2],
 *                                     [3, 4, 5],
 *                                     [6, 7, 8]])
 *
 *
 *                 result:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.m == 3
 *
 *                 matrix.n == 3
 *
 *
 *            print:   optional method to print the contents of a matrix's storage
 *                     prints each row of the matrix on a new line.
 *
 *                   Input: N/A {undefined / void}
 *
 *                  Output:        {undefined / void}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *
 *                 console:
 *
 *                 [0, 1, 2]
 *                 [3, 4, 5]
 *                 [6, 7, 8]
 *
 *
 *           insert:   inserts an integer into the given coordinates
 *                    returns true if insertion was successful
 *                    returns false otherwise
 *
 *                   Input:      i {Integer}
 *                   Input:      j {Integer}
 *                   Input:    val {Integer}
 *                  Output:        {Boolean}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.insert(1, 1, 400)
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 400, 5],
 *                                    [6, 7, 8]]
 *
 *                 result == true
 *
 *
 *                 matrix.insert(100, 1, 400)
 *
 *                 matrix.storage = [[0, 1, 2],
 *                                   [3, 4, 5],
 *                                   [6, 7, 8]]
 *
 *                 result == false
 *
 *
 *         retrieve:   returns value stored at given coordinates
 *                     returns -Infinity / Integer.MIN_VALUE if coordinates are invalid
 *
 *                   Input:      i {Integer} - row index
 *                   Input:      j {Integer} - column index
 *                  Output:        {Integer}
 *
 *                  Example:
 *
 *                  matrix.storage == [[0, 1, 2],
 *                                     [3, 4, 5],
 *                                     [6, 7, 8]]
 *
 *                  matrix.retrieve(1, 1)
 *
 *                  result == 4
 *
 *
 *            scale:   multiplies every value in the matrix by some constant factor
 *                     returns undefined / void
 *
 *                    Input:  factor {Integer} - amount each entry will be multiplied by
 *                    Output:         {undefined}
 *
 *                   Example:
 *
 *                   matrix.storage == [[1, 1, 1],
 *                                      [1, 1, 1],
 *                                      [1, 1, 1]]
 *
 *                   matrix.scale(5)
 *
 *                   matrix.storage == [[5, 5, 5],
 *                                      [5, 5, 5],
 *                                      [5, 5, 5]]
 *
 *
 *             fill:   sets every entry in the matrix equal to input value
 *                     returns undefined / void
 *
 *                   Input:     val {Integer} - value to be inserted throughout matrix
 *                  Output:         {undefined}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.fill(1)
 *
 *                 matrix.storage == [[1, 1, 1],
 *                                    [1, 1, 1],
 *                                    [1, 1, 1]]
 *
 *
 *          flatten:   returns an array containing all the elements in the matrix if traversed row by row
 *
 *                   Input:      N/A
 *                  Output:     {Array of Integers}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.flatten()
 *
 *                 result == [0, 1, 2, 3, 4, 5, 6, 7, 8]
 *
 *
 *            slice:   returns a new Matrix representing a subset of the original matrix
 *                     it's rows are bounded by the first two-element array input
 *                     it's columns are bounded by the second two-element array input
 *
 *                     NOTE: If the rowRange or colRange is larger than the original matrix
 *                           just return the bounds of the original matrix
 *
 *                     NOTE: Think about how much you'll have to offset insertions into the new matrix
 *
 *                    Input:      rowRange {Array of Two Integers}
 *                    Input:      colRange {Array of Two Integers}
 *                   Output:     {Matrix}
 *
 *                 Example:
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5],
 *                                    [6, 7, 8]]
 *
 *                 matrix.slice([0, 2], [0, 2])
 *
 *                 result == [[0, 1],
 *                            [3, 4]]
 *
 *
 *        transpose:   returns a new Matrix representing the transpose of the original matrix
 *                     The transpose of a matrix is like flipping a matrix along its diagonal axis
 *
 *                     Link to Wikipedia:
 *                     NOTE: if the original matrix was M x N, the new one will be N x M
 *
 *                    Input:      N/A
 *                   Output:     {Matrix}
 *
 *                 matrix.storage == [[0, 1, 2],
 *                                    [3, 4, 5]]
 *
 *                 matrix.transpose()
 *
 *                 result == [[0, 3],
 *                            [1, 4],
 *                            [2, 5]]
 *
 *
 *
 *         mulitply:   returns a new Matrix representing the matrix multiplication of original matrix
 *                     by the input matrix.
 *
 *                     Link to Wikipedia:
 *                     NOTE: if the original matrix was M x N, 
 * 														the input one MUST be N x K // N will be K[1] columns
 * 									
 *                           the result matrix will then be M x K dimensions//retaining M rows
 *
 *                    Input:      matrix {Matrix}
 *                   Output:     {Matrix}
 *
 *                 matrix.storage == [[4, 1, 3],
 *                                    [3, 2, 5]]
 * 								When we do multiplication:

The number of columns of 1st matrix must equal number of rows of 2nd matrix.
mxn * n*K

And the result will have the same number of rows as the 1st matrix,
 and the same number of columns as the 2nd matrix.
 mxn * n*K == m x k
 *
 *                 matrix.multiply([[8, 9],
 *                                  [7, 10],
 *                                  [0, 6]])
 *
 *                 result == [[39, 64],
 *                            [38, 77]]
 *
 *                 Reasoning:
 *                          [[(4 * 8) + (1 * 7) + (3 * 0),    (4 * 9) + (1 * 10) + (3 * 6)],
 *												for each row:	each n/column indice multiplies by same corresponsing index of input arr
 *                           [(3 * 8) + (2 * 7) + (5 * 0),    (3 * 9) + (2 * 10) + (5 * 6)]]
 *
 *
 *                      =>  [[32 + 7 + 0,   36 + 10 + 18],
 *
 *                           [24 + 14 + 0,  27 + 20 + 30]]
 *
 *
 *                      =>  [[39, 64],
 *                           [38, 77]]
 */

class Matrix {
  constructor(m, n) {
    this.m = m; //num of (rows)=> each row is an arr
    this.n = n; //num of (columns) => each columb is the numbe of indices in array
    this.storage = [];
  }
  /**
   *  optional method to print the contents of a matrix's storage
   *                     prints each row of the matrix on a new line.
   */
  print() {
    //step through matrix printing each element followed by a line break
    //create value to hold row/s followed by line breaks
    //return value
    this.storage.forEach((arrAsRow) => {
      console.log(arrAsRow, '\n');
    });
  }

  isValid(i, j) {
    //YOUR WORK HERE
    //i index will be arr index in arrayOfArrays
    //j will be index in the array we are iterating
    //step through stoarge, seeking value arr at i index
    //set that as var
    //step thorugh arr variable, if j = index in variable return true
    let validI = this.storage[i] != undefined ? this.storage[i] : undefined;
    //if I is defined, see if J is defined
    console.log(this.storage, validI);
    let validJ = false;
    if (validI != undefined) {
      validJ = validI[j] != undefined ? true : false;
    }

    return validJ;

    //return valid
  }

  initialize(arrayOfArrays) {
    if (Array.isArray(arrayOfArrays)) {
      //step thoroug array, if every index is arr
      const checkArr = (e) => Array.isArray(e);
      //mutate this.storage to equal Array passed into function
      if (arrayOfArrays.every(checkArr)) {
        this.storage = arrayOfArrays;

        this.m = this.storage.length;
        this.n = this.storage[0].length;
      }
    }
  }

  insert(i, j, val) {
    let validity = false;
    //does an array exists at index i: storage:i
    if (this.storage[i]) {
      const array = this.storage[i];
      if (array[j]) {
        //check if j index of array is undefined, if so mutate to val
        array[j] = val;
        validity = true;
      }
    }
    return validity;
  }

  retrieve(i, j) {
    //YOUR WORK HERE
    //retrieve:   returns value stored at given coordinates
    //returns -Infinity / Integer.MIN_VALUE if coordinates are invalid
    let validity = -Infinity;
    if (this.storage[i] != undefined) {
      //arr exists at i index
      const array = this.storage[i];
      if (array[j] != undefined) {
        //array exists at j index
        const index = array[j];
        validity = index;
        console.log(validity);
      }
    }
    return validity;
  }

  scale(factor) {
    this.storage = this.storage.reduce((accum, arr) => {
      let factored = arr.map((e) => e * factor);
      accum.push(factored);
      return accum;
    }, []);
  }

  fill(val) {
    this.storage = this.storage.reduce((accum, arr) => {
      let filled = arr.map((e) => (e = val));
      accum.push(filled);
      return accum;
    }, []);
  }

  flatten() {
    return this.storage.reduce((accum, arr) => accum.concat(arr));
  }

  slice(rowRange, colRange) {
    //if rowRange[1] is greater than storage length, return storage
    let newMatrix = this.storage.slice();
    console.log(rowRange, colRange, this.storage);

    if (rowRange[1] <= newMatrix.length)
      newMatrix = newMatrix.slice(rowRange[0], rowRange[1]);
    //if the value at index 1 of column range is greater than length of arr
    //return the arr
    //if value at index 1 of column range is less than length of arr
    //slice arr from 0 index of colRange to 1 index of colm range
    console.log(`post RR, pre CC`, newMatrix);

    for (let i = 0; i < newMatrix.length; i++) {
      let maxLength = colRange[1];
      console.log(`maxL and col`, maxLength, newMatrix[i]);
      if (maxLength <= newMatrix[i].length) {
        newMatrix[i] = newMatrix[i].slice(colRange[0], maxLength);
      }
    }

    console.log(`new matrix post reduce`, newMatrix);

    return newMatrix;
  }

  transpose() {
    /**
this.storage
				[[0, 1, 2],
 *      [3, 4, 5]]
TansposeArr
			[[0, 3],
			[1, 4],
			[2, 5]]

		(rows, m)=>arrays => .lngth val of storage
		(columns, n)=> indices => .length val of each arr
		Transpose flips MxN => NxM
		 */
    //  create var to hold recreated storage array
    const transposeStorage = [];
    // 	create num of arrays based on length of an an array in storage,
    this.storage[0].forEach((array) => transposeStorage.push(new Array()));
    // 	create num of indices based on length of storage
    for (let i = 0; i < transposeStorage.length; i++) {
      // propogate each transposeStorage array/indice
      this.storage.forEach((arr) => {
        // 	 push into transposestorage[i], originalStorage[i] indices of each array
        transposeStorage[i].push(arr[i]);
      });
      //an iteration of steping thru each i indice of all array in this.storage
    }
    console.log(this.m, this.n);
    this.m = transposeStorage.length;
    this.n = transposeStorage[0].length;
    console.log(this.m, this.n);
    console.log(this.storage);
    console.log(transposeStorage);
    return transposeStorage;
    //return null;
  }

  multiply(matrix) {
    const currentMatrix = this.storage;
    /**[ 		[4,1,3],				[3,2,5]]
		 * 
		 matrix:	[[8,9], [7,10], [0,6]] 				 [[8,9], [7,10], [0,6]]
		 
		 
		 result ==> [	[	39, 64],	[38, 77]	]
		 [[(4 * 8) + (1 * 7) + (3 * 0),    (4 * 9) + (1 * 10) + (3 * 6)],                      
		 [(3 * 8) + (2 * 7) + (5 * 0),    (3 * 9) + (2 * 10) + (5 * 6)]]
		 */

    /**
		 * The number of columns*(N) of 1st matrix must equal number of rows of 2nd matrix.
	mxn * n*K
	
	And the result will have the same number of rows as the 1st matrix,
	and the same number of columns as the 2nd matrix.
	mxn * n*K == m x k
		 */
    const newMatrix = new Array(currentMatrix.length).fill(
      new Array(matrix[0].length).fill(0)
    );
    //matrix to be returned will be [[0,0]		[0,0]] if using above example

    for (let m = 0; m < currentMatrix.length; m++) {
      //step through ith arr in currentMAtrix,
      currentMatrix[m].forEach((nColumn, columnI) => {
        //currentMatrix's ith arr's ele multiplied by all indices of inputMatrix arr
        //at index of current matrix element
        matrix[columnI].forEach((e, matrixI) => {
          let product = nColumn * e; //
          //add product to ith newMAtrix arr at corresponding matrixArr ith index
          console.log(`newMatrix:`, newMatrix[m][matrixI]);
          return (newMatrix[m][matrixI] += product);
        });
        console.log(newMatrix);
      });
    }
    return newMatrix;

    // storage[1] * matrix[1]

    // 0 indice of each storageArr * by 0 indice of imputArr[0]
    // plus
    // 1 indice of each stroageArr * by 0 indice of inputArr[1]
    // plus
    // 2 indice of each storageArr * by 0 indice inputArr[2]

    // 0 indice of each storageArr * by 1 indice of imputArr[0]
    // plus
    // 1 indice of each stroageArr * by 1 indice of inputArr[1]
    // plus
    // 2 indice of each storageArr * by 1 indice inputArr[2]
  }
}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('Matrix Tests');

let testCount = [0, 0];
console.log('IsValid Tests');

assert(
  testCount,
  'should return true for a valid set of coordinates',
  function () {
    let matrix = new Matrix(3, 4);
    return matrix.isValid(1, 1) === true;
  }
);

assert(
  testCount,
  'should return false for a set of coordinates off the matrix',
  function () {
    let matrix = new Matrix(3, 4);
    return matrix.isValid(5, 1) === false;
  }
);

assert(
  testCount,
  'should return false for a negative set of coordinates',
  function () {
    let matrix = new Matrix(3, 4);
    return matrix.isValid(-4, 1) === false;
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Initialize Tests');

assert(testCount, 'should override m and n values in old matrix ', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  return matrix.m === 2 && matrix.n === 3;
});

assert(testCount, 'should override contents of old matrix ', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [1, 2],
    [3, 4],
  ]);
  return (
    matrix.storage !== undefined &&
    matrix.storage[0] !== undefined &&
    matrix.storage[1] !== undefined &&
    matrix.storage[0][0] === 1 &&
    matrix.storage[0][1] === 2 &&
    matrix.storage[1][0] === 3 &&
    matrix.storage[1][1] === 4
  );
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Insert Tests');

assert(testCount, 'should return true if given valid coordinates', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  return matrix.insert(1, 1, 50) === true;
});

assert(
  testCount,
  'should override old value in matrix given valid coordinates',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    return matrix.insert(1, 1, 50) === true && matrix.storage[1][1] === 50;
  }
);

assert(
  testCount,
  'should return false if given invalid coordinates',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    return matrix.insert(5, 5, 10) === false;
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Retrieve Tests');

assert(
  testCount,
  'should return correct value if given valid coordinates',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    return matrix.retrieve(1, 1) === 4;
  }
);

assert(
  testCount,
  'should return -Infinity if given invalid coordinates',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    return matrix.retrieve(10, 10) === -Infinity;
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Scale Tests');

assert(testCount, 'should scale values in matrix by amount given', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1],
    [3, 4],
  ]);
  matrix.scale(2);
  return (
    matrix.storage[0][0] === 0 &&
    matrix.storage[0][1] === 2 &&
    matrix.storage[1][0] === 6 &&
    matrix.storage[1][1] == 8
  );
});

assert(testCount, 'should scale values in matrix by amount given', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1],
    [3, 4],
  ]);
  matrix.scale(-3);
  return (
    matrix.storage[0][0] === 0 &&
    matrix.storage[0][1] === -3 &&
    matrix.storage[1][0] === -9 &&
    matrix.storage[1][1] === -12
  );
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Fill Tests');

assert(
  testCount,
  'should set all values in the matrix to given amount',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1],
      [3, 4],
    ]);
    matrix.fill(2);
    return (
      matrix.storage[0][0] === 2 &&
      matrix.storage[0][1] === 2 &&
      matrix.storage[1][0] === 2 &&
      matrix.storage[1][1] == 2
    );
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Flatten Tests');

assert(testCount, 'should work for a single column matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([[0], [1], [3], [4]]);
  return arraysEqual(matrix.flatten(), [0, 1, 3, 4]);
});

assert(testCount, 'should work for a single row matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([[0, 1, 3, 4]]);
  return arraysEqual(matrix.flatten(), [0, 1, 3, 4]);
});

assert(testCount, 'should work for example matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]);
  return arraysEqual(matrix.flatten(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Slice Tests');

assert(
  testCount,
  'should return 2x2 matrix slice from a 3x3 matrix when rowRange is [0,2] and colRange is [0,2]',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    let newMatrix = matrix.slice([0, 2], [0, 2]);

    return (
      newMatrix !== null &&
      newMatrix.m === 2 &&
      newMatrix.n === 2 &&
      newMatrix.storage[0][0] === 0 &&
      newMatrix.storage[0][1] === 1 &&
      newMatrix.storage[1][0] === 3 &&
      newMatrix.storage[1][1] === 4
    );
  }
);

assert(
  testCount,
  'should return 2x2 matrix slice from a 3x3 matrix when rowRange is [1,3] and colRange is [1,3]',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    let newMatrix = matrix.slice([1, 3], [1, 3]);

    return (
      newMatrix !== null &&
      newMatrix.m === 2 &&
      newMatrix.n === 2 &&
      newMatrix.storage[0][0] === 4 &&
      newMatrix.storage[0][1] === 5 &&
      newMatrix.storage[1][0] === 7 &&
      newMatrix.storage[1][1] === 8
    );
  }
);

assert(
  testCount,
  'should return copy of original matrix if rowRange and colRange are larger than original',
  function () {
    let matrix = new Matrix(1, 1);
    matrix.initialize([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    let newMatrix = matrix.slice([-5, 20], [-2, 6]);

    return (
      newMatrix !== null &&
      newMatrix.m === 3 &&
      newMatrix.n === 3 &&
      newMatrix.storage[0][0] === 0 &&
      newMatrix.storage[0][1] === 1 &&
      newMatrix.storage[0][2] === 2 &&
      newMatrix.storage[1][0] === 3 &&
      newMatrix.storage[1][1] === 4 &&
      newMatrix.storage[1][2] === 5 &&
      newMatrix.storage[2][0] === 6 &&
      newMatrix.storage[2][1] === 7 &&
      newMatrix.storage[2][2] === 8
    );
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Transpose Tests');

assert(testCount, 'should work correctly on a 1x1 matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([[1]]);
  let newMatrix = matrix.transpose();

  return (
    newMatrix !== null &&
    newMatrix.m === 1 &&
    newMatrix.n === 1 &&
    newMatrix.storage[0][0] === 1
  );
});

assert(testCount, 'should work correctly on a 2x2 matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1],
    [2, 3],
  ]);
  let newMatrix = matrix.transpose();

  return (
    newMatrix !== null &&
    newMatrix.m === 2 &&
    newMatrix.n === 2 &&
    newMatrix.storage[0][0] === 0 &&
    newMatrix.storage[0][1] === 2 &&
    newMatrix.storage[1][0] === 1 &&
    newMatrix.storage[1][1] === 3
  );
});

assert(testCount, 'should work correctly on a 3x2 matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1],
    [3, 4],
    [6, 7],
  ]);
  let newMatrix = matrix.transpose();

  return (
    newMatrix !== null &&
    newMatrix.m === 2 &&
    newMatrix.n === 3 &&
    newMatrix.storage[0][0] === 0 &&
    newMatrix.storage[0][1] === 3 &&
    newMatrix.storage[0][2] === 6 &&
    newMatrix.storage[1][0] === 1 &&
    newMatrix.storage[1][1] === 4 &&
    newMatrix.storage[1][2] === 7
  );
});

assert(testCount, 'should work correctly on a 2x3 matrix', function () {
  let matrix = new Matrix(1, 1);
  matrix.initialize([
    [0, 1, 3],
    [4, 6, 7],
  ]);
  let newMatrix = matrix.transpose();

  return (
    newMatrix !== null &&
    newMatrix.m === 3 &&
    newMatrix.n === 2 &&
    newMatrix.storage[0][0] === 0 &&
    newMatrix.storage[0][1] === 4 &&
    newMatrix.storage[1][0] === 1 &&
    newMatrix.storage[1][1] === 6 &&
    newMatrix.storage[2][0] === 3 &&
    newMatrix.storage[2][1] === 7
  );
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

testCount = [0, 0];
console.log('Multiply Tests');

assert(
  testCount,
  'should work correctly on example matrix with valid input',
  function () {
    let matrix1 = new Matrix(1, 1);
    let matrix2 = new Matrix(1, 1);

    matrix1.initialize([
      [4, 1, 3],
      [3, 2, 5],
    ]);

    matrix2.initialize([
      [8, 9],
      [7, 10],
      [0, 6],
    ]);

    let newMatrix = matrix1.multiply(matrix2);

    return (
      newMatrix !== null &&
      newMatrix.m === 2 &&
      newMatrix.n === 2 &&
      newMatrix.storage[0][0] === 39 &&
      newMatrix.storage[0][1] === 64 &&
      newMatrix.storage[1][0] === 38 &&
      newMatrix.storage[1][1] === 77
    );
  }
);

assert(
  testCount,
  'should work correctly on example matrix with invalid input of wrong dimensions',
  function () {
    let matrix1 = new Matrix(1, 1);
    let matrix2 = new Matrix(1, 1);

    matrix1.initialize([
      [4, 1, 3],
      [3, 2, 5],
    ]);

    matrix2.initialize([[8]]);

    let newMatrix = matrix1.multiply(matrix2);

    return newMatrix === null;
  }
);

assert(
  testCount,
  'should work correctly on example matrix when multiplied by 3x1 matrix',
  function () {
    let matrix1 = new Matrix(1, 1);
    let matrix2 = new Matrix(1, 1);

    matrix1.initialize([
      [4, 1, 3],
      [3, 2, 5],
    ]);

    matrix2.initialize([[8], [1], [2]]);

    let newMatrix = matrix1.multiply(matrix2);

    return (
      newMatrix !== null &&
      newMatrix.m === 2 &&
      newMatrix.n === 1 &&
      newMatrix.storage[0][0] === 39 &&
      newMatrix.storage[1][0] === 36
    );
  }
);

assert(
  testCount,
  'should work correctly when 1x2 matrix is multiplied by example matrix',
  function () {
    let matrix1 = new Matrix(1, 1);
    let matrix2 = new Matrix(1, 1);

    matrix1.initialize([
      [4, 1, 3],
      [3, 2, 5],
    ]);

    matrix2.initialize([[3, 5]]);

    let newMatrix = matrix2.multiply(matrix1);

    return (
      newMatrix !== null &&
      newMatrix.m === 1 &&
      newMatrix.n === 3 &&
      newMatrix.storage[0][0] === 27 &&
      newMatrix.storage[0][1] === 13 &&
      newMatrix.storage[0][2] === 34
    );
  }
);

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

// DO NOT TOUCH FUNCTIONS BELOW

// function for checking if arrays contain same elements
// (do not need to be in the same order)
function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) {
      return false;
    }
    cache[arr2[j]]--;
  }
  return true;
}

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
