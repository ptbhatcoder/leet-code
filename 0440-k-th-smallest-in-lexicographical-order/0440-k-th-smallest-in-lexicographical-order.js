/**
 * Helper function to count the steps from current prefix within range.
 * @param {number} curr
 * @param {number} n
 * @return {number}
 */
function countSteps(curr, n) {
    let steps = 0, first = curr, last = curr;
    while (first <= n) {
        steps += Math.min(n + 1, last + 1) - first;
        first *= 10;
        last = last * 10 + 9;
    }
    return steps;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let curr = 1;  // Start from the first prefix
    k--;  // Decrement k to make it zero-indexed
    
    while (k > 0) {
        let steps = countSteps(curr, n);
        if (steps <= k) {
            curr++;  // Move to the next prefix
            k -= steps;
        } else {
            curr *= 10;  // Move to the first child
            k--;
        }
    }
    
    return curr;
};