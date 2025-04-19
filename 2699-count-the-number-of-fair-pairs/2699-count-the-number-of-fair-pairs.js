/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
/**
 * @param {number[]} nums - Array of integers
 * @param {number} lower - Lower bound for the sum of pairs
 * @param {number} upper - Upper bound for the sum of pairs
 * @return {number} - Count of fair pairs
 */
const countFairPairs = (nums, lower, upper) => {
  const countPairsLessThan = (nums, threshold) => {
    let count = 0
    let left = 0
    let right = nums.length - 1

    while (left < right) {
      const currentSum = nums[left] + nums[right]

      if (currentSum < threshold) {
        // All pairs between left and right with left fixed will have sum < threshold
        // This is because the array is sorted, so we add (right - left) pairs
        count += right - left
        left++
      } else {
        // Sum is too large, move right pointer to decrease the sum
        right--
      }
    }

    return count
  }

  // Sort the array to enable efficient two-pointer approach
  nums.sort((a, b) => a - b)

  // Calculate pairs with sum < upper+1, then subtract pairs with sum < lower
  return countPairsLessThan(nums, upper + 1) - countPairsLessThan(nums, lower)
}