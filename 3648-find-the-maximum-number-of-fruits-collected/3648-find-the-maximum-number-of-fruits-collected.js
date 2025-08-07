/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
    const  n = fruits.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i < j && j < n - 1 - i) fruits[i][j] = 0;
            if(j < i && i < n - 1 - j) fruits[i][j] = 0;
        }
    }
    let res = 0;
    for(let i = 0; i < n; i++) res += fruits[i][i];
    for(let i = 1; i < n; i++){
        for(let j = i + 1; j < n; j++){
            fruits[i][j] += Math.max(fruits[i-1][j-1], Math.max(fruits[i-1][j], j + 1 < n ? fruits[i-1][j+1] : 0));
        }
    }

    for(let j =  1; j < n; ++j){
        for(let i = j + 1; i < n; i++){
            fruits[i][j] += Math.max(fruits[i-1][j-1],  Math.max(fruits[i][j-1], i + 1 < n ? fruits[i+1][j-1] : 0))
        }
    }

    return res + fruits[n-1][n-2] + fruits[n-2][n-1];
};