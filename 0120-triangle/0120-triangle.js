/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const ans = triangle.at(-1).slice();
    const n = triangle.length;
    for(let row = n - 2; row >= 0; row--){
        for(let pos = 0; pos <= row; pos++){
            ans[pos] = Math.min(ans[pos], ans[pos + 1]) + triangle[row][pos];
        }
    }
    return ans[0];
};