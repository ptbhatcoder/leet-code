var avoidFlood = function(rains) {
    const n = rains.length;
    const lake = new Map();
    const dryDays = [];
    const result = new Array(n).fill(1);
    
    for (let i = 0; i < n; i++) {
        if (rains[i] === 0) {
            dryDays.push(i);
        } else {
            result[i] = -1;
            if (lake.has(rains[i])) {
                const lastRain = lake.get(rains[i]);
                let idx = binarySearch(dryDays, lastRain);
                if (idx === dryDays.length) return [];
                result[dryDays[idx]] = rains[i];
                dryDays.splice(idx, 1);
            }
            lake.set(rains[i], i);
        }
    }
    return result;
};

function binarySearch(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left;
}