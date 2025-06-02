/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = ratings.map(_ => 1);
    for(let i = 1; i < ratings.length; i++)
        if(ratings[i] > ratings[i-1]) candies[i] = Math.max(candies[i], candies[i-1] + 1);
    for(let i = ratings.length - 2; i >= 0; i--)
        if(ratings[i] > ratings[i+1]) candies[i] = Math.max(candies[i], candies[i+1] + 1);
    return candies.reduce((a,c) => a+c, 0);
};