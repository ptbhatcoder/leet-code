
function countProducts(nums1, nums2, target) {
    let count = 0;
    for (let num1 of nums1) {
        if (num1 === 0) {
            if (target >= 0) count += nums2.length;
            continue;
        }

        let low = 0, high = nums2.length;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            let product = num1 * nums2[mid];
            if (product <= target) {
                if (num1 > 0) low = mid + 1;
                else high = mid;
            } else {
                if (num1 > 0) high = mid;
                else low = mid + 1;
            }
        }

        count += (num1 > 0) ? low : nums2.length - low;
    }
    return count;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    let left = -1e10, right = 1e10;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countProducts(nums1, nums2, mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
