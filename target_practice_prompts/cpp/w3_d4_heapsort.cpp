/**
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

 // Worse Time Complexity:
 // Worse Auxiliary Space Complexity:
 // Average Time Complexity:
 // Average Auxiliary Space Complexity:

 #include <vector>
 #include <iostream>
 #include <algorithm> // for copy()
 #include <iterator>
 using namespace std;



 vector<int> heapsort(vector<int> arr) {
   // YOUR WORK HERE
   return arr;
 }



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

void runTest (bool test(), string testName, int testCount[]),  printTestsPassed(int testCount[]);
bool sortTest1(),sortTest2(),sortTest3(),sortTest4(),sortTest5();

int main() {
  int testCount[] = {0, 0};
  cout << "Heap Sort Tests" << endl;
  runTest(sortTest1, "should sort example input", testCount);
  runTest(sortTest2, "should return empty array for empty input", testCount);
  runTest(sortTest3, "should sort single-element input", testCount);
  runTest(sortTest4, "should sort moderate-sized input", testCount);
  runTest(sortTest5, "should sort large-sized input", testCount);
  printTestsPassed(testCount);
  return 0;
}

bool sortTest1() {
  return heapsort(vector<int>{3, 9, 1, 4, 7}) == (vector<int>{1, 3, 4, 7, 9});
}

bool sortTest2() {
  return heapsort(vector<int>{}) == (vector<int>{});
}

bool sortTest3() {
  return heapsort(vector<int>{10}) == (vector<int>{10});
}

// checks if array is sorted in linear time
bool isSorted(vector<int> input) {
    for (int i = 1 ; i < input.size() ; i++) {
        if (input[i-1] > input[i]) {
            return false;
        }
    }
    return true;
}

bool sortTest4() {
  vector<int> input(1000);
  vector<int> solution(1000);
  int randNum;
  srand(time(NULL));
  for (int i = 0 ; i < input.size() ; i++) {
    randNum = std::rand(); // rand() return a number between ​0​ and RAND_MAX
    input[i] =  randNum;
    solution[i] =  randNum;
  }
  input = heapsort(input);
  std::sort(solution.begin(), solution.end());
  return isSorted(input) && input == solution;
}

bool sortTest5() {
  vector<int> input(1000000);
  vector<int> solution(1000000);
  int randNum;
  srand(time(NULL));
  for (int i = 0 ; i < input.size() ; i++) {
    randNum = std::rand(); // rand() return a number between ​0​ and RAND_MAX
    input[i] =  randNum;
    solution[i] =  randNum;
  }
  input = heapsort(input);
  std::sort(solution.begin(), solution.end());
  return isSorted(input) && input == solution;
}


// this is to wrap the test and check for exceptions
void runTest (bool test(), string testName, int testCount[]){
  testCount[1]++;
  bool testPassed = test();
  if(testPassed) testCount[0]++;
  string result = "  " + (to_string(testCount[1]) + ")   ") + (testPassed ? "true" : "false") + " : " + testName;
  cout << result << endl;
}

// this is to print the number of test cases passed for a test suite function
void printTestsPassed(int testCount[]) {
  cout << "PASSED: " + to_string(testCount[0]) + " / " + to_string(testCount[1]) + "\n\n" <<endl;
}
