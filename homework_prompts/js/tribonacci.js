/**
 * 
export function tribonacci(signature, n) {
  //input arr of nums, integer/ max length
  if (n < 1) return 0;
  if (n > 0 && n < 4) return signature.slice(0, n);

  //return arr or num
  //step through arr
  //if n = 4 or greater
  for (let start = 0; signature.length < n; start++) {
    let sum = 0;
    const end = start + 3;
    const nums = signature.slice(start, end);
    console.log("shallowCopy:", nums);
    nums.forEach((num) => (sum += num));
    console.log("new sum:", sum);
    signature.push(sum);
    console.log("new signature:", signature);
  }
  return signature;
  //do while sig's length is less than n
  //tracking 3 elements, incrmenting up from 0
  ////iteratate througharray
  //slicing ndex and index+3
  //get sum, add to sig, when sig's length = n, return sig
}

console.log(tribonacci([0, 0, 1], 9));
// should == [0,0,1,1,2,4,7,13,24]
console.log(tribonacci([1, 1, 1], 5));
// should == [1,1,1,3,5]
console.log(tribonacci([1, 2, 3], 2)); // should == [1,2]
console.log(tribonacci([1, 2, 3], 3)); // should == [1,2]

 */

var romanToInt = function (s) {
  const babel = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    console.log("in forLoop");
    const current = s[i];
    const currentTranslation = babel[current];
    console.log(current, currentTranslation);

    //if current is 0 index, add to sum;
    let previousTranslation;
    if (i == 0) sum += currentTranslation;
    if (i > 0) {
      const previous = s[i - 1];
      previousTranslation = babel[previous];
      if (previousTranslation < currentTranslation) {
        //if previous number is less current number, subtract previus from current
        const total = currentTranslation - previousTranslation;
        sum += total;
        //add that total to sum
      }
    }
    //as you iterate, if the next number is larger than the previous numner
    //subtract that number, rather than adding it, to sum
    //return sum
  }
  return sum;
  //return number
};

console.log(romanToInt("MCMXCIV"));
