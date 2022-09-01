/*
<<<<<<< HEAD
 *  Homework - Frequency Count
=======
 *  Homework 02 - Frequency Count
>>>>>>> a63a631 (yuck)
 */

/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

'use strict';
<<<<<<< HEAD

function unique(arr) {
  // YOUR WORK HERE
}

=======
//w1_d1_frequency_count.js
function unique(arr) {
	return Array.from(new Set(arr));

	//return arr with dup removed
}
>>>>>>> a63a631 (yuck)

/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(sentence) {
<<<<<<< HEAD
  // YOUR WORK HERE
}

=======
	return (
		sentence
			//lower case string, split string at space,
			.split(/\W/)
			.reduce((objAccum, string) => {
				if (objAccum[string]) {
					objAccum[string]++;
				} else if (!objAccum[string] && string !== '') {
					objAccum[string] = 1;
				}
				//console.log(objAccum);
				return objAccum;
			}, {})
	);
	//step through each arr of strings, removing non letters,
	//if string exists as key on obj, increave val by 1, if it doesnt, add to obj as key, set val to 1
	//return obj

	//return obj
	//keys are words in string
	//val are occorances
}
console.log(wordCount('The cat and the hat.'));
>>>>>>> a63a631 (yuck)

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
<<<<<<< HEAD
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
=======
 * `'rgb rgb' --> 2`
 * `'r b g  r b r g rgb gr rggbbbbrgrgrgrg' --> 7`
>>>>>>> a63a631 (yuck)
 * `'bbrr' --> 0`
 */

function rgb(string) {
<<<<<<< HEAD
  // YOUR WORK HERE
}


=======
	if (string.length < 3) return 0;
	if (string === 'rgb') return 1;
	const occurances = 0;

	let r = 0;
	let g = 0;
	let b = 0;
	//step through string counting each occurance of value
	for (const letter of string) {

			letter === 'r' ? r++ :
			letter === 'g' ? g++ :
			b++;
		console.log(r, g, b);
	}
	return Math.min(r, g, b);
	//return math.min of all values
}
//return occorances
>>>>>>> a63a631 (yuck)

/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 */

function missingNumber(n, arr) {
<<<<<<< HEAD
  // YOUR WORK HERE
}



=======
	//input max of range integer, arr of int
	let missing = [];
	//loop though arr,with for loop, conditon will be when as long as i < n
	//increment i, if arr does not include i, return I
	for (let i = 1; i < n + 1; i++) {
		if (!arr.includes(i)) missing.push(i);
		console.log(i, n, arr, missing);
		//return;
	}
	return missing;
	//return int missing from arr
}

>>>>>>> a63a631 (yuck)
/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

function letterSort(string) {
<<<<<<< HEAD
  // YOUR WORK HERE
}



=======
	string = string.split('').sort().join('');
	console.log(string);
	return string;
}

>>>>>>> a63a631 (yuck)
/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Upper case characters should count as lower case, and do not include spaces
 * ... as characters.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

<<<<<<< HEAD
 function characterMode(string) {
   // YOUR WORK HERE
 }


=======
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
>>>>>>> a63a631 (yuck)

/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 */

<<<<<<< HEAD

function sortDigits(n) {
  // YOUR WORK HERE
}



=======
function sortDigits(n) {
	// YOUR WORK HERE
}

>>>>>>> a63a631 (yuck)
/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

function getDuplicates(arr) {
<<<<<<< HEAD
  // YOUR WORK HERE
}



=======
	const collection = {};
	const dups = [];
	//place index on collection as key, and occurances as value
	arr.forEach((e) => {

			collection[e] ? collection[e]++ :
			(collection[e] = 1);
	});
	console.log(collection);

	for (const key in collection) {
		let value = collection[key];
		if (value > 1) dups.push(parseInt(key));
	}
	console.log('dups:', dups);
	return dups;
	//iterate collection,
	//if so, push into collection arr
	//continue doing so until arr is

	// return arr with duplicates
}

>>>>>>> a63a631 (yuck)
/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

<<<<<<< HEAD
function anagramPair(string1, string2) {
  // YOUR WORK HERE
}



