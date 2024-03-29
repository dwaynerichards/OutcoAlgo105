﻿/**
 *  Target Practice 09 - Heapsort
 *
 *  Problem 1: Implement Heapsort in-place.
 *
 *  NOTE: In-place means to manipulate the input array rather than create a
 *        new array.
 *
 *  Input:  {Array}
 *  Output: {Array}
 *
 *  Example: heapsort([4, 15, 16, 50, 8, 23, 42, 108])
 *           //[4, 8, 15, 16, 23, 42, 50, 108]
 */

 // Worse Time Complexity: O(Nlog(N))
 // Worse Auxiliary Space Complexity: O(1)
 // Average Time Complexity: O(Nlog(N))
 // Average Auxiliary Space Complexity: O(1)

using System;
using System.Linq;
using System.Collections.Generic;

class Heapsort {
  public static int[] compute(int[] arr) {
    for (int i = 1; i < arr.Length; i++) {
      insert(arr, i);
    }
    for (int i = arr.Length; i > 1; i--) {
      remove(arr, i);
    }
    return arr;
  }

  private static int getParent(int child) {
    return (child - 1) / 2;
  }

  private static int getChild(int parent, int[] arr, int heapLength) {
    int left = parent * 2 + 1;
    if (left >= heapLength - 1 || arr[left] >= arr[left + 1]) {
      return left;
    }
    return left + 1;
  }

  private static void bubbleUp(int[] arr, int heapLength) {
    int child = heapLength - 1;
    int parent = getParent(child);
    int temp;
    while (child > 0 && arr[parent] < arr[child]) {
      temp = arr[parent];
      arr[parent] = arr[child];
      arr[child] = temp;
      child = parent;
      parent = getParent(child);
    }
  }

  private static void bubbleDown(int[] arr, int heapLength) {
    int parent = 0;
    int child = getChild(parent, arr, heapLength);
    int temp;
    while (child < heapLength && arr[parent] < arr[child]) {
      temp = arr[parent];
      arr[parent] = arr[child];
      arr[child] = temp;
      parent = child;
      child = getChild(parent, arr, heapLength);
    }
  }

  private static void insert(int[] arr, int heapLength) {
    bubbleUp(arr, heapLength + 1);
  }

  private static void remove(int[] arr, int heapLength) {
    int temp = arr[0];
    arr[0] = arr[heapLength - 1];
    arr[heapLength - 1] = temp;
    bubbleDown(arr, heapLength - 1);
  }
}

 ////////////////////////////////////////////////////////////
 ///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
 ////////////////////////////////////////////////////////////

// use the Test class to run the test cases
class Test{

  public static void Main() {
    int[] testCount = {0, 0};
    Console.WriteLine("Heapsort Tests");
    runTest(sortTest1, "should sort example input", testCount);
    runTest(sortTest2, "should return empty array for empty input", testCount);
    runTest(sortTest3, "should sort single-element input", testCount);
    runTest(sortTest4, "should sort moderate-sized input", testCount);
    runTest(sortTest5, "should sort large-sized input", testCount);  
    printTestsPassed(testCount);
	}

  private static bool sortTest1() {
    return Heapsort.compute(new int[]{3, 9, 1, 4, 7}).SequenceEqual(new int[]{1, 3, 4, 7, 9});
  }

  private static bool sortTest2() {
    return Heapsort.compute(new int[]{}).SequenceEqual(new int[]{});
  }

  private static bool sortTest3() {
    return Heapsort.compute(new int[]{10}).SequenceEqual(new int[]{10});
  }

  private static bool sortTest4() {
    int[] input = new int[1000];
    int[] solution = new int[1000];
    int randNum;
    Random rand = new Random();
    for (int i = 0 ; i < input.Length ; i++) {
      randNum = rand.Next(0, 1000);
      input[i] =  randNum;
      solution[i] =  randNum;
    }
    input = Heapsort.compute(input);
    Array.Sort(solution);
    return isSorted(input) && input.SequenceEqual(solution);
  }

  private static bool sortTest5() {
    int[] input = new int[1000000];
    int[] solution = new int[1000000];
    int randNum;
    Random rand = new Random();
    for (int i = 0 ; i < input.Length ; i++) {
      randNum = rand.Next(0, 1000000);
      input[i] =  randNum;
      solution[i] =  randNum;
    }
    input = Heapsort.compute(input);
    Array.Sort(solution);
    return isSorted(input) && input.SequenceEqual(solution);
  }


  // checks if array is sorted in linear time
  private static bool isSorted(int[] input) {
      for (int i = 1 ; i < input.Length ; i++) {
          if (input[i-1] > input[i]) {
              return false;
          }
      }
      return true;
  }
  
  // DO NOT TOUCH FUNCTIONS BELOW

  // Custom runTest function to handle tests
  // Function<bool> test : performs a set of operations and returns a bool
  //   indicating if test passed
  // string name : describes the test
  // int[] testCount : keeps track out how many tests pass and how many total
  //   in the form of a two item array i.e., [0, 0]
  private static void runTest(Func<bool> test, string testName, int[] testCount){
      testCount[1]++;
      bool testPassed = false;
      // Attempt to run test and suppress exceptions on failure
      try {
          testPassed = test();
          if(testPassed) testCount[0]++;
      } catch (Exception e) {
        Console.WriteLine(e);
      }
      string result = "  " + (testCount[1] + ")   ") + testPassed + " : " + testName;
      Console.WriteLine(result);
  } 
  // this is to print the number of test cases passed for a test suite function
  private static void printTestsPassed(int[] testCount) {
    Console.WriteLine("PASSED: " + testCount[0] + " / " + testCount[1] + "\n\n");
  }
}