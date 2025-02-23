/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    const n = postorder.length;
    const findIndex = (val, arr = preorder) => {
        return arr.indexOf(val);
    }
    const buildForRange = (s, e) => {
        if(s > e) return null;
        if(e < 0 || e >= n) return null;
        if(s === e) return new TreeNode(postorder[s]);
        const val = postorder[e];
        const root = new TreeNode(val);
        const leftIndex = findIndex(val, preorder) + 1;
        if(leftIndex < n){
            const left = preorder[leftIndex];
            const postLeftIndex = findIndex(left, postorder);
            root.left = buildForRange(s, postLeftIndex);
            root.right = buildForRange(postLeftIndex + 1, e-1);
        }
        return root;
    }
    return buildForRange(0, n-1);
};