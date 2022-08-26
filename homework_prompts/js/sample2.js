// const setIntervalPromisified = (interval) => {
// 	//create callback that will be setinterval
// 	//return it as a new promise

// 	const cB = (resolve, reject) => {
// 		setInterval(resolve(`fillfilled in ${interval}ms `), interval);
// 	};
// 	return new Promise(cB);
// };
// //name soemhting the invocation of sI

// const resolution = setIntervalPromisified(3000);

// console.log(resolution);
// resolution.then(console.log());

// const objs = [
// 	{
// 		_id : 100
// 	},
// 	{
// 		_id : 111
// 	}
// ];

// for (let obj of objs) {
// 	console.log(obj._id);
// }
// console.log(objs[0]._id);

// const rebalance = (i) => {
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
// };

// const someClass = class {
// 	constructor() {}
// 	add2Console(i) {
// 		i += 2;
// 		console.log[i];
// 	}
// 	iterate(arr) {
// 		for (let i = 0; i < arr.length; i++) {
// 			this.add2Console(i);
// 		}
// 	}
// };

// function removeDuplicates(nums) {
// 	const cache = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		let val = nums[i];

// 		if (!cache[val]) {
// 			cache[val] = 1;
// 		} else {
// 			let sequentialDups = 1;
// 			for (let j = i + 1; j < nums.length; j++) {
// 				if (nums[j] === nums[i]) {
// 					sequentialDups++;
// 				} else break;
// 			}
// 			nums.splice(i, sequentialDups);
// 		}
// 		console.log(i, cache, nums);
// 	}
// 	return nums;
// }
// // Uncomment to check your work.
// const result0 = removeDuplicates([ 1, 23, 4, 5, 6, 5 ]);
// console.log(result0); // => [1, 23, 4, 5, 6]
// const result1 = removeDuplicates([ 1, 23, 4, 4, 4, 6, 5 ]);
// console.log(result1); // => [1, 23, 4, 6, 5]

const display = (item) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(console.log(item)), 2000);
	});
	return promise;
};
const iterateAndSlice = async () => {
	const fruits = [ 'apple', 'pear', 'banana', 'pineapple' ];

	for (const fruit of fruits) {
		await display(fruit).then((data) => console.log(`${fruit} Sliced`));
	}
};
iterateAndSlice();
// how can we make change the  code such that we display the fruit before we slice it
// ie apple, followed by apple sliced
// you can  not change the console.logs
