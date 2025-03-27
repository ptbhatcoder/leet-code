const majorityElement = (nums) => {
    let cand = -1;
    let c = 0;
    for(const num of nums){
        if(c === 0){
            c++;
            cand = num;
        } else if(cand === num) c++;
        else c--;
    }
    c = 0;
    for(const num of nums){
        if(num === cand) c++;
    }
    return c > (nums.length / 2) ? [cand, c] : [-1, -1];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const [dominant, f] = majorityElement(nums);
    const n = nums.length;
    let lc = 0;
    for(let i = 0; i < n-1; i++){
        const num = nums[i];
        
        const left = i + 1;
        const right = n - left;

        if(num === dominant) lc++;
        const rc = f - lc;
        if(lc > (left / 2) && rc > (right / 2)) return i;

    }
    return -1;
};