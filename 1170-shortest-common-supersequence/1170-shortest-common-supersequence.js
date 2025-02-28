/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const len1 = str1.length; len2 = str2.length;
    if(!len1) return str2;
    if(!len2) return str1;

    const lcs = Array.from({ length:len1 + 1 }, _ => Array.from({ length:len2 + 1 }, _ => 0));
    for(let l1 = 1; l1 <= len1; l1++){
        for(let l2 = 1; l2 <= len2; l2++){
            const diag = str1[l1-1] === str2[l2-1] ?  1 : 0;
            lcs[l1][l2] = Math.max(lcs[l1-1][l2], lcs[l1][l2-1], diag + lcs[l1-1][l2-1]);
        }
    }
    const maxL = lcs[len1][len2];
    const result = Array.from({ length: len1 + len2 - maxL }, _ => '');
    let i1 = len1, i2 = len2;
    const pos = [];
    while(i1 && i2){
        if(str1[i1-1] === str2[i2-1]  && lcs[i1][i2] === 1 + lcs[i1-1][i2-1]) {
            pos.push(str2[i2-1]);
            i1--;
            i2--;
        } else if(lcs[i1][i2] === lcs[i1-1][i2]) i1--;
        else i2--;
    }
    i1 = 0; i2 = 0;
    let idx = 0;
    while(pos.length > 0){
        const c = pos.pop();
        while(i1 < len1 && str1[i1] !== c) result[idx++] = str1[i1++];
        while(i2 < len2 && str2[i2] !== c) result[idx++] = str2[i2++];
        result[idx++] = c;
        i1++;
        i2++;
    }
    while(i1 < len1) result[idx++] = str1[i1++];
    while(i2 < len2) result[idx++] = str2[i2++];
    return result.join('');
};