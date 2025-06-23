const createPalindromeFrom = (num, odd = false) => {
    let val = odd ? Math.floor(num/10) : num, res = num;
    while(val > 0){
        res = res * 10;
        res = res + (val % 10);
        val = Math.floor(val / 10);
    }
    return res;
}

const isPalindrome = (val, base = 10) => {
    const s = val.toString(base);
    let i =0, j = s.length - 1;
    while(i < j){
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
    let card = 1, count = 0;
    let res = 0;
    while(count < n){
        const bound = card * 10;
        for(let seed = card; count < n && seed < bound; seed++){
            const pal = createPalindromeFrom(seed, true);
            if(isPalindrome(pal, k)){
                res += pal;
                count++;
            }
        }
        for(let seed = card; count < n && seed < bound; seed++){
            const pal = createPalindromeFrom(seed, false);
            if(isPalindrome(pal, k)){
                res += pal;
                count++;
            }
        }
        card = bound;
    }
    return res;
};