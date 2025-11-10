/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const st = [];
    const seen = new Set;
    let res = 0;
    for(const num of nums){
        if(num === 0){
            while(st.length > 0){
                seen.delete(st.pop());
            }
        } else {
            while(st.length > 0 && st.at(-1) > num){
                seen.delete(st.pop());
            }

            if(!seen.has(num)){
                res++;
                seen.add(num);
            }
            st.push(num);
        }
    }
    return res;
};