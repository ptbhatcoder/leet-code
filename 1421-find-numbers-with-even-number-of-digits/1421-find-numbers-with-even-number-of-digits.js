/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const isOdd = n => {
        let flag = false;
        while(n){
            flag = !flag;
            n = Math.floor(n / 10);
        }
        return flag;
    }
    let c = 0;
    for(const num of nums){
        if(!isOdd(num)) c++;
    }
    return c;
};