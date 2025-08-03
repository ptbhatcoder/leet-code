/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let l = 0, sum = 0, ans = 0;
    const n = fruits.length;
    const leftBound = startPos - k;
    const rightBound = startPos + k;
    while(l < n && fruits[l][0] < leftBound) l++;
    for(let r = l; r < n && fruits[r][0] <= rightBound; r++){
        sum += fruits[r][1];
        while((startPos - 2 *  fruits[l][0] + fruits[r][0]) > k && (2 * fruits[r][0] -  fruits[l][0] - startPos) > k) {
            sum -= fruits[l][1];
            l++;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};