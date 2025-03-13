import java.util.function.Function;

interface NumberCheckOperator {
    public boolean op(int a);
}

class Solution {
    private int searchLastIndex(int[] nums, int start, int end, NumberCheckOperator isValidElement){
        if(start > end) return start-1;

        int mid = start + (end - start) / 2;

        if(isValidElement.op(nums[mid])){
            return Math.max(start-1, searchLastIndex(nums, mid + 1, end, isValidElement));
        }
        return searchLastIndex(nums, start, mid - 1, isValidElement);
    }
    public int maximumCount(int[] nums) {
        int end = nums.length;
        int lastNegative = searchLastIndex(nums, 0, end - 1, val -> val < 0);
        int lastZero = searchLastIndex(nums, 1 + lastNegative, end - 1, val -> val == 0);
        return Math.max(1 + lastNegative, end - (1 + lastZero));
    }
}