=======
function anagramPair(string1, string2, i = 0) {
	// YOUR WORK HERE
	let status = true;
	if (string1.length !== string2.length) return false;
	//step through string 1, if string 2 doesnt include index 0 of string 1, return false
	for (let i = 0; i < string1.length; i++) {
		if (!string2.includes(string1[i])) {
			status = false;
			break;
		} else {
			//if string 2 does include index i, remove index  of string1,
			string2 = string2.replace(string1[i], '');
			console.log(`string1:`, string1, `string2:`, string2);
		}
	}
	//if string 2'length equal 0, return true otherwise return status
	if (string2.length === 0) return true;
	return status;
}

>>>>>>> a63a631 (yuck)
/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */

<<<<<<< HEAD

 function anagramPalindrome(string) {
   // YOUR WORK HERE
 }



=======
function anagramPalindrome(string) {
	// input string
	const obj = {};
	let status = true;
	let oddVals = 0;
	//step though string placing each val in obj as key, set val as occurances
	for (const letter of string) {

			!obj[letter] ? (obj[letter] = 1) :
			obj[letter]++;
	}
	//if string's length is even, there should be only even values in obj
	for (const key in obj) {
		if (string.length % 2 === 0) {
			if (obj[key] % 2 !== 0) {
				status = false;
				break;
			}
		} else {
			//if strings length is odd, there should be only 1 odd value in obj,
			if (obj[key] % 2 !== 0) oddVals++;
		}
		//if more than 1 odd value in obj, return false
	}
	if (oddVals > 1) status = false;
	console.log(obj);
	console.log('oddVals:', oddVals);
	return status;
	//output return boolean
}
/**Given an array of integers, and a target value determine
 *  if there are two integers that add to the sum.
 * given a sorted array
 	
 * const twoSum = (array, val)=>{
 * Input: 
 * [1,2,3,4,5,6,7,8,9,11,23,34,45], 13
 *  0,1,2,3,4,5,6,7,8,9,10,11,12
 * 				 M
 * set var to see if vaue contitiosn are met, default to false
 * 
 * if sum of ith index and last index is less than val, break as total wont exists in arr
 * 
 * 	if sum of ith index and mth index is less than val, check values right of mth index
 * stub helperFuction check right, iterate all vals from mth index to end of arr, checking for total, if total exists, reset var to true, break/return
 * if sum '                          ' is greater than val check values left of mth index
 * stub helperFunc checkLeft, iterate all vals from 0index to mth index, checking to see if sum of index and that val equals input, if total exists, reset var to true, break/return
 * 
 * return var
 * }
 * 
 * 
 */
const twoSum = (arr, total) => {
	let ifSum = false;

	const middleIndex = Math.floor(arr.length / 2); //index
	let middle = arr[middleIndex];

	for (let i = 0; i < arr.length; i++) {
		const last = arr[arr.length - 1];
		if (i + last > total) {
			let ithSum = i + middle;
			if (ithSum < total) checkRight();
			if (ithSum > total) checkLeft();
		} else break;
	}
	const checkRight = () => {
		//it from from mth index to last index, if i+ index = total, mutate ifSum to true; break
		for (let j = middleIndex; j < last; j++) {
			let sum = i + j;
			if (sum == total) {
				ifSum = true;
				break;
			}
		}
	};
	const checkLeft = () => {
		//if from mth index to 0
		for (let j = middleIndex; j >= 0; j--) {
			let sum = i + j;
			if (sum == total) {
				ifSum = true;
				break;
			}
		}
	};
	return ifSum;
};
>>>>>>> a63a631 (yuck)

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

<<<<<<< HEAD

let testCount;

console.log('Unique tests');
testCount = [0, 0];

assert(testCount, 'should return unique values from sorted list with duplicates', () => {
  let example = unique([1, 2, 4, 4, 5, 6])
  return example !== undefined && arraysEqual(example.sort((a, b) => {return a-b;}), [1,2,4,5,6]);
});

assert(testCount, 'should return single value for list with all duplicates', () => {
  let example = unique([2,2,2,2,2,2,2]);
  return example !== undefined && arraysEqual(example, [2]);
});

