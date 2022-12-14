# 262 - Nth Power Number

Given a positive integer `n`, return the `nth` *Power Number*.

A *Power Number* is a positive integer `i` that can be written as two positive integers `x` and `y` where `i = x^y` and `x > 1` and `y > 1`.

So for example:

The number `4` is a power number, because `4 == 2^2`.
The number `25` is a power number, because `25 == 5^2`.
The number `8` is a power number, because `8 == 2^3`.
The number `7` is **NOT** a power number, because it can't be written as some number *squared*, *cubed*, etc.

Your goal is to return the `nth` power number. Meaning, if you were to sort all power numbers in ascending order, there would be a *first*, *second*, *third*... *nth*.

Here is a list of the first `10` power numbers: `[4, 8, 9, 16, 25, 27, 32, 36, 49, 64]`


```
Input: n, Integer
Output: Integer
```

# Example

```
In: 1
Out: 4

In: 10
Out: 64
```


# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```

`n` will always be greater than or equal to `1`.

There may be some power numbers that can be produced in multiple ways (ie `16` is `2^4` or `4^2`). You should only count those **once**.

# Hints for Interviewer

Create a list by hand of the first `10` or `20` power numbers.

Think about what the smallest power you can raise some integer to (`2`).

Think about how you can use that information to set a **MAXIMUM RANGE** on what the `nth` power number could be.

For example, if you computed the first `10` squares (powers of `2`), you'd get `2`-`11` squared.

Now you have `10` valid power numbers, but `121` (`11` squared) is going to be larger than the `nth` power number, because we haven't taken into account powers of `3`, `4`, `5`...

Think about where a heap might fit into all this.


# Solution

High level idea:

Compute the first `n` squares, starting from base `2` until `n+1`.

Once you have those, start computing higher powers (cubes, powers of four etc.), while maintaining a list of `n` power numbers.

Do this by removing the largest elements from that list first, and replacing them with smaller power numbers generated from higher powers.

Do it until `2` raised to the current power is larger than the largest power number in your list.



* 1) Create a max heap of size `n`, and instantiate an empty `set`

* 2) Compute the squares of `2` - `n + 1`, and add them to the heap and `set`

* 3) Start computing powers of `3`, starting from base `2`, and if you find any that are smaller than the `max` element in the `heap` (at the top of it) **AND** not in the `set`:
  * a) Add it to the `set`.
  * b) Replace the `max` of the `heap` with the new value.
  * c) Remove the old `max` from the heap.
  * c) Bubble the new value added down to its correct position in the heap

* 4) Keep incrementing the base, until that base raised to the power of `3` is larger than the `max` element in the heap.

* 5) Then, reset your base to `2` and increment your power by `1`.

* 6) Repeat steps 3-5 until you reach a point where `2` raised to the current power is larger than the largest element in the heap.

* 7) Return the largest element in the heap.


# Code

```java
import java.util.*;

class Main {
  
  public static void main (String[] args) {
    System.out.println(nthPower(1)); //4
    System.out.println(nthPower(10)); //64
  }


  public static int nthPower(int n) {
    if(n<1) return n;

    //Curr Power
    int pow = 2;
    int[] pows = new int[n];
    HashSet<Integer> seen = new HashSet<>();
    //Create a max heap and do a bubble up, while computing n squares
    int base = 2;
    for(int i=n; i>=1; i--) {
      pows[i-1] = (int)Math.pow(base++,2);
      seen.add(pows[i-1]);
    }
    // printArr(pows);

    //Loop through all exponents until the base raised to that power is > the top of the heap
    base = 2;
    pow = 3;

    int starting = (int)Math.pow(base, pow);
    while(starting <= pows[0]) {
      int currPow = starting;
      while(currPow < pows[0]) {
        if(!seen.contains(currPow)){
          seen.add(currPow);
          pows[0] = currPow;
          bubbleDown(pows, 0);
        }
        currPow = (int)Math.pow(base++, pow);
      }

      //Reset base, increment power, and calc next starting elem
      base = 2;
      pow++;
      starting = (int)Math.pow(base, pow);

    }

    return pows[0];
  }

  public static void bubbleDown(int[] arr, int parent) {
    int child = getChild(arr, parent);
    while(child < arr.length && arr[parent] < arr[child]) {
      swap(arr, parent, child);
      parent = child;
      child = getChild(arr, parent);
    }
  }

  public static int getChild(int[] arr, int parent) {
    int child1 = 2*parent+1;
    int child2 = 2*parent+2;
    if(child1 >= arr.length) return child1;
    else if(child2 >= arr.length) return child1;
    else return arr[child1] > arr[child2] ? child1 : child2;
  }

  public static void swap(int[] arr, int parent, int child) {
    int temp = arr[parent];
    arr[parent] = arr[child];
    arr[child] = temp;
  }

  public static void printArr(int[] arr){
    for(Integer i: arr) System.out.print(i+ " ");
    System.out.println();
  }

}

```

# Resources
[Nth Power Number on Geeks for Geeks](https://www.geeksforgeeks.org/check-if-a-number-can-be-expressed-as-xy-x-raised-to-power-y/)
