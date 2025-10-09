/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length, m = mana.length;
    const endTime = new Array(1+n).fill(0);
    for(let p = 0; p < m; p++){
        const potion = mana[p];
        for(let w = 0; w < n; w++){
            const wizard = skill[w];
            endTime[w+1] = Math.max(endTime[w], endTime[w+1]) + potion * wizard;
        }
        for(let w = n - 1; w > 0; w--){
            const wizard = skill[w];
            endTime[w] = endTime[w+1] - wizard * potion;
        }
    }
    return endTime.at(-1);
};