const MULTIPLIER = 3;
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let power = 0;
    let run = 1;
    let val = num;
    while(val > 0){
        const d = val % 10;
        if(d === 6){
            power = run;
        }
        val -= d;
        val /= 10;
        run *= 10;
    }
    return num + power * MULTIPLIER;
};