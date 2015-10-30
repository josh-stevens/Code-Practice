// www.joshstevens.net/blog/sorting-algorithms-pt-1-the-bubble-sort/

import java.util.Random;

public class bubbleSort {
  public static void main(String[] args) {

    int[] nums;
    nums = new int[100];
    boolean sorted = false;
    Random randomGen = new Random();

    System.out.println("nums array: ");
    for (int i = 0; i < 100; i++) {
      nums[i] = randomGen.nextInt(100);
      System.out.print(nums[i] + " ");
    }

    // Let's bubble
    while(!sorted)
    {
      sorted = true;
      for (int i = 0; i < nums.length-1; i++) {
        if (nums[i] > nums[i+1]) {
          int tmp = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = tmp;
          sorted = false;
        }
      }
    }

    System.out.println("\nSorted array: ");
    for (int i = 0; i < nums.length; i++) {
      System.out.print(nums[i] + " ");
    }

  }
}
