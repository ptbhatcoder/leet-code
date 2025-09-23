/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const n1 = v1.length, n2 = v2.length;
    for(let i = 0; i < Math.max(n1, n2); i++){
        const val1 = i >= n1 ? 0 : v1[i];
        const val2 = i >= n2 ? 0 : v2[i];
        if(val1 > val2) return 1;
        if(val1 < val2) return -1;
    }
    return 0;
};