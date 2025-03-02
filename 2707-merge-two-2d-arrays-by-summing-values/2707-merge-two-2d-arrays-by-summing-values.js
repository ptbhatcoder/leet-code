/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0, j  = 0;
    const n1 = nums1.length, n2 = nums2.length;
    const result = new Array(n1 + n2);
    let idx = -1;
    const insert = (elem) => {
        if(idx >= 0 && result[idx][0] === elem[0]){
            result[idx][1] += elem[1];
        } else result[++idx] = elem;
    }
    while(i < n1 && j < n2){
        if(nums1[i][0] < nums2[j][0]) insert(nums1[i++]);
        else insert(nums2[j++]);
    }
    while(i < n1) insert(nums1[i++]);
    while(j < n2) insert(nums2[j++]);
    return result.slice(0, 1 + idx);
};