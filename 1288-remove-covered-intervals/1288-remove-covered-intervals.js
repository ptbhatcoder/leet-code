/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]));
    const n = intervals.length;
    let last = 0, ans = 0;
    for(let i = 0; i < n; i++){
        const [s, e] = intervals[i];
        if(last < e){
            last = e;
            ans++;
        }
    }
    return ans;
};