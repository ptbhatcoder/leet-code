/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    let ans = 0;

    let last =  -Infinity, penultimate = -Infinity;
    intervals.sort((i1,  i2) => (i1[1] - i2[1]) || (i2[0] - i1[0]));
    for(const [s, e] of intervals){
        const isLastInRange = s <= last && last <= e;
        const isPenultimateInRange = s <= penultimate && penultimate <= e;

        if(!isLastInRange || !isPenultimateInRange){
            if(isLastInRange) ans++;
            else ans += 2;

            if(isLastInRange) penultimate = last;
            else penultimate = e - 1;

            last = e;
        }
    }
    return ans;
};