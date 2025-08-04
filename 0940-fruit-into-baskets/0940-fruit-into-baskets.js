const baskets = 2;
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let ans = 0;
    let cur = 0;
    const collected = {};
    const n = fruits.length;
    let count = 0;
    for(let l = 0, r = 0; r < n; r++){
        const fruit = fruits[r];

         if(!(fruit in collected)){
            collected[fruit] = 0;
            count++;
        }
        collected[fruit]++;
        cur++;

        while(count > baskets && l <= r){
            const stale = fruits[l];
            collected[stale]--;
            if(collected[stale] <= 0){
                delete collected[stale];
                count--;
            }
            cur--;
            l++;
        }
       
        ans = Math.max(ans, cur);
    }
    return ans;
};