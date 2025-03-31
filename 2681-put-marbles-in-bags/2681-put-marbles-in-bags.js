/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    // If k equals the length of weights, the only distribution is each marble in its own bag
    if (k === weights.length) {
        return 0;
    }

    // Step 1: Compute the cost between each adjacent pair
    let cost = [];
    for (let i = 0; i < weights.length - 1; i++) {
        cost.push(weights[i] + weights[i + 1]);
    }

    // Step 2: Sort the cost array
    cost.sort((a, b) => a - b);

    // Step 3: Find the maximum score by picking the largest k-1 costs
    let maxScore = 0;
    for (let i = cost.length - 1; i >= cost.length - (k - 1); i--) {
        maxScore += cost[i];
    }

    // Step 4: Find the minimum score by picking the smallest k-1 costs
    let minScore = 0;
    for (let i = 0; i < k - 1; i++) {
        minScore += cost[i];
    }

    // Step 5: Return the difference between max and min scores
    return maxScore - minScore;
};