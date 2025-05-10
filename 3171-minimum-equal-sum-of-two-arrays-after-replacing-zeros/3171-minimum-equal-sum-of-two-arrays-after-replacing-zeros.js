/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let s1 = 0, c1 = 0, s2 = 0, c2 = 0;
    for(const num of nums1){
        s1+= num;
        if(num === 0) c1++;
    }
    for(const num of nums2){
        s2+= num;
        if(num === 0) c2++;
    }
    const t1 = s1 + c1, t2= s2 + c2;
    if(t1 < t2 && c1 === 0) return -1;
    if(t2 < t1 && c2 === 0) return -1;

    return Math.max(t1, t2);
};