assert(testCount, 'should return unique values from unsorted list with duplicates', () => {
  let example = unique([1,2,3,1,2])
  return example !== undefined && arraysEqual(example.sort((a, b) => {return a-b;}), [1,2,3]);
});

assert(testCount, 'should return an empty list from empty input', () => {
  let example = unique([])
  return example !== undefined && arraysEqual(example, []);
=======
let testCount;

console.log('Unique tests');
testCount = [ 0, 0 ];

assert(testCount, 'should return unique values from sorted list with duplicates', () => {
	let example = unique([ 1, 2, 4, 4, 5, 6 ]);
	return (
		example !== undefined &&
		arraysEqual(
			example.sort((a, b) => {
				return a - b;
			}),
			[ 1, 2, 4, 5, 6 ]
		)
	);
});

assert(testCount, 'should return single value for list with all duplicates', () => {
	let example = unique([ 2, 2, 2, 2, 2, 2, 2 ]);
	return example !== undefined && arraysEqual(example, [ 2 ]);
});

assert(testCount, 'should return unique values from unsorted list with duplicates', () => {
	let example = unique([ 1, 2, 3, 1, 2 ]);
	return (
		example !== undefined &&
		arraysEqual(
			example.sort((a, b) => {
				return a - b;
			}),
			[ 1, 2, 3 ]
		)
	);
});

assert(testCount, 'should return an empty list from empty input', () => {
	let example = unique([]);
	return example !== undefined && arraysEqual(example, []);
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Word Count');
testCount = [0, 0];

assert(testCount, 'should return an object with each word and its frequency', () => {
  let example = wordCount("The cat and the hat.")
  return example !== undefined &&
  example['the'] === 2 &&
  example['cat'] === 1 &&
  example['and'] === 1 &&
  example['hat'] === 1;
});

assert(testCount, 'should return object with each word excluding punctuations', () => {
  let example = wordCount("It's a man, it's a plane, it's superman!")
  return example !== undefined &&
  example['its'] === 3 &&
  example['a'] === 2 &&
  example['man'] === 1 &&
  example['plane'] === 1 &&
  example['superman'] === 1;
});

assert(testCount, 'should return empty object for empty string input', () => {
  let example = wordCount("")
  return example !== undefined && Object.keys(example).length === 0;
=======
console.log('Word Count');
testCount = [ 0, 0 ];

assert(testCount, 'should return an object with each word and its frequency', () => {
	let example = wordCount('The cat and the hat.');
	return (
		example !== undefined &&
		example['the'] === 2 &&
		example['cat'] === 1 &&
		example['and'] === 1 &&
		example['hat'] === 1
	);
});

assert(testCount, 'should return object with each word excluding punctuations', () => {
	let example = wordCount("It's a man, it's a plane, it's superman!");
	return (
		example !== undefined &&
		example['its'] === 3 &&
		example['a'] === 2 &&
		example['man'] === 1 &&
		example['plane'] === 1 &&
		example['superman'] === 1
	);
});

assert(testCount, 'should return empty object for empty string input', () => {
	let example = wordCount('');
	return example !== undefined && Object.keys(example).length === 0;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('rgb Count');
testCount = [0, 0];

assert(testCount, 'should return number correct number of rgb from input', () => {
  let example = rgb('rgbrgb');
  return example !== undefined && example === 2;
});

assert(testCount, 'should return correct number of rgb from input despite characters out of sequence', () => {
  let example = rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg');
  return example !== undefined && example === 7;
});

assert(testCount, 'should return 0 as output for no number of rgb', () => {
  let example = rgb('bbrr');
  return example !== undefined && example === 0;
});

assert(testCount, 'should return 0 for empty input', () => {
  let example = rgb('');
  return example !== undefined && example === 0;
=======
console.log('rgb Count');
testCount = [ 0, 0 ];

assert(testCount, 'should return number correct number of rgb from input', () => {
	let example = rgb('rgbrgb');
	return example !== undefined && example === 2;
});

assert(testCount, 'should return correct number of rgb from input despite characters out of sequence', () => {
	let example = rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg');
	return example !== undefined && example === 7;
});

assert(testCount, 'should return 0 as output for no number of rgb', () => {
	let example = rgb('bbrr');
	return example !== undefined && example === 0;
});

assert(testCount, 'should return 0 for empty input', () => {
	let example = rgb('');
	return example !== undefined && example === 0;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Missing Number Tests');
testCount = [0, 0];

assert(testCount, 'should return [3] for input of [1, 4, 2]', () => {
  let example = missingNumber(4, [1, 4, 2]);
  return example !== undefined && arraysEqual(example, [3]);
});

assert(testCount, 'should return [2, 3, 5, 8] for input of [4, 7, 1, 6]', () => {
  let example = missingNumber(8, [4, 7, 1, 6]);
  return example !== undefined && arraysEqual(example, [2, 3, 5, 8]);
});

assert(testCount, 'should return [3, 5] for input of [6, 4, 2, 1]', () => {
  let example = missingNumber(6, [6, 4, 2, 1]);
  return example !== undefined && arraysEqual(example, [3, 5]);
=======
console.log('Missing Number Tests');
testCount = [ 0, 0 ];

assert(testCount, 'should return [3] for input of [1, 4, 2]', () => {
	let example = missingNumber(4, [ 1, 4, 2 ]);
	return example !== undefined && arraysEqual(example, [ 3 ]);
});

assert(testCount, 'should return [2, 3, 5, 8] for input of [4, 7, 1, 6]', () => {
	let example = missingNumber(8, [ 4, 7, 1, 6 ]);
	return example !== undefined && arraysEqual(example, [ 2, 3, 5, 8 ]);
});

assert(testCount, 'should return [3, 5] for input of [6, 4, 2, 1]', () => {
	let example = missingNumber(6, [ 6, 4, 2, 1 ]);
	return example !== undefined && arraysEqual(example, [ 3, 5 ]);
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Letter Sort Tests');
testCount = [0, 0];

assert(testCount, "should return 'ehllo' for input 'hello'", () => {
  let example = letterSort("hello")
  return example !== undefined && example === "ehllo";
});

assert(testCount, "should return 'abdehiortw' for input of 'whiteboard'", () => {
  let example = letterSort("whiteboard")
  return example !== undefined && example === "abdehiortw";
});

assert(testCount, "should return 'eno' for input 'one'", () => {
  let example = letterSort("one")
  return example !== undefined && example === "eno";
=======
console.log('Letter Sort Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return 'ehllo' for input 'hello'", () => {
	let example = letterSort('hello');
	return example !== undefined && example === 'ehllo';
});

assert(testCount, "should return 'abdehiortw' for input of 'whiteboard'", () => {
	let example = letterSort('whiteboard');
	return example !== undefined && example === 'abdehiortw';
});

assert(testCount, "should return 'eno' for input 'one'", () => {
	let example = letterSort('one');
	return example !== undefined && example === 'eno';
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Character Mode Tests');
testCount = [0, 0];

assert(testCount, "should return 'l' for input 'hello'", () => {
  let example = characterMode("hello");
  return example !== undefined && example === "l";
});

assert(testCount, "should return 'a' when input is 'A walk in the park'", () => {
  let example = characterMode("A walk in the park");
  return example !== undefined && example === "a";
});

assert(testCount, "should return 'no' when input is 'noon'", () => {
  let example = characterMode("noon");
  return example !== undefined && example === "no";
=======
console.log('Character Mode Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return 'l' for input 'hello'", () => {
	let example = characterMode('hello');
	return example !== undefined && example === 'l';
});

assert(testCount, "should return 'a' when input is 'A walk in the park'", () => {
	let example = characterMode('A walk in the park');
	return example !== undefined && example === 'a';
});

assert(testCount, "should return 'no' when input is 'noon'", () => {
	let example = characterMode('noon');
	return example !== undefined && example === 'no';
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Sort Digits Tests');
testCount = [0, 0];

assert(testCount, "should return '789' when input is '8970'", () => {
  let example = sortDigits(8970);
  return example !== undefined && example === 789;
});

assert(testCount, "should return '23445' when input is '32445'", () => {
  let example = sortDigits(32445);
  return example !== undefined && example === 23445;
});

assert(testCount, "should return '111' when input is '10101'", () => {
  let example = sortDigits(10101);
  return example !== undefined && example === 111;
=======
console.log('Sort Digits Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return '789' when input is '8970'", () => {
	let example = sortDigits(8970);
	return example !== undefined && example === 789;
});

assert(testCount, "should return '23445' when input is '32445'", () => {
	let example = sortDigits(32445);
	return example !== undefined && example === 23445;
});

assert(testCount, "should return '111' when input is '10101'", () => {
	let example = sortDigits(10101);
	return example !== undefined && example === 111;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Get Duplicates Tests');
testCount = [0, 0];

assert(testCount, "should return '[2]' when input is '[1, 2, 4, 2]'", () => {
  let example = getDuplicates([1, 2, 4, 2]);
  return example !== undefined && arraysEqual(example, [2]);
});

assert(testCount, "should return '[3, 2]' or '[2, 3]' when input is '[3, 2, 3, 2, 3, 3, 4]'", () => {
  let example = getDuplicates([3, 2, 3, 2, 3, 3, 4]);
  return example !== undefined && arraysEqual(example, [2,3]) || arraysEqual(example, [3,2]);
});

assert(testCount, "should return '[]' when input is '[1, 2, 3, 4]'", () => {
  let example = getDuplicates([1, 2, 3, 4]);
  return example !== undefined && arraysEqual(example, []);
=======
console.log('Get Duplicates Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return '[2]' when input is '[1, 2, 4, 2]'", () => {
	let example = getDuplicates([ 1, 2, 4, 2 ]);
	return example !== undefined && arraysEqual(example, [ 2 ]);
});

assert(testCount, "should return '[3, 2]' or '[2, 3]' when input is '[3, 2, 3, 2, 3, 3, 4]'", () => {
	let example = getDuplicates([ 3, 2, 3, 2, 3, 3, 4 ]);
	return (example !== undefined && arraysEqual(example, [ 2, 3 ])) || arraysEqual(example, [ 3, 2 ]);
});

assert(testCount, "should return '[]' when input is '[1, 2, 3, 4]'", () => {
	let example = getDuplicates([ 1, 2, 3, 4 ]);
	return example !== undefined && arraysEqual(example, []);
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Anagram Pair Tests');
testCount = [0, 0];

assert(testCount, "should return true when input is 'cat, act'", () => {
  let example = anagramPair("cat", "act");
  return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat, dog'", () => {
  let example = anagramPair("cat", "dog");
  return example !== undefined && example === false;
});

assert(testCount, "should return false when input is 'racecar, aaccrres'", () => {
  let example = anagramPair("racecar", "aaccrres");
  return example !== undefined && example === false;
=======
console.log('Anagram Pair Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return true when input is 'cat, act'", () => {
	let example = anagramPair('cat', 'act');
	return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat, dog'", () => {
	let example = anagramPair('cat', 'dog');
	return example !== undefined && example === false;
});

assert(testCount, "should return false when input is 'racecar, aaccrres'", () => {
	let example = anagramPair('racecar', 'aaccrres');
	return example !== undefined && example === false;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD

console.log('Anagram Palindrome Tests');
testCount = [0, 0];

assert(testCount, "should return true when input is 'carrace'", () => {
  let example = anagramPalindrome("carrace");
  return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat'", () => {
  let example = anagramPalindrome("cat");
  return example !== undefined && example === false;
=======
console.log('Anagram Palindrome Tests');
testCount = [ 0, 0 ];

assert(testCount, "should return true when input is 'carrace'", () => {
	let example = anagramPalindrome('carrace');
	return example !== undefined && example === true;
});

assert(testCount, "should return false when input is 'cat'", () => {
	let example = anagramPalindrome('cat');
	return example !== undefined && example === false;
>>>>>>> a63a631 (yuck)
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

<<<<<<< HEAD


=======
>>>>>>> a63a631 (yuck)
// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
<<<<<<< HEAD
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
=======
	let record = [];
	const log = console.log;
	console.log = (...args) => {
		record = record.concat(...args);
	};
	method(...params);
	console.log = log;
	return record;
>>>>>>> a63a631 (yuck)
}

// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
<<<<<<< HEAD
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}



=======
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
=======
	if (!count || !Array.isArray(count) || count.length !== 2) {
		count = [ 0, '*' ];
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
>>>>>>> a63a631 (yuck)
}
