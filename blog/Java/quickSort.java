import java.util.*;

public class quickSort {
  public static Random randomGen = new Random();

  public static void main(String[] args) {
    List<Integer> nums = new ArrayList<Integer>();

    for (int i = 0; i < 100; i++) {
      nums.add(randomGen.nextInt(100));
    }
    System.out.println("nums list: " + nums);

    List<Integer> sortedList = sort(nums, randomGen.nextInt(100));
    System.out.println("\nSorted list: " + sortedList);
  }

  public static List sort(List nums, int pivot) {
    List<Integer> smallerNums = new ArrayList<Integer>(),
                  largerNums  = new ArrayList<Integer>(),
                  sortedSmaller = new ArrayList<Integer>(),
                  sortedLarger = new ArrayList<Integer>();

    for (int i = 0; i < nums.size(); i++) {
      if (i == pivot) continue;
      if ((int) nums.get(i) < (int) nums.get(pivot))
        smallerNums.add((int) nums.get(i));
      else 
        largerNums.add((int) nums.get(i));
    }

    if (smallerNums.size() > 0){
      sortedSmaller = sort(smallerNums, randomGen.nextInt(smallerNums.size()));
    } 

    if (largerNums.size() > 0) {
      sortedLarger = sort(largerNums, randomGen.nextInt(largerNums.size()));
    }

    sortedSmaller.add((int) nums.get(pivot));
    sortedSmaller.addAll(sortedLarger);
    return sortedSmaller;
  }

}
