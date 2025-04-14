/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    const n = arr.length;
    let cnt = 0;
    for(let i = 0; i < n; i++){
        const left = arr[i];
        for(let j = i + 1; j < n; j++){
            const mid = arr[j];
            if(Math.abs(mid - left) > a) continue;
            for(let k = j + 1; k < n; k++){
                const right = arr[k];
                if(Math.abs(right - mid) <= b && Math.abs(right - left) <= c) cnt++;
            }
        }
    }
    return cnt;
};