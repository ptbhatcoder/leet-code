/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(v, lower, upper) {
    v.sort((a, b) => a - b);
    let ans = 0;
  
    for (let i = 0; i < v.length - 1; i++) {
        const low = lowerBound(v, lower - v[i], i + 1);
        const up = upperBound(v, upper - v[i], i + 1);
        ans += up - low;
    }
    return ans;
};

function lowerBound(v, target, start) {
    let end = v.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (v[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return start;
}

function upperBound(v, target, start) {
    let end = v.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (v[mid] > target) end = mid;
        else start = mid + 1;
    }
    return start;
}