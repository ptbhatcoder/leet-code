const EPS = 0.001;
const getPairs = (a, b) => [a+b, a-b, b-a, a*b, a/b, b/a];
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    const vals = cards.map(num => 1.0000 *  num);
    const dfs = (nums) => {
        const n = nums.length;
        if(n === 1){
            if(Math.abs(nums[0] - 24) < 0.001) return true;
            return false;
        }
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                const next = nums.filter((_, ind) => ![i, j].includes(ind));
                const pairs = getPairs(nums[i], nums[j]);
                for(const val of pairs){
                    next.push(val);
                    if(dfs(next)) return true;
                    next.pop();
                }
            }
        }
        return false;
    }
    return dfs(vals);
};