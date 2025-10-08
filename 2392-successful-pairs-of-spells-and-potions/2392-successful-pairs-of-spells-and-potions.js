/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const n = spells.length;
    const m = potions.length;
    const ans = new Array(n).fill(0);
    potions.sort((a, b) => a - b);
    for(let i = 0; i < n; i++){
        const spell = spells[i];
        let s = 0, e = m - 1, pos = m;
        while(s <= e){
            const mid = s + ((e - s) >> 1);
            if(potions[mid] * spell >= success){
                pos = mid;
                e = mid - 1;
            } else s = mid + 1;
        }
        ans[i] = (m - pos);
    }
    return ans;
};