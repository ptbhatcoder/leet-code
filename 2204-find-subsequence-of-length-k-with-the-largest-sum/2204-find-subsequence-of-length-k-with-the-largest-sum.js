/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const pq = new PriorityQueue((v1, v2) => {
        return (v1[0] - v2[0]) || (v1[1] - v2[1]);
    });
    const n = nums.length;
    for(let i = 0; i < k; i++) pq.enqueue([nums[i], i]);
    for(let i = k; i < n; i++){
        pq.enqueue([nums[i], i]);
        pq.dequeue();
    };
    return pq.toArray().sort((a, b) => a[1] - b[1]).map(v => v[0]);
};