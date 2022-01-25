/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let [i, j, n] = [0, arr.length - 1, arr.length];
    while(i + 1 < n && arr[i] < arr[i+1]) i++;
    while(j > 0 && arr[j] < arr[j-1]) j--;
    return 0 < j && i===j && j < n - 1;
};