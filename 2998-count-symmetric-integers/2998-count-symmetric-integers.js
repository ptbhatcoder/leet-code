/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    const isSymmetric = (num) => {
        let c = 0, sum = 0;
        let k =  num;
        while(k > 0){
            c++;
            const d = k % 10;
            sum += d;
            k =  k - d;
            k =  k / 10;
        }
        if(c & 1) return false;
        c = c / 2;
        k = num;
        let v = 0;
        while(c > 0){
            const d = k % 10;
            v += d;
            c--;
            k = k - d;
            k = k / 10;
        }
        return  (2 * v) === sum;
    }

    let count = 0;
    for(let num = low; num <= high; num++){
        if(isSymmetric(num)) count++;
    }
    return count;
};