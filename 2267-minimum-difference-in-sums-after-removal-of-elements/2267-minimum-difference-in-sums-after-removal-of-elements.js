/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const n = nums.length / 3;
    const rightQ = new MinPriorityQueue();
    const leftQ = new MaxPriorityQueue();
    let l = 0, r = 0, ans = Infinity;
    const temp = new Array(nums.length).fill(0);
    for(let i = nums.length - 1; i >= n; --i){
        const val = nums[i];
        rightQ.enqueue(val);
        r += val;
        if(rightQ.size() > n) {
            r -= rightQ.dequeue();
        }
        if(rightQ.size() === n) temp[i] = r;
    }

    for(let i = 0; i < nums.length - n; i++){
        const val = nums[i];
        leftQ.enqueue(val);
        l += val;
        if(leftQ.size() > n){
            l -= leftQ.dequeue();
        }
        if(leftQ.size() === n) ans = Math.min(ans, l - temp[i+1]);
    }
    return ans;
};