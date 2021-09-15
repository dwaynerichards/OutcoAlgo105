/**
 *  Target Practice 09 - Heapsort
 *
 *  NOTE: In-place means to manipulate the input array rather than create a
 *        new array.
 *
 *  Input:  arr: [Int]
 *  Output: [Int]
 *
 *  Example: heapsort([4, 15, 16, 50, 8, 23, 42, 108])
 *           //[4, 8, 15, 16, 23, 42, 50, 108]
 */

import Darwin

// Worse Time Complexity:
// Worse Auxiliary Space Complexity:
// Average Time Complexity:
// Average Auxiliary Space Complexity:

func heapsort(_ arr: inout [Int]) -> [Int] {
 // YOUR CODE HERE
 return [Int]()
}





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

func assert(_ count: inout [Int], _ name: String, _ test: () -> Bool) {
  if count.count != 2 {
    count = [0, 0]
  } else {
    count[1] = count[1] + 1
  }

  var pass: String = "false"

  if test() {
    pass = " true"
    count[0] = count[0] + 1
  }
  print(count[1], ")   ", pass, ":", name)
}

func arraysEqual(_ arr1: [Int], _ arr2: [Int]) -> Bool {
  if arr1.count != arr2.count {
    return false
  }
  for i in 0..<arr1.count {
    if arr1[i] != arr2[i] {
      return false
    }
  }
  return true
}


print("Heapsort Sort Tests")
var testCount : [Int] = [0,0]

assert(&testCount, "should sort [3,9,1,4,7]",  {
  var arr = [3,9,1,4,7]
  let test = heapsort(&arr)
  return arraysEqual(test, [1,3,4,7,9])
})

assert(&testCount, "should return empty array for empty input",  {
  var arr = [Int]()
  let test = heapsort(&arr)
  return arraysEqual(test, [])
})

assert(&testCount, "should sort single-element input",  {
  var arr = [10]
  let test = heapsort(&arr)
  return arraysEqual(test, [10])
})

assert(&testCount, "should sort moderate-sized input",  {
  var arr = [Int]()
  for i in 1..<1000 {
    arr.append(Int(arc4random_uniform(1000)))
  }
  var arr2 = arr
  let test = heapsort(&arr2)
  return arraysEqual(test, arr.sorted())
})

assert(&testCount, "should sort large input",  {
  var arr = [Int]()
  for i in 1..<1000000 {
    arr.append(Int(arc4random_uniform(1000000)))
  }
  var arr2 = arr
  let test = heapsort(&arr2)
  return arraysEqual(test, arr.sorted())
})

print("PASSED: ", testCount[0], " / ", testCount[1], "\n\n");
