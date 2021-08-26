<<<<<<< HEAD
/*
 *  Homework - Dynamic Programming
=======
/**
 *  Homework 05 - Dynamic Programming
>>>>>>> f1d7873 (adds new files)
 *
 *
 *  Instructions: Dynamic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
<<<<<<< HEAD
 *                different DPProblems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subDPProblems - Memoization
 *      				  Recursion sometimes call subDPProblems repeatedly. These repeated
=======
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
>>>>>>> f1d7873 (adds new files)
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
<<<<<<< HEAD
 *      					solutions of its subDPProblems.
 */

class DPProblems {
=======
 *      					solutions of its subproblems.
 */

import java.util.*;

class Problems {
>>>>>>> f1d7873 (adds new files)

  /*
   *  Problem: Lattice Paths (Dynamic Programming Approach)
   *
   *  Prompt:    Count the number of unique paths to travel from the top left
   *             to the bottom right of a lattice of squares.
   *
   *             NOTE: You are traveling along the **EDGES** of the lattice
   *
   *  Input:     An integer N (which is the width of the lattice)
   *             An integer M (which is the height of the lattice)
   *
<<<<<<< HEAD
   *  Output:    An integer (which represents the number of unique paths)
=======
   *  Output:    An interger (which represents the number of unique paths)
>>>>>>> f1d7873 (adds new files)
   *
   *  Example:   input: 2
   *
   *             (2 x 3 lattice of squares)
   *              __ __ __
   *             |__|__|__|
   *             |__|__|__|
   *
   *             output: 10 (number of unique paths from top left corner to bottom
   *                     right)
   *
   *             Diagram:
   *
   *             1__1__1__1
   *             |  |  |  |
   *             1__2__3__4
   *             |  |  |  |
   *             1__3__6__10
   *
   *  Notes:     What is the time and auxilliary space complexity of your solution?
   *
   *             When moving through the lattice, you can only move either down or
   *             to the right.
   *
   *             You did this problem before with recursion. Try implementing it
   *             now with dynamic programming!
   *
   *  Resources:
   *    1: https://projecteuler.net/problem=15
   *    2: https://en.wikipedia.org/wiki/Lattice_path
   *
   */

  // Time Complexity: O(max(M, N)^2)
  // Auxiliary Space Complexity: O(max(M,N))
<<<<<<< HEAD
  public static int latticePaths(int m, int n) {
    // Init 2D matrix for tabulation solution
    int[][] matrix = new int[m+1][n+1];

    // Fill in top row, left col
    for(int row = 0; row < matrix.length; row++) {
      matrix[row][0] = 1;
    }

    for(int col = 0; col < matrix[m].length; col++) {
      matrix[0][col] = 1;
    }

    // Fill in table with look backs row by row, col by col
    for(int row = 1; row < matrix.length; row++) {
      for(int col = 1; col < matrix[m].length; col++) {
        matrix[row][col] = matrix[row-1][col] + matrix[row][col-1];
      }
    }
    return matrix[m][n];
=======
   public static int latticePaths(int m, int n) {
     int larger = Math.max(m, n);
     int smaller = Math.min(m, n);

     int[] work = new int[larger+1];
     work[0] = 1;

     for (int i = 1 ; i < larger+1 ; i++) {
       int temp = 1;
       for (int j = 1 ; j < i+1 ; j++) {
         temp = temp + work[j];
         work[j] = temp;
       }
       work[i] = 2*temp;
     }

     return work[smaller];
>>>>>>> f1d7873 (adds new files)
   }

}

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// use the Main class to run the test cases
<<<<<<< HEAD
class DPTests {
  // an interface to perform tests
  public interface Test {
    boolean execute();
=======
class Main {
  private int[] testCount;

  // an interface to perform tests
  public interface Test {
    public boolean execute();
>>>>>>> f1d7873 (adds new files)
  }

  public static void main(String[] args) {

    int[] testCount = {0, 0};
    System.out.println("Lattice Paths Tests");

<<<<<<< HEAD
    assertTest(testCount, "should work on a 2 x 3 lattice", () -> DPProblems.latticePaths(2, 3) == 10);

    assertTest(testCount, "should return the same for a 3 x 2 lattice", () -> DPProblems.latticePaths(3, 2) == 10);

    assertTest(testCount, "should return the same for a 0 x 0 lattice", () -> DPProblems.latticePaths(0, 0) == 1);

    assertTest(testCount, "should work for a 10 x 10 lattice (square input)", () -> DPProblems.latticePaths(10, 10) == 184756);

    assertTest(testCount, "should work for a 17 x 14 lattice (large input)", () -> DPProblems.latticePaths(17, 14) == 265182525);
=======
    assertTest(testCount, "should work on a 2 x 3 lattice", new Test() {
      public boolean execute() {
        return Problems.latticePaths(2, 3) == 10;
      }
    });

    assertTest(testCount, "should return the same for a 3 x 2 lattice", new Test() {
      public boolean execute() {
        return Problems.latticePaths(3, 2) == 10;
      }
    });

    assertTest(testCount, "should return the same for a 0 x 0 lattice", new Test() {
      public boolean execute() {
        return Problems.latticePaths(0, 0) == 1;
      }
    });

    assertTest(testCount, "should work for a 10 x 10 lattice (square input)", new Test() {
      public boolean execute() {
        return Problems.latticePaths(10, 10) == 184756;
      }
    });

    assertTest(testCount, "should work for a 17 x 14 lattice (large input)", new Test() {
      public boolean execute() {
        return Problems.latticePaths(17, 14) == 265182525;
      }
    });
>>>>>>> f1d7873 (adds new files)

    // print the result of tests passed for a module
    System.out.println("PASSED: " + testCount[0] + " / " + testCount[1] + "\n\n");

  }



  // do not edit below, this is to wrap the test and check for exceptions
  private static void assertTest(int[] count, String name, Test test) {
    String pass = "false";
    count[1]++;

    try {
      if (test.execute()) {
        pass = " true";
        count[0]++;
      }
<<<<<<< HEAD
    } catch(Exception ignored) {}
=======
    } catch(Exception e) {}
>>>>>>> f1d7873 (adds new files)
    String result = "  " + (count[1] + ")   ").substring(0, 5) + pass + " : " + name;
    System.out.println(result);
  }
}
