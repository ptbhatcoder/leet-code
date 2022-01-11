/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let sum = 0;
    
    const sumVal = (root, sumSoFar = 0) => {
        if(!root){
            return;
        }
        const newSum = (sumSoFar << 1) + root.val;
        
        if(root.left || root.right){
            sumVal(root.left, newSum);
             sumVal(root.right, newSum);
        } else {
            sum += newSum;
        }
        
    }
    
    sumVal(root, 0);
    
    return sum;
};