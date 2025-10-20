/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let diff = 0;
    for(const op of operations){
        if(op.startsWith('+') || op.endsWith('+')) diff++;
        else diff--;
    }
    return diff;
};