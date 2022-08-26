// function wordCount(sentence) {
// 	return (
// 		sentence
// 			.toLowerCase()
// 			//lower case string, split string at space,
// 			.split(/\W/)
// 			.reduce((objAccum, string, i, arr) => {
// 				console.log(arr);
// 				if (objAccum[string]) {
// 					objAccum[string]++;
// 				} else if (!objAccum[string] && string !== '') {
// 					objAccum[string] = 1;
// 				}
// 				//console.log(objAccum);
// 				return objAccum;
// 			}, {})
// 	);
// }
// 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
//  * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
//  * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
//console.log(wordCount(`It's a man, it's a plane, it's superman!`));

/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

// function rgb(string) {
// 	//if string's length is < 3, return 0
// 	//if string === 'rgb', return 1;
// 	if (string.length < 3) return 0;
// 	if (string === 'rgb') return 1;
// 	let r = 0;
// 	let g = 0;
// 	let b = 0;
// 	//step through string counting each occurance of value
// 	for (const letter of string) {
// 			letter === 'r' ? r++ :
// 			letter === 'g' ? g++ :
// 			b++;
// 		console.log(`letter:`, letter, `string:`, string, r, g, b);
// 	}
// 	return Math.min(r, g, b);
// 	//return math.min of all values
// }
//console.log(rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg'));

function characterMode(string) {
	// inout str
	console.log(string);
	string = string.toLowerCase().split(' ').join('');
	console.log(`string post mutation`, string);
	const obj = {};
	//step through str, use object to collect values of each occurance
	for (const letter of string) {

			!obj[letter] ? (obj[letter] = 1) :
			obj[letter]++;
		console.log(obj);
	}
	const strArr = Object.entries(obj).reduce(
		(accumArr, strCountArr) => {
			//step through obj, obj.entries.reduce
			if (strCountArr[1] > accumArr[1]) {
				// if the ele being processes at index 1 is greater than what exist in acc
				//mutate acc to ele
				accumArr = strCountArr;
			} else if (strCountArr[1] === accumArr[1]) {
				//if ele at index 1 = index 1 acc, concat index 0 of ele to index 0 of acc
				accumArr[0] += strCountArr[0];
			} else return accumArr;
			console.log(accumArr);
			return accumArr;
		},
		[ '', 0 ]
	);
	//pass in 2 element array of empty string as accum ['',0]
	return strArr[0];
	//output str, most occuring char
}

// console.log(characterMode('hello'));
// console.log(characterMode('a Walk In The Park'));
// console.log(characterMode('noon'));

let str = 'hellooo';
str = str.replace('h', '');

//console.log(str);

class Matrix {
	constructor(m, n) {
		this.m = m; //num of (rows/arrays)=> each row is an arr
		this.n = n; //num of (columns/indices)=> number of index in arr
		this.storage = [];
		for (let i = 0; i < m; i++) {
			this.storage.push(new Array(n).fill(0));
		}
	}
	print() {
		this.storage.forEach((arrAsRow) => console.log(arrAsRow, '\n'));
	}
	isValid(i, j) {
		const valid = this.storage[i][j];
		console.log(`isvalid invoked, value to review:`, valid);

		if (valid == j) return true;
		return false;
	}
	initialize(arrayOfArrays) {
		if (Array.isArray(arrayOfArrays)) {
			//step thoroug array, if every index is arr
			const eleIsArr = (e) => Array.isArray(e);
			//mutate this.storage to equal Array passed into function
			if (arrayOfArrays.every(eleIsArr)) {
				this.storage = arrayOfArrays;
			}
		}
	}
	insert(i, j, val) {
		let validity = false;

		if (this.storage[i]) {
			const array = this.storage[i];
			if (array[j]) {
				const index = array[j];
				index = value;
				validity = true;
			}
		}
		return validity;
	}
	retrieve(i, j) {
		let validity = -Infinity;
		if (this.storage[i]) {
			const array = this.storage[i];
			if (array[j]) {
				const index = array[j];
				validity = index;
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
		console.log(`storage`, this.storage);
		const newMatrix = this.storage.slice(rowRange[0], rowRange[1]);
		console.log(`newMAtrix:`, newMatrix);
		const columnCut = (collection, arr) => {
			arr = arr.slice(colRange[0], colRange[1]);
			collection.push(arr);
			return collection;
		};
		return newMatrix.reduce(columnCut, []);
	}
	transpose() {
		const transposeStorage = [];
		// 	create num of arrays based on length of an an array in storage,
		this.storage[0].forEach((element) => transposeStorage.push(new Array(0)));
		// 	create num of indices based on length of storage
		for (let i = 0; i < transposeStorage.length; i++) {
			// propogate each transposeStorage array/indice
			this.storage.forEach((arr) => {
				transposeStorage[i].push(arr[i]);
			});
			// 	 push into transposestorage[i], originalStorage[i] indices of each array
		}
		return transposeStorage;
	}

	multiply(matrix) {
		const currentMatrix = this.storage;
		/**[ 		[4,1,3],				[3,2,5]]
		 * 			i,1,2						\\
		 * 			/	\
		matrix:	[[8,9], [7,10], [0,6]] // [[8,9], [7,10], [0,6]]
				ii,1	10,11	20,21
				/  /
			[[0,0]		[0,0]]
result == [[39, 64],	[38, 77]]
			[[(4 * 8) + (1 * 7) + (3 * 0),    (4 * 9) + (1 * 10) + (3 * 6)],                      
			[(3 * 8) + (2 * 7) + (5 * 0),    (3 * 9) + (2 * 10) + (5 * 6)]]
		*/
		//const newMatrix = new Array(matrix[0].length).fill(new Array(matrix[0].length).fill(0));
		const newMatrix = new Array(matrix[0].length).fill().map(() => new Array(matrix[0].length).fill(0));

		console.log(`newMatrix post formation:`, newMatrix);

		for (let i = 0; i < currentMatrix.length; i++) {
			console.log(this.storage, `:this.strorage`);
			console.log(`current matrix[i]:`, currentMatrix[i]);
			currentMatrix[i].forEach((column, columnI) => {
				matrix[columnI].forEach((e, matrixI) => {
					console.log(`column`, column);
					let product = column * e; //
					console.log(column, e, `=`, product);
					//add product to ith newMAtrix arr at corresponding matrixArr ith index
					console.log(newMatrix);
					console.log(`matrix preMutations:`, newMatrix[i][matrixI]);

					newMatrix[i][matrixI] += product;
					console.log(`matrix post mutations`, newMatrix[i][matrixI]);
					console.log(newMatrix);
				});
				console.log(newMatrix);
			});
		}
		return newMatrix;
	}
}
const matrix = new Matrix(3, 3);
console.log(matrix);
//matrix.print();
matrix.initialize([ [ 4, 1, 3 ], [ 3, 2, 5 ] ]);
matrix.print();
//matrix.fill(10);
//matrix.print();
//console.log(matrix.flatten());
//console.log(matrix.slice([ 0, 2 ], [ 0, 2 ]));
//console.log(matrix.transpose());
//console.log(matrix.multiply([ [ 8, 9 ], [ 7, 10 ], [ 0, 6 ] ]));
//console.log(newMatrix);
