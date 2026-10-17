/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length >= nums2.length) [nums1, nums2] = [nums2, nums1];
    
    const n1 = nums1.length;
    const n2 = nums2.length;
    if(n1 === 0){
        if(n2 % 2 === 0) return 0.5 * (nums2[n2 / 2] + nums2[n2 / 2 - 1]);
        return nums2[Math.floor(n2 / 2)];
    }
    const n = n1 + n2;
    const seats = Math.ceil(n / 2);
   
    for(let s = 0, e = n1; s <= e;){
        const b1 = s + Math.floor((e - s) / 2);
        const taken = b1;
        const remain = seats - taken;
        const b2 = remain;
        const l1 = b1 ? nums1[b1 - 1] : -Infinity;
        const l2 = b2 ? nums2[b2 - 1] : -Infinity;
        const r1 = b1 === n1 ? Infinity : nums1[b1];
        const r2 = b2 === n2 ? Infinity : nums2[b2];
        if(l1 <= r2 && l2 <= r1){
            if(n % 2 === 0){
                return 0.5 * (Math.max(l1, l2) + Math.min(r1, r2));
            }
            return Math.max(l1, l2);
        } else if(l1 > r2) e = b1 - 1;
        else if(l2 > r1) s = b1 + 1;
    }
    return Math.min(nums1[0], nums2[0]);
};