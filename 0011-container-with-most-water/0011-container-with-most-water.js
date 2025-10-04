/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let ans = 0;
  let l = 0, r = height.length - 1;
  while(l < r){
    let ht = 0;
    ans = Math.max(ans, (r - l) * Math.min(height[l], height[r]));
    if(height[l] < height[r]) l++;
    else r--;
  }
  return ans;  
};