const findTopXSum = (f, x) => {
    const minHeap = new PriorityQueue((a, b) => (f[a] - f[b]) ||  a - b);
    for(const num in f){
        if(f[num]){
            minHeap.enqueue(num);
        }
        if(minHeap.size() > x) minHeap.dequeue();
    }
    let ans = 0;
    while(minHeap.size() > 0){
        const val = minHeap.dequeue();
        ans += (f[val]  * val);
    }
    return ans;
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const f = {};
    const ans = [];
    const n = nums.length;
    for(let i = 0; i < k; i++){
        const num = nums[i];
        f[num] = (f[num] || 0) + 1;
    }
    ans.push(findTopXSum(f, x));
    for(let i = k; i < n; i++){
        const out = nums[i-k];
        f[out]--;
        if(f[out] <= 0) delete f[out];
        const num = nums[i];
        f[num] = (f[num] || 0) + 1;
        ans.push(findTopXSum(f, x));
    }
    return ans;